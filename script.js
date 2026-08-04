const initialProducts = [
  { id: 9, name: "Tacos de Bistec", category: "Tacos", price: 8990, image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=700&q=85", tag: "Bistec" },
  { id: 10, name: "Tacos de Cerdo", category: "Tacos", price: 8490, image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=700&q=85", tag: "Cerdo" },
  { id: 11, name: "Tacos Mixtos", category: "Tacos", price: 10990, image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=700&q=85", tag: "Mixto" },
  { id: 12, name: "Tacos de Chorizo", category: "Tacos", price: 8990, image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=700&q=85", tag: "Chorizo" },
  { id: 13, name: "Burrito de Bistec", category: "Burritos", price: 9990, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85", tag: "Bistec" },
  { id: 14, name: "Burrito de Cerdo", category: "Burritos", price: 9490, image: "https://images.unsplash.com/photo-1612548127023-b29161bd6f9a?auto=format&fit=crop&w=700&q=85", tag: "Cerdo" },
  { id: 15, name: "Burrito de Chorizo", category: "Burritos", price: 9490, image: "https://images.unsplash.com/photo-1552913903-2cffa1962dc7?auto=format&fit=crop&w=700&q=85", tag: "Chorizo" },
  { id: 3, name: "Chilaquiles La Mexicana", category: "Chilaquiles", price: 8990, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=85", tag: "Favorito" },
  { id: 4, name: "Quesadillas de Queso", category: "Quesadillas", price: 7990, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=85", tag: "Artesanal" },
  { id: 5, name: "Salsa Mexicana Chimichurri", category: "Salsas", price: 3500, image: "IMG_0353.PNG", tag: "Casera" },
  { id: 6, name: "Salsa Roja Taquera", category: "Salsas", price: 3500, image: "IMG_0351.PNG", tag: "Picante" },
  { id: 7, name: "Salsa Verde Taquera", category: "Salsas", price: 3500, image: "IMG_0354.PNG", tag: "Fresca" },
  { id: 8, name: "Salsa Tatemada", category: "Salsas", price: 3500, image: "IMG_0350.PNG", tag: "Favorita" },
  { id: 16, name: "Tortillas de Maíz", category: "Tortillas", price: 4500, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85", tag: "Hechas a mano" },
  { id: 17, name: "Pozole Rojo", category: "Pozole", price: 9990, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85", tag: "Tradicional" },
  { id: 18, name: "Flautas de Pollo", category: "Flautas", price: 8990, image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=700&q=85", tag: "Crujientes" },
  { id: 19, name: "Sopes de la Casa", category: "Sopes", price: 7990, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=85", tag: "Caseros" },
  { id: 20, name: "Sincronizadas de Jamón y Queso", category: "Sincronizadas", price: 7490, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=85", tag: "Favoritas" }
];

function normalizeList(value) {
  return String(value || "")
    .split(/\n|,/) 
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadProducts() {
  try {
    const storedProducts = JSON.parse(localStorage.getItem("lamexicana-products") || "null");
    if (Array.isArray(storedProducts) && storedProducts.length) {
      return storedProducts.map((product, index) => ({
        id: Number(product.id ?? index + 1000),
        name: product.name || "",
        category: product.category || "Sin categoría",
        price: Number(product.price || 0),
        image: product.image || "",
        tag: product.tag || "",
        description: product.description || productDescriptions[Number(product.id)] || "",
        complements: Array.isArray(product.complements) ? product.complements : normalizeList(product.complements),
        options: Array.isArray(product.options) ? product.options : normalizeList(product.options),
        images: Array.isArray(product.images) ? product.images.filter(Boolean) : normalizeList(product.images)
      }));
    }
  } catch (error) {
    console.warn("No se pudieron cargar los productos guardados", error);
  }

  return initialProducts.map((product) => ({
    ...product,
    description: productDescriptions[product.id] || "",
    complements: [],
    options: [],
    images: []
  }));
}

function persistProducts() {
  localStorage.setItem("lamexicana-products", JSON.stringify(products));
}

let products = loadProducts();
persistProducts();

const categoryHighlights = [
  { name: "Todos", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85" },
  { name: "Tacos", image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=85" },
  { name: "Burritos", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85" },
  { name: "Chilaquiles", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=1000&q=85" },
  { name: "Quesadillas", image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1000&q=85" },
  { name: "Salsas", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1000&q=85" },
  { name: "Tortillas", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85" },
  { name: "Pozole", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85" },
  { name: "Flautas", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=85" },
  { name: "Sopes", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=1000&q=85" },
  { name: "Sincronizadas", image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1000&q=85" }
];

const productDescriptions = {
  9: "Tacos de bistec sazonado, preparados con cebolla, cilantro y acompañamientos de la casa.",
  10: "Tacos de cerdo jugoso, cocinados con sazón mexicana para disfrutar en cada mordida.",
  11: "Una combinación de nuestras carnes favoritas para quienes quieren probar un poco de todo.",
  12: "Tacos de chorizo sazonado, con cebolla, cilantro y acompañamientos de la casa.",
  13: "Burrito abundante de bistec, arroz, frijoles y frescos acompañamientos mexicanos.",
  14: "Burrito de cerdo jugoso envuelto con arroz, frijoles y sabores de la casa.",
  15: "Burrito de chorizo con arroz, frijoles y acompañamientos para disfrutar hasta el último bocado.",
  3: "Totopos bañados en salsa, con una combinación casera inspirada en los desayunos mexicanos.",
  4: "Tortillas doraditas con queso fundido, ideales para compartir o disfrutar sin apuro.",
  5: "Salsa cremosa de sabor intenso y picor medio, preparada para acompañar tus tacos.",
  6: "Salsa roja taquera de picor medio para darle carácter a cada plato.",
  7: "Salsa verde fresca y vibrante, perfecta para tacos, quesadillas y chilaquiles.",
  8: "Salsa tatemada con notas ahumadas y picor medio, hecha para levantar cualquier antojo.",
  16: "Tortillas de maíz nixtamalizado, suaves y recién hechas a mano para acompañar tus comidas favoritas.",
  17: "Pozole rojo con maíz cacahuazintle, carne de cerdo y un caldo especiado de sabor profundo.",
  18: "Flautas doradas de pollo, servidas con crema, queso, lechuga y salsa de la casa.",
  19: "Sopes de masa dorada con frijoles, carne sazonada, lechuga, queso y crema.",
  20: "Tortillas de harina rellenas de jamón y queso fundido, doradas hasta quedar irresistibles."
};

let cart = JSON.parse(localStorage.getItem("lamexicana-cart") || "[]");
const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const cartPanel = document.querySelector("#cart-panel");
const navMenuItem = document.querySelector(".nav-menu-item");
const menuSubmenu = document.querySelector("#menu-submenu");
const cartOverlay = document.querySelector("#cart-overlay");
const productModal = document.querySelector("#product-modal");
const productModalOverlay = document.querySelector("#product-modal-overlay");
const shippingAddressInput = document.querySelector("#shipping-address");
const checkoutError = document.querySelector("#checkout-error");
const checkoutSuccess = document.querySelector("#checkout-success");
const paymentStatus = document.querySelector("#payment-status");
const paymentStatusText = document.querySelector("#payment-status-text");
const cartTotalFinal = document.querySelector("#cart-total-final");
const paymentMethods = Array.from(document.querySelectorAll('input[name="payment-method"]'));
const whatsappInput = document.querySelector("#whatsapp-contact");
const orderCommentsInput = document.querySelector("#order-comments");
const whatsappNumber = "56935976321";
const header = document.querySelector(".site-header");
const darkSections = document.querySelectorAll("[data-dark-surface]");
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroDots = document.querySelector("#hero-dots");
const assistantButton = document.querySelector("#assistant-float");
const assistantPanel = document.querySelector("#assistant-panel");
const closeAssistantButton = document.querySelector("#assistant-close");
const adminToggleButton = document.querySelector("#admin-toggle");
const adminPanel = document.querySelector("#admin-panel");
const closeAdminPanelButton = document.querySelector("#close-admin-panel");
const adminAccessOverlay = document.querySelector("#admin-access-overlay");
const adminPasswordInput = document.querySelector("#admin-password-input");
const adminTogglePasswordButton = document.querySelector("#admin-toggle-password");
const adminAccessSubmitButton = document.querySelector("#admin-access-submit");
const adminAccessCancelButton = document.querySelector("#admin-access-cancel");
const adminAccessStatus = document.querySelector("#admin-access-status");
const adminProductSelect = document.querySelector("#admin-product-select");
const adminProductName = document.querySelector("#admin-product-name");
const adminProductCategory = document.querySelector("#admin-product-category");
const adminProductPrice = document.querySelector("#admin-product-price");
const adminProductImage = document.querySelector("#admin-product-image");
const adminProductImages = document.querySelector("#admin-product-images");
const adminProductTag = document.querySelector("#admin-product-tag");
const adminProductDescription = document.querySelector("#admin-product-description");
const adminProductComplements = document.querySelector("#admin-product-complements");
const adminProductOptions = document.querySelector("#admin-product-options");
const adminSaveButton = document.querySelector("#admin-save-product");
const adminNewButton = document.querySelector("#admin-new-product");
const adminDeleteButton = document.querySelector("#admin-delete-product");
const adminStatus = document.querySelector("#admin-status");
const adminProductList = document.querySelector("#admin-product-list");
const adminStatsProducts = document.querySelector("#admin-stats-products");
const adminStatsCategories = document.querySelector("#admin-stats-categories");
const adminStatsSalsas = document.querySelector("#admin-stats-salsas");
let selectedProduct = null;
let selectedQuantity = 1;
let activeHeroSlide = 0;
let activeAdminProductId = null;
let isAdminAuthenticated = false;
const ADMIN_PASSWORD = "LaMexicana2026";

if (heroSlides.length && heroDots) {
  heroSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver imagen ${index + 1}`);
    dot.addEventListener("click", () => showHeroSlide(index));
    heroDots.appendChild(dot);
  });
}

function showHeroSlide(index) {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeHeroSlide);
  });

  if (heroDots) {
    const dots = heroDots.querySelectorAll("button");
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeHeroSlide));
  }
}

if (heroSlides.length > 1) {
  setInterval(() => showHeroSlide(activeHeroSlide + 1), 5000);
}

showHeroSlide(0);

if (header && darkSections.length) {
  const getBrightness = (color) => {
    const match = color.match(/\d+/g);
    if (!match || match.length < 3) return 1;
    const [red, green, blue] = match.slice(0, 3).map(Number);
    return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  };

  const updateHeaderContrast = () => {
    const headerRect = header.getBoundingClientRect();
    const x = headerRect.left + headerRect.width / 2;
    const y = headerRect.top + headerRect.height / 2;
    const target = document.elementFromPoint(x, y);

    let isOverDarkSurface = false;
    let current = target;

    while (current && current !== document.body) {
      if (current.matches("[data-dark-surface], .story-section, .taco-video-section, .promo-bar")) {
        isOverDarkSurface = true;
        break;
      }

      const backgroundColor = window.getComputedStyle(current).backgroundColor;
      if (backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)" && backgroundColor !== "transparent") {
        const brightness = getBrightness(backgroundColor);
        if (brightness < 0.6) {
          isOverDarkSurface = true;
          break;
        }
      }

      current = current.parentElement;
    }

    header.classList.toggle("is-on-dark", isOverDarkSurface);
  };

  updateHeaderContrast();
  window.addEventListener("scroll", updateHeaderContrast, { passive: true });
  window.addEventListener("resize", updateHeaderContrast);
}

function money(value) { return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value); }

function setupRevealAnimations() {
  const revealTargets = document.querySelectorAll(".reveal");
  if (!revealTargets.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

function initVisitCounter() {
  const counter = document.querySelector("#visit-counter");
  if (!counter) return;

  const storageKey = "lamexicana-visits";
  const currentVisits = Number(localStorage.getItem(storageKey) || 0);
  const nextVisits = currentVisits + 1;

  localStorage.setItem(storageKey, String(nextVisits));
  counter.textContent = `Visitas: ${nextVisits}`;
}

initVisitCounter();

function renderCategoryCards() {
  const categoryHero = document.querySelector("#category-hero");
  if (!categoryHero) return;

  categoryHero.innerHTML = `
    <div class="category-grid">
      ${categoryHighlights.map((category) => `
        <button class="category-card ${activeCategory === category.name ? "active" : ""}" type="button" data-category="${category.name}" style="background-image: url('${category.image}');">
          <span class="category-card-content">
            <strong>${category.name === "Todos" ? "Todo el menú" : category.name}</strong>
          </span>
        </button>
      `).join("")}
    </div>
  `;
}

function updateMenuCategoryState() {
  if (!menuSubmenu) return;
  const buttons = menuSubmenu.querySelectorAll("[data-category]");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === activeCategory);
  });
}

function setActiveCategory(category) {
  activeCategory = category;
  renderCategoryCards();
  renderProducts(activeCategory);
  updateMenuCategoryState();
}

function scrollToCatalog() {
  const catalogSection = document.querySelector("#catalogo");
  if (!catalogSection || !productGrid) return;

  const headerOffset = Math.max(110, (header?.offsetHeight || 70) + 24);
  const targetPosition = productGrid.getBoundingClientRect().top + window.scrollY - headerOffset;
  const sectionPosition = catalogSection.getBoundingClientRect().top + window.scrollY - headerOffset;
  const offsetPosition = Math.max(sectionPosition, targetPosition);

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

function renderProducts(category = "Todos") {
  const query = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === "Todos" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...visibleProducts].sort((a, b) => {
    if (category === "Todos") {
      const aIsSauce = a.category === "Salsas" ? 0 : 1;
      const bIsSauce = b.category === "Salsas" ? 0 : 1;
      if (aIsSauce !== bIsSauce) return aIsSauce - bIsSauce;
    }
    return 0;
  });

  productGrid.innerHTML = sortedProducts.length ? sortedProducts.map((product, index) => `
    <article class="product-card reveal" data-product-id="${product.id}" style="transition-delay:${index * 70}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-meta"><span>${product.category} · ${money(product.price)}</span><button class="add-button" type="button" data-product-id="${product.id}">Añadir +</button></div>
      </div>
    </article>
  `).join("") : `<p class="empty-cart reveal">No encontramos antojos con esa búsqueda.</p>`;

  requestAnimationFrame(() => setupRevealAnimations());
}

function persistCart() {
  localStorage.setItem("lamexicana-cart", JSON.stringify(cart));
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-total").textContent = money(total);
  if (cartTotalFinal) {
    cartTotalFinal.textContent = money(total);
  }
  document.querySelector("#cart-items").innerHTML = cart.length ? cart.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${item.quantity} x ${money(item.price)}</span>
      </div>
      <div class="cart-quantity-control" aria-label="Cambiar cantidad de ${item.name}">
        <button class="cart-qty-button" type="button" data-qty-action="decrease" data-qty-id="${item.id}" aria-label="Restar ${item.name}">−</button>
        <span class="cart-qty-value">${item.quantity}</span>
        <button class="cart-qty-button" type="button" data-qty-action="increase" data-qty-id="${item.id}" aria-label="Agregar más ${item.name}">+</button>
      </div>
      <button class="remove-item" type="button" data-remove-id="${item.id}" aria-label="Quitar ${item.name}">×</button>
    </div>
  `).join("") : `<p class="empty-cart">Todavía no has elegido nada.<br>Tu próximo antojo puede estar aquí.</p>`;
  persistCart();
}

function updateCartQuantity(productId, delta) {
  const existingItem = cart.find((item) => item.id === productId);
  if (!existingItem) return;

  existingItem.quantity += delta;

  if (existingItem.quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  }

  renderCart();
}

function triggerAddFeedback(sourceElement) {
  const cartButton = document.querySelector("#cart-button");

  if (sourceElement) {
    sourceElement.classList.remove("is-added");
    void sourceElement.offsetWidth;
    sourceElement.classList.add("is-added");
  }

  if (cartButton) {
    cartButton.classList.remove("is-bumping");
    void cartButton.offsetWidth;
    cartButton.classList.add("is-bumping");
  }

  window.setTimeout(() => {
    sourceElement?.classList.remove("is-added");
    cartButton?.classList.remove("is-bumping");
  }, 700);
}

function addToCart(productId, sourceElement = null) {
  const product = products.find((item) => item.id === productId);
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
  triggerAddFeedback(sourceElement);
}

function buildWhatsAppMessage(order) {
  const productLines = order.items.map((item) => `- ${item.quantity} x ${item.name} (${money(item.price * item.quantity)})`).join("\n");
  const comments = order.comments || "Sin comentarios";
  return [
    "Hola, tengo un nuevo pedido en La Mexicana:",
    `Pedido: ${order.id}`,
    `Fecha: ${new Date(order.createdAt).toLocaleString("es-CL")}`,
    `WhatsApp: ${order.whatsapp}`,
    `Método de pago: ${order.paymentName}`,
    `Dirección de envío: ${order.address}`,
    `Comentarios: ${comments}`,
    "",
    "Productos:",
    productLines,
    "",
    `Total: ${money(order.total)}`,
    "",
    "Gracias por confirmar la compra."
  ].join("\n");
}

function sendOrderToWhatsApp(order) {
  const message = encodeURIComponent(buildWhatsAppMessage(order));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer,width=620,height=760");

  if (!whatsappWindow) {
    window.location.href = whatsappUrl;
  }
}

function saveOrder(paymentName) {
  const orderId = `LM-${Date.now().toString().slice(-6)}`;
  const order = {
    id: orderId,
    createdAt: new Date().toISOString(),
    items: cart.map((item) => ({ ...item })),
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    address: shippingAddressInput.value.trim(),
    paymentMethod: getSelectedPaymentMethod(),
    paymentName,
    whatsapp: whatsappInput.value.trim(),
    comments: orderCommentsInput?.value.trim() || ""
  };

  const savedOrders = JSON.parse(localStorage.getItem("lamexicana-orders") || "[]") || [];
  savedOrders.unshift(order);
  localStorage.setItem("lamexicana-orders", JSON.stringify(savedOrders.slice(0, 8)));
  sendOrderToWhatsApp(order);

  const successMeta = document.querySelector("#checkout-success-meta");
  if (successMeta) {
    successMeta.textContent = `Pedido ${orderId} · ${order.items.length} producto(s) · ${money(order.total)} · detalle enviado automáticamente`;
  }
}

function openProductModal(productId) {
  selectedProduct = products.find((product) => product.id === productId);
  if (!selectedProduct) return;

  selectedQuantity = 1;
  const modalImage = document.querySelector("#modal-product-image");
  const modalExtra = document.querySelector("#modal-product-extra");
  const mainImage = selectedProduct.image || (selectedProduct.images && selectedProduct.images[0]) || "";
  const galleryImages = (selectedProduct.images || []).filter((image) => image && image !== mainImage);
  modalImage.src = mainImage;
  modalImage.alt = selectedProduct.name;
  document.querySelector("#modal-product-category").textContent = selectedProduct.category;
  document.querySelector("#modal-product-name").textContent = selectedProduct.name;
  document.querySelector("#modal-product-description").textContent = selectedProduct.description || productDescriptions[selectedProduct.id] || "";
  modalExtra.innerHTML = `
    ${selectedProduct.complements?.length ? `<div><strong>Complementos</strong>${selectedProduct.complements.join(" · ")}</div>` : ""}
    ${selectedProduct.options?.length ? `<div><strong>Opciones</strong>${selectedProduct.options.join(" · ")}</div>` : ""}
    ${galleryImages.length ? `<div class="modal-gallery"><strong>Más fotos</strong>${galleryImages.map((image) => `<img src="${image}" alt="${selectedProduct.name}">`).join("")}</div>` : ""}
  `;
  document.querySelector("#modal-product-price").textContent = money(selectedProduct.price);
  document.querySelector("#product-quantity").textContent = selectedQuantity;
  productModal.classList.toggle("sauce-detail", selectedProduct.category === "Salsas");
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  productModalOverlay.hidden = false;
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  productModalOverlay.hidden = true;
}

function openCart() { cartPanel.classList.add("open"); cartPanel.setAttribute("aria-hidden", "false"); cartOverlay.hidden = false; document.body.classList.add("cart-is-open"); }
function closeCart() { cartPanel.classList.remove("open"); cartPanel.setAttribute("aria-hidden", "true"); cartOverlay.hidden = true; document.body.classList.remove("cart-is-open"); }

let activeCategory = "Todos";
renderCategoryCards();
if (menuSubmenu) {
  menuSubmenu.innerHTML = categoryHighlights.map((category) => `
    <button class="submenu-link ${activeCategory === category.name ? "active" : ""}" type="button" data-category="${category.name}">
      ${category.name === "Todos" ? "Todo el menú" : category.name}
    </button>
  `).join("");
  updateMenuCategoryState();
  menuSubmenu.addEventListener("mouseenter", () => navMenuItem?.classList.add("is-open"));
  menuSubmenu.addEventListener("mouseleave", (event) => {
    if (event.relatedTarget && navMenuItem?.contains(event.relatedTarget)) return;
    navMenuItem?.classList.remove("is-open");
  });
  menuSubmenu.addEventListener("mouseover", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    setActiveCategory(button.dataset.category);
    scrollToCatalog();
  });
  menuSubmenu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    setActiveCategory(button.dataset.category);
    scrollToCatalog();
  });
}

if (navMenuItem) {
  const keepMenuOpen = (event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget && (navMenuItem.contains(nextTarget) || (menuSubmenu && menuSubmenu.contains(nextTarget)))) return;
    navMenuItem.classList.add("is-open");
  };

  const closeMenuOnLeave = (event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget && (navMenuItem.contains(nextTarget) || (menuSubmenu && menuSubmenu.contains(nextTarget)))) return;
    navMenuItem.classList.remove("is-open");
  };

  navMenuItem.addEventListener("mouseenter", keepMenuOpen);
  navMenuItem.addEventListener("mouseleave", closeMenuOnLeave);
  if (menuSubmenu) {
    menuSubmenu.addEventListener("mouseenter", keepMenuOpen);
    menuSubmenu.addEventListener("mouseleave", closeMenuOnLeave);
  }
}

const categoryHero = document.querySelector("#category-hero");
if (categoryHero) {
  categoryHero.addEventListener("click", (event) => {
    const card = event.target.closest("[data-category]");
    if (!card) return;
    setActiveCategory(card.dataset.category);
    scrollToCatalog();
  });
}
productGrid.addEventListener("click", (event) => { const addButton = event.target.closest(".add-button"); if (addButton) { addToCart(Number(addButton.closest("[data-product-id]").dataset.productId), addButton); return; } const card = event.target.closest("[data-product-id]"); if (card) openProductModal(Number(card.dataset.productId)); });
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-id]");
  if (removeButton) {
    cart = cart.filter((item) => item.id !== Number(removeButton.dataset.removeId));
    renderCart();
    return;
  }

  const quantityButton = event.target.closest("[data-qty-id]");
  if (quantityButton) {
    const delta = quantityButton.dataset.qtyAction === "increase" ? 1 : -1;
    updateCartQuantity(Number(quantityButton.dataset.qtyId), delta);
  }
});
searchInput.addEventListener("input", () => renderProducts(activeCategory));
document.querySelector("#cart-button").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function clearCheckoutFeedback() {
  checkoutError.hidden = true;
  checkoutError.textContent = "";
  checkoutSuccess.hidden = true;
  if (checkoutSuccess.querySelector(".checkout-success-message")) {
    checkoutSuccess.querySelector(".checkout-success-message").textContent = "";
  }
  if (paymentStatus) {
    paymentStatus.hidden = true;
    paymentStatusText.textContent = "Procesando pago...";
  }
}

function getSelectedPaymentMethod() {
  const selected = paymentMethods.find((input) => input.checked);
  return selected ? selected.value : "credito";
}

function updatePaymentSelectionUI() {
  paymentMethods.forEach((input) => {
    const option = input.closest(".payment-option");
    if (option) {
      option.classList.toggle("active", input.checked);
    }
  });
}

function getPaymentMethodLabel(method) {
  const labels = {
    credito: "Tarjeta de crédito",
    debito: "Tarjeta de débito",
    transferencia: "Transferencia bancaria"
  };
  return labels[method] || "Método de pago";
}

function validateCheckout() {
  clearCheckoutFeedback();

  if (!cart.length) {
    checkoutError.textContent = "Agrega productos al carrito antes de hacer el pedido.";
    checkoutError.hidden = false;
    return false;
  }

  if (!shippingAddressInput.value.trim()) {
    checkoutError.textContent = "Ingresa tu dirección de envío para confirmar el pedido.";
    checkoutError.hidden = false;
    shippingAddressInput.focus();
    return false;
  }

  if (!whatsappInput?.value.trim()) {
    checkoutError.textContent = "Agrega tu WhatsApp para recibir el detalle del pedido.";
    checkoutError.hidden = false;
    whatsappInput?.focus();
    return false;
  }

  return true;
}

if (shippingAddressInput) {
  shippingAddressInput.addEventListener("input", () => {
    if (checkoutError.textContent) {
      clearCheckoutFeedback();
    }
  });
}

if (whatsappInput) {
  whatsappInput.addEventListener("input", () => {
    if (checkoutError.textContent) {
      clearCheckoutFeedback();
    }
  });
}

updatePaymentSelectionUI();
paymentMethods.forEach((input) => {
  input.addEventListener("change", () => {
    updatePaymentSelectionUI();
    clearCheckoutFeedback();
  });
});

document.querySelector("#secure-pay-button").addEventListener("click", () => {
  if (!validateCheckout()) return;

  const paymentName = getPaymentMethodLabel(getSelectedPaymentMethod());
  checkoutSuccess.hidden = true;
  if (paymentStatus) {
    paymentStatus.hidden = false;
    paymentStatusText.textContent = `Procesando tu pedido con ${paymentName}...`;
  }

  window.setTimeout(() => {
    const successMessage = document.querySelector("#checkout-success-message");
    if (successMessage) {
      successMessage.textContent = `Tu pedido fue confirmado con ${paymentName}.`;
    }
    saveOrder(paymentName);
    cart = [];
    renderCart();
    checkoutSuccess.hidden = false;
    if (paymentStatus) {
      paymentStatus.hidden = true;
    }
  }, 1800);
});
if (assistantButton && assistantPanel && closeAssistantButton) {
  const openAssistant = () => {
    assistantPanel.hidden = false;
    assistantPanel.setAttribute("aria-hidden", "false");
    assistantButton.setAttribute("aria-expanded", "true");
  };
  const closeAssistant = () => {
    assistantPanel.hidden = true;
    assistantPanel.setAttribute("aria-hidden", "true");
    assistantButton.setAttribute("aria-expanded", "false");
  };

  assistantButton.addEventListener("click", () => {
    const isOpen = assistantButton.getAttribute("aria-expanded") === "true";
    if (isOpen) closeAssistant(); else openAssistant();
  });
  closeAssistantButton.addEventListener("click", closeAssistant);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeAssistant(); });
}
document.querySelector("#close-product-modal").addEventListener("click", closeProductModal);
productModalOverlay.addEventListener("click", closeProductModal);
document.querySelector("#decrease-quantity").addEventListener("click", () => { selectedQuantity = Math.max(1, selectedQuantity - 1); document.querySelector("#product-quantity").textContent = selectedQuantity; });
document.querySelector("#increase-quantity").addEventListener("click", () => { selectedQuantity += 1; document.querySelector("#product-quantity").textContent = selectedQuantity; });
document.querySelector("#modal-add-to-cart").addEventListener("click", () => { for (let index = 0; index < selectedQuantity; index += 1) addToCart(selectedProduct.id); closeProductModal(); openCart(); triggerAddFeedback(document.querySelector("#modal-add-to-cart")); });

const suggestionsForm = document.querySelector("#suggestions-form");
const suggestionsMessage = document.querySelector("#suggestions-message");
if (suggestionsForm && suggestionsMessage) {
  suggestionsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#suggestion-name")?.value.trim() || "cliente";
    suggestionsMessage.textContent = `Gracias, ${name}. Tu sugerencia nos ayuda a mejorar nuestras salsas.`;
    suggestionsMessage.hidden = false;
    suggestionsForm.reset();
  });
}

function resetAdminForm() {
  activeAdminProductId = null;
  adminProductName.value = "";
  adminProductCategory.value = "";
  adminProductPrice.value = "";
  adminProductImage.value = "";
  adminProductImages.value = "";
  adminProductTag.value = "";
  adminProductDescription.value = "";
  adminProductComplements.value = "";
  adminProductOptions.value = "";
  adminStatus.textContent = "";
}

function renderAdminPanel() {
  if (!adminProductSelect || !adminProductList) return;

  if (adminStatsProducts) {
    adminStatsProducts.textContent = String(products.length);
  }
  if (adminStatsCategories) {
    const uniqueCategories = [...new Set(products.map((product) => product.category).filter(Boolean))];
    adminStatsCategories.textContent = String(uniqueCategories.length);
  }
  if (adminStatsSalsas) {
    adminStatsSalsas.textContent = String(products.filter((product) => product.category === "Salsas").length);
  }

  adminProductSelect.innerHTML = products.map((product) => `
    <option value="${product.id}" ${product.id === activeAdminProductId ? "selected" : ""}>${product.name}</option>
  `).join("");

  adminProductList.innerHTML = products.map((product) => `
    <li>
      <span>${product.name}</span>
      <button type="button" data-edit-id="${product.id}">Editar</button>
    </li>
  `).join("");

  if (!products.length) {
    resetAdminForm();
    return;
  }

  if (!activeAdminProductId || !products.some((product) => product.id === activeAdminProductId)) {
    activeAdminProductId = products[0].id;
  }

  const currentProduct = products.find((product) => product.id === activeAdminProductId);
  if (currentProduct) {
    adminProductSelect.value = String(currentProduct.id);
    adminProductName.value = currentProduct.name || "";
    adminProductCategory.value = currentProduct.category || "";
    adminProductPrice.value = currentProduct.price || 0;
    adminProductImage.value = currentProduct.image || "";
    adminProductImages.value = (currentProduct.images || []).join("\n");
    adminProductTag.value = currentProduct.tag || "";
    adminProductDescription.value = currentProduct.description || "";
    adminProductComplements.value = (currentProduct.complements || []).join(", ");
    adminProductOptions.value = (currentProduct.options || []).join(", ");
  }
}

function saveAdminProduct() {
  if (!adminProductName || !adminProductCategory || !adminProductPrice || !adminProductImage) return;

  const product = {
    id: activeAdminProductId || Date.now(),
    name: adminProductName.value.trim(),
    category: adminProductCategory.value.trim() || "Sin categoría",
    price: Number(adminProductPrice.value) || 0,
    image: adminProductImage.value.trim(),
    tag: adminProductTag.value.trim(),
    description: adminProductDescription.value.trim(),
    complements: normalizeList(adminProductComplements.value),
    options: normalizeList(adminProductOptions.value),
    images: normalizeList(adminProductImages.value)
  };

  if (!product.name) {
    adminStatus.textContent = "Escribe un nombre para guardar el producto.";
    return;
  }

  const existingIndex = products.findIndex((item) => item.id === product.id);
  if (existingIndex >= 0) {
    products[existingIndex] = product;
  } else {
    products.unshift(product);
  }

  activeAdminProductId = product.id;
  persistProducts();
  renderProducts(activeCategory);
  renderAdminPanel();
  adminStatus.textContent = `Producto guardado: ${product.name}`;
}

function deleteAdminProduct() {
  if (!activeAdminProductId) return;
  const product = products.find((item) => item.id === activeAdminProductId);
  if (!product) return;
  const confirmed = window.confirm(`¿Eliminar ${product.name}?`);
  if (!confirmed) return;
  products = products.filter((item) => item.id !== activeAdminProductId);
  activeAdminProductId = products[0]?.id || null;
  persistProducts();
  renderProducts(activeCategory);
  renderAdminPanel();
  adminStatus.textContent = "Producto eliminado.";
}

function showAdminAccess() {
  if (adminAccessOverlay) {
    adminAccessOverlay.hidden = false;
    adminAccessOverlay.style.display = "flex";
    adminAccessOverlay.setAttribute("aria-hidden", "false");
  }
  if (adminPasswordInput) {
    adminPasswordInput.value = "";
    adminPasswordInput.type = "password";
    adminPasswordInput.focus();
  }
  if (adminAccessStatus) {
    adminAccessStatus.textContent = "";
  }
}

function hideAdminAccess() {
  if (adminAccessOverlay) {
    adminAccessOverlay.hidden = true;
    adminAccessOverlay.style.display = "none";
    adminAccessOverlay.setAttribute("aria-hidden", "true");
  }
}

function toggleAdminPasswordVisibility() {
  if (!adminPasswordInput) return;
  adminPasswordInput.type = adminPasswordInput.type === "password" ? "text" : "password";
}

function authenticateAdmin() {
  const password = adminPasswordInput?.value ?? "";
  if (password !== ADMIN_PASSWORD) {
    if (adminAccessStatus) {
      adminAccessStatus.textContent = "Contraseña incorrecta. Intenta de nuevo.";
    }
    return false;
  }

  isAdminAuthenticated = true;
  hideAdminAccess();
  if (adminPanel) {
    adminPanel.hidden = false;
    adminPanel.style.display = "block";
    adminPanel.setAttribute("aria-hidden", "false");
    renderAdminPanel();
  }
  return true;
}

function openAdminPanel() {
  if (isAdminAuthenticated) {
    if (adminPanel) {
      adminPanel.hidden = false;
      adminPanel.style.display = "block";
      adminPanel.setAttribute("aria-hidden", "false");
      renderAdminPanel();
    }
    return;
  }

  showAdminAccess();
}

function closeAdminPanel() {
  isAdminAuthenticated = false;
  if (adminPanel) {
    adminPanel.hidden = true;
    adminPanel.style.display = "none";
    adminPanel.setAttribute("aria-hidden", "true");
  }
  hideAdminAccess();
}

renderCart();
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCart(); closeProductModal(); closeAdminPanel(); } });

setupRevealAnimations();
renderProducts();
renderCart();
closeAdminPanel();

if (adminToggleButton) {
  adminToggleButton.addEventListener("click", openAdminPanel);
}

if (closeAdminPanelButton) {
  closeAdminPanelButton.addEventListener("click", closeAdminPanel);
}

if (adminAccessSubmitButton) {
  adminAccessSubmitButton.addEventListener("click", authenticateAdmin);
}

if (adminAccessCancelButton) {
  adminAccessCancelButton.addEventListener("click", hideAdminAccess);
}

if (adminTogglePasswordButton) {
  adminTogglePasswordButton.addEventListener("click", toggleAdminPasswordVisibility);
}

if (adminPasswordInput) {
  adminPasswordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      authenticateAdmin();
    }
  });
}

if (adminProductSelect) {
  adminProductSelect.addEventListener("change", (event) => {
    activeAdminProductId = Number(event.target.value);
    renderAdminPanel();
  });
}

if (adminSaveButton) {
  adminSaveButton.addEventListener("click", saveAdminProduct);
}

if (adminNewButton) {
  adminNewButton.addEventListener("click", () => {
    activeAdminProductId = null;
    resetAdminForm();
    renderAdminPanel();
  });
}

if (adminDeleteButton) {
  adminDeleteButton.addEventListener("click", deleteAdminProduct);
}

if (adminProductList) {
  adminProductList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-edit-id]");
    if (!button) return;
    activeAdminProductId = Number(button.dataset.editId);
    renderAdminPanel();
  });
}
