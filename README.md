# La Mexicana Pucón

Sitio estático con backend para integrar pasarelas de pago reales.

## Requisitos

- Node.js y npm instalados en tu equipo.
- Cuenta de Mercado Pago y/o Webpay.
- Credenciales configuradas en un archivo `.env`.

## Instalación

1. Copia `.env.example` a `.env`.
2. Completa las credenciales:
   - `MERCADOPAGO_ACCESS_TOKEN`
   - `WEBPAY_COMMERCE_CODE`
   - `WEBPAY_API_KEY`
   - `APP_BASE_URL`
3. Ejecuta:
   ```bash
   npm install
   ```

## Ejecución local

```bash
npm install
npm start
```

El servidor servirá el frontend y el backend en `http://localhost:3000`.

## Qué hace

- El frontend ahora envía el pedido a `/api/create-payment`.
- El backend crea la transacción en Mercado Pago o Webpay.
- El navegador se redirige al checkout externo del proveedor.
- Para Webpay el backend también recibe el retorno en `/api/webpay-return`.
- Para Mercado Pago el backend expone el webhook `/api/webhook/mercadopago`.

## Notas

- Esta integración usa la API de `checkout/preferences` de Mercado Pago.
- Para Webpay usa el endpoint de prueba de Transbank.
- Si necesitas publicar en GitHub Pages, este backend no funciona ahí; debes desplegar en un servidor con Node.js.
