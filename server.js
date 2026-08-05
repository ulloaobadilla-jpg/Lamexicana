const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname);
const fs = require("fs");
const multer = require("multer");

const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Simple server-side storage for orders
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const ordersFile = path.join(dataDir, "orders.json");
function readOrders() {
  try {
    if (!fs.existsSync(ordersFile)) return [];
    const raw = fs.readFileSync(ordersFile, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    console.warn("Could not read orders file", err);
    return [];
  }
}

function writeOrders(orders) {
  try {
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Could not write orders file", err);
    return false;
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const safeName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
    cb(null, safeName);
  }
});
const upload = multer({ storage });

const mercadopagoAccessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
const mercadopagoBaseUrl = process.env.MERCADOPAGO_BASE_URL || "https://api.mercadopago.com";
const appBaseUrl = process.env.APP_BASE_URL || `http://localhost:${port}`;

const webpayCommerceCode = process.env.WEBPAY_COMMERCE_CODE;
const webpayApiKey = process.env.WEBPAY_API_KEY;
const webpayEnvironment = process.env.WEBPAY_ENVIRONMENT || "test";
const webpayBaseUrl = process.env.WEBPAY_BASE_URL || "https://webpay3gint.transbank.cl";

// WhatsApp configuration (optional)
const whatsappToken = process.env.WHATSAPP_TOKEN; // Bearer token for WhatsApp Cloud API
const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID; // numeric ID for the phone number in WhatsApp Cloud
const ownerWhatsAppNumber = process.env.OWNER_WHATSAPP_NUMBER || "+56935976321";

async function sendWhatsAppNotification(order) {
  try {
    const msg = [];
    msg.push(`Nuevo pedido: ${order.id}`);
    msg.push(`Estado: ${order.status || order.state || 'received'}`);
    if (order.total) msg.push(`Total: ${order.total}`);
    if (order.whatsapp) msg.push(`Contacto: ${order.whatsapp}`);
    if (order.address) msg.push(`Dirección: ${order.address}`);
    if (order.items && order.items.length) {
      msg.push('Items:');
      order.items.forEach(i => msg.push(`- ${i.name || i.title} x${i.quantity || i.qty || 1}`));
    }
    if (order.paymentId) msg.push(`Pago: ${order.paymentId}`);
    const bodyText = msg.join('\n');

    if (whatsappToken && whatsappPhoneId) {
      // Send via WhatsApp Cloud API
      const url = `https://graph.facebook.com/v17.0/${whatsappPhoneId}/messages`;
      const payload = {
        messaging_product: 'whatsapp',
        to: ownerWhatsAppNumber.replace(/[^0-9]/g, ''),
        type: 'text',
        text: { body: bodyText }
      };
      const resp = await axios.post(url, payload, { headers: { Authorization: `Bearer ${whatsappToken}` } });
      console.log('WhatsApp sent for order', order.id, resp.data);
      return { ok: true, sent: true, resp: resp.data };
    }

    // Fallback: create wa.me link and persist it on the order
    const wa = `https://wa.me/${ownerWhatsAppNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(bodyText)}`;
    // attach to order record so admin can click
    try {
      const orders = readOrders();
      const idx = orders.findIndex(o => String(o.id) === String(order.id) || String(o.reference) === String(order.id));
      if (idx !== -1) {
        orders[idx].whatsappLink = wa;
        writeOrders(orders.slice(0, 200));
      }
    } catch (err) { console.warn('Could not persist whatsapp link', err); }

    console.log('Prepared wa.me link for order', order.id, wa);
    return { ok: true, sent: false, waLink: wa };
  } catch (err) {
    console.error('Error sending WhatsApp', err.response?.data || err.message || err);
    return { ok: false, error: err.message || 'error' };
  }
}

if (!mercadopagoAccessToken) {
  console.warn("Advertencia: no se ha configurado MERCADOPAGO_ACCESS_TOKEN. Mercado Pago no funcionará sin él.");
}

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.post("/api/create-payment", async (req, res) => {
  try {
    const { paymentMethod, order } = req.body;

    if (!paymentMethod || !order) {
      return res.status(400).json({ error: "paymentMethod y order son obligatorios." });
    }

    const amount = order.total || 0;
    const reference = order.id;

    if (paymentMethod === "mercadopago") {
      if (!mercadopagoAccessToken) {
        return res.status(500).json({ error: "Falta MERCADOPAGO_ACCESS_TOKEN en el servidor." });
      }

      const items = order.items.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price || 0,
        currency_id: "CLP"
      }));

      const payload = {
        items,
        external_reference: reference,
        payer: {
          email: order.whatsapp ? `${order.whatsapp.replace(/[^0-9]/g, "")}@example.com` : "cliente@example.com"
        },
        notification_url: `${appBaseUrl}/api/webhook/mercadopago`,
        back_urls: {
          success: `${appBaseUrl}/?payment=success&method=mercadopago&order=${reference}`,
          failure: `${appBaseUrl}/?payment=failure&method=mercadopago&order=${reference}`,
          pending: `${appBaseUrl}/?payment=pending&method=mercadopago&order=${reference}`
        }
      };

      const response = await axios.post(`${mercadopagoBaseUrl}/checkout/preferences`, payload, {
        headers: {
          Authorization: `Bearer ${mercadopagoAccessToken}`,
          "Content-Type": "application/json"
        }
      });

      const mpResponse = response.data;
      if (!mpResponse || !(mpResponse.init_point || mpResponse.sandbox_init_point)) {
        return res.status(500).json({ error: "No se pudo generar la URL de pago de Mercado Pago." });
      }

      const redirectUrl = mpResponse.sandbox_init_point || mpResponse.init_point;

      // persist preference id (payment identifier) to the order so webhooks can match
      try {
        const orders = readOrders();
        let idx = orders.findIndex(o => String(o.id) === String(reference) || String(o.reference) === String(reference));
        if (idx !== -1) {
          orders[idx].paymentId = mpResponse.id || mpResponse.preference_id || orders[idx].paymentId;
          orders[idx].paymentInitPoint = redirectUrl;
          orders[idx].updatedAt = new Date().toISOString();
        } else {
          orders.unshift({
            ...(order || {}),
            id: reference,
            reference,
            receivedAt: new Date().toISOString(),
            createdAt: order?.createdAt || new Date().toISOString(),
            status: order?.status || 'pending',
            paymentMethod,
            paymentId: mpResponse.id || mpResponse.preference_id,
            paymentInitPoint: redirectUrl
          });
        }
        writeOrders(orders.slice(0, 200));
        console.log('Payment started for order', reference, 'paymentId=', mpResponse.id || mpResponse.preference_id);
      } catch (err) {
        console.warn('Could not persist Mercado Pago preference id to order', err);
      }

      return res.json({ redirectUrl, paymentId: mpResponse.id || mpResponse.preference_id });
    }

    if (paymentMethod === "webpay") {
      if (!webpayCommerceCode || !webpayApiKey) {
        return res.status(500).json({ error: "Falta configuración de Webpay en el servidor." });
      }

      const buyOrder = reference;
      const sessionId = `WEBPAY-${Date.now()}`;
      const returnUrl = `${appBaseUrl}/api/webpay-return?order=${reference}`;

      const webpayPayload = {
        buy_order: buyOrder,
        session_id: sessionId,
        amount,
        return_url: returnUrl
      };

      const webpayUrl = `${webpayBaseUrl}/rswebpaytransaction/api/webpay/v1.0/transactions`;
      const webpayResponse = await axios.post(webpayUrl, webpayPayload, {
        headers: {
          "Tbk-Api-Key-Id": webpayCommerceCode,
          "Tbk-Api-Key-Secret": webpayApiKey,
          "Content-Type": "application/json"
        }
      });

      if (!webpayResponse.data || !webpayResponse.data.url || !webpayResponse.data.token) {
        return res.status(500).json({ error: "No se pudo iniciar la transacción de Webpay." });
      }

      // persist webpay token to order for reconciliation
      try {
        const orders = readOrders();
        let idx = orders.findIndex(o => String(o.id) === String(reference) || String(o.reference) === String(reference));
        if (idx !== -1) {
          orders[idx].paymentId = webpayResponse.data.token;
          orders[idx].paymentInitPoint = `${webpayResponse.data.url}?token_ws=${webpayResponse.data.token}`;
          orders[idx].updatedAt = new Date().toISOString();
        } else {
          orders.unshift({
            ...(order || {}),
            id: reference,
            reference,
            receivedAt: new Date().toISOString(),
            createdAt: order?.createdAt || new Date().toISOString(),
            status: order?.status || 'pending',
            paymentMethod,
            paymentId: webpayResponse.data.token,
            paymentInitPoint: `${webpayResponse.data.url}?token_ws=${webpayResponse.data.token}`
          });
        }
        writeOrders(orders.slice(0, 200));
        console.log('Webpay started for order', reference, 'token=', webpayResponse.data.token);
      } catch (err) {
        console.warn('Could not persist Webpay token to order', err);
      }

      return res.json({ redirectUrl: `${webpayResponse.data.url}?token_ws=${webpayResponse.data.token}`, paymentId: webpayResponse.data.token });
    }

    return res.status(400).json({ error: "Método de pago no soportado." });
  } catch (error) {
    console.error(error.response?.data || error.message || error);
    return res.status(500).json({ error: "Error interno al crear el pago." });
  }
});

// Persist order server-side (minimal storage)
app.post("/api/orders", async (req, res) => {
  try {
    const order = req.body;
    if (!order || !order.id) return res.status(400).json({ error: "Order must include id" });
    const orders = readOrders();
    orders.unshift({ ...order, receivedAt: new Date().toISOString() });
    writeOrders(orders.slice(0, 200));

    // Notify owner via WhatsApp automatically. Persist fallback link or send result.
    const notifyResult = await sendWhatsAppNotification(order);
    if (notifyResult) {
      orders[0].whatsappSent = notifyResult.ok && notifyResult.sent;
      if (notifyResult.waLink) {
        orders[0].whatsappLink = notifyResult.waLink;
      }
      writeOrders(orders.slice(0, 200));
    }

    return res.json({ ok: true, order: orders[0], whatsapp: notifyResult });
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ error: "Error saving order" });
  }
});

app.get("/api/orders", (req, res) => {
  try {
    const orders = readOrders();
    return res.json({ orders });
  } catch (error) {
    console.error("Error reading orders:", error);
    return res.status(500).json({ error: "Error reading orders" });
  }
});

// Update order status
app.put('/api/orders/:id', (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    if (!id) return res.status(400).json({ error: 'Missing order id' });
    const orders = readOrders();
    const idx = orders.findIndex(o => String(o.id) === String(id) || String(o.reference) === String(id));
    if (idx === -1) return res.status(404).json({ error: 'Order not found' });
    orders[idx].status = status || orders[idx].status || 'updated';
    orders[idx].updatedAt = new Date().toISOString();
    writeOrders(orders.slice(0, 200));
    // when status changes, optionally notify via WhatsApp
    try {
      (async () => {
        await sendWhatsAppNotification(orders[idx]);
      })();
    } catch (e) { /* ignore */ }
    return res.json({ ok: true, order: orders[idx] });
  } catch (err) {
    console.error('Error updating order:', err);
    return res.status(500).json({ error: 'Error updating order' });
  }
});

app.get("/api/webpay-return", (req, res) => {
  return res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Webpay retorno</title></head><body><h1>Pago Webpay recibido</h1><p>${JSON.stringify(req.query)}</p><p>Regresa a la tienda para revisar el estado.</p></body></html>`);
});

// Manual trigger to (re)send WhatsApp notification for an order
app.post('/api/orders/:id/send-whatsapp', async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: 'Missing order id' });
    const orders = readOrders();
    const idx = orders.findIndex(o => String(o.id) === String(id) || String(o.reference) === String(id));
    if (idx === -1) return res.status(404).json({ error: 'Order not found' });
    const order = orders[idx];
    const result = await sendWhatsAppNotification(order);
    if (result) {
      orders[idx].whatsappSent = result.ok && result.sent;
      if (result.waLink) orders[idx].whatsappLink = result.waLink;
      orders[idx].updatedAt = new Date().toISOString();
      writeOrders(orders.slice(0, 200));
    }
    return res.json({ ok: true, result });
  } catch (err) {
    console.error('Error in send-whatsapp endpoint', err);
    return res.status(500).json({ error: 'Error' });
  }
});

// Mercado Pago webhook handler (accepts POST from MP)
// Shared processor for Mercado Pago webhook-like payloads
async function processMercadoPagoNotification(body) {
  console.log("Processing Mercado Pago payload:", JSON.stringify(body).slice(0, 1000));
  const payload = body || {};
  const resourceId = (payload.data && (payload.data.id || payload.data.transaction_id)) || payload.id || payload.resource_id || null;

  if (!resourceId && !payload.external_reference && !payload.preference_id) {
    return { ok: true, note: 'no-resource-id' };
  }

  let paymentInfo = null;
  if (mercadopagoAccessToken && resourceId) {
    try {
      const resp = await axios.get(`${mercadopagoBaseUrl}/v1/payments/${resourceId}`, {
        headers: { Authorization: `Bearer ${mercadopagoAccessToken}` }
      });
      paymentInfo = resp.data;
    } catch (err) {
      console.warn('Could not fetch payment info from Mercado Pago', err.response?.data || err.message || err);
    }
  }

  const externalRef = paymentInfo?.external_reference || paymentInfo?.order?.external_reference || payload.external_reference || payload.preference_id || payload.data?.external_reference || null;

  const orders = readOrders();
  let idx = -1;
  if (externalRef) idx = orders.findIndex(o => String(o.id) === String(externalRef) || String(o.reference) === String(externalRef));
  if (idx === -1 && resourceId) idx = orders.findIndex(o => String(o.paymentId) === String(resourceId) || String(o.mpPaymentId) === String(resourceId));

  if (idx === -1) {
    console.warn('Webhook: could not match order for resource', resourceId, 'ref', externalRef);
    return { ok: true, note: 'no-matching-order' };
  }

  const order = orders[idx];
  let newStatus = order.status || 'received';
  if (paymentInfo && paymentInfo.status) {
    const st = String(paymentInfo.status).toLowerCase();
    if (st === 'approved' || st === 'paid') newStatus = 'paid';
    else if (st === 'pending') newStatus = 'pending';
    else if (st === 'cancelled' || st === 'refunded' || st === 'cancelled_by_user') newStatus = 'cancelled';
  } else if (payload.type === 'payment' || payload.topic === 'payment') {
    if (payload.status === 'approved' || payload.data?.status === 'approved') newStatus = 'paid';
  }

  orders[idx].status = newStatus;
  orders[idx].paymentInfo = paymentInfo || payload;
  orders[idx].paymentId = resourceId || orders[idx].paymentId;
  orders[idx].updatedAt = new Date().toISOString();
  writeOrders(orders.slice(0, 200));

  console.log('Order', orders[idx].id, 'updated to', newStatus);

  if (newStatus === 'paid') {
    try {
      const notifyResult = await sendWhatsAppNotification(orders[idx]);
      if (notifyResult) {
        orders[idx].whatsappSent = notifyResult.ok && notifyResult.sent;
        if (notifyResult.waLink) orders[idx].whatsappLink = notifyResult.waLink;
        orders[idx].updatedAt = new Date().toISOString();
        writeOrders(orders.slice(0, 200));
      }
    } catch (err) {
      console.warn('Could not send WhatsApp on payment confirmation', err);
    }
  }

  return { ok: true, order: orders[idx] };
}

app.post("/api/webhook/mercadopago", async (req, res) => {
  try {
    const result = await processMercadoPagoNotification(req.body);
    return res.json(result);
  } catch (err) {
    console.error('Error handling Mercado Pago webhook', err);
    return res.status(500).json({ error: 'webhook error' });
  }
});

// Simulation endpoint for local testing: accepts arbitrary JSON and processes it
app.post('/api/webhook/simulate', async (req, res) => {
  try {
    const result = await processMercadoPagoNotification(req.body);
    return res.json({ ok: true, simulated: true, result });
  } catch (err) {
    console.error('Error in simulate webhook', err);
    return res.status(500).json({ error: 'simulate error' });
  }
});

app.post("/api/upload-image", upload.single("image"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No se recibió archivo" });
    const fileUrl = `${appBaseUrl}/uploads/${req.file.filename}`;
    return res.json({ url: fileUrl });
  } catch (error) {
    console.error("Error subiendo imagen:", error);
    return res.status(500).json({ error: "Error guardando la imagen" });
  }
});

app.use("/uploads", express.static(uploadsDir));

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
