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
const cartTotalFinal = document.querySelector("#cart-total-final");
const paymentMethods = Array.from(document.querySelectorAll('input[name="payment-method"]'));
const whatsappInput = document.querySelector("#whatsapp-contact");
const whatsappPrefix = "+569";
const cardInputsSection = document.querySelector("#card-inputs");
const cardNameInput = document.querySelector("#card-name");
const securePayButton = document.querySelector("#secure-pay-button");
const cartStepReview = document.querySelector("#cart-step-review");
const cartStepPayment = document.querySelector("#cart-step-payment");
const cartStepBack = document.querySelector("#cart-step-back");
const cartStepNote = document.querySelector("#checkout-note");
const cardNumberInput = document.querySelector("#card-number");
const cardExpiryInput = document.querySelector("#card-expiry");
const cardCvvInput = document.querySelector("#card-cvv");
const whatsappNumber = "56935976321";
const header = document.querySelector(".site-header");
let cartStep = 1;
const darkSections = document.querySelectorAll("[data-dark-surface]");
let heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
let heroDots = document.querySelector("#hero-dots");
let heroIntervalId = null;
function initHeroSlideshow() {
  // rebuild slides and dots
  heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
  heroDots = document.querySelector("#hero-dots");
  if (!heroDots) return;
  heroDots.innerHTML = '';
  heroSlides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ver imagen ${index + 1}`);
    dot.addEventListener('click', () => showHeroSlide(index));
    heroDots.appendChild(dot);
  });

  if (heroIntervalId) {
    clearInterval(heroIntervalId);
    heroIntervalId = null;
  }
  if (heroSlides.length > 1) {
    heroIntervalId = setInterval(() => showHeroSlide(activeHeroSlide + 1), 5000);
  }
  showHeroSlide(0);
}
const assistantButton = document.querySelector("#assistant-float");
const assistantPanel = document.querySelector("#assistant-panel");
const closeAssistantButton = document.querySelector("#assistant-close");
const adminToggleButton = document.querySelector("#admin-toggle");
const adminPanel = document.querySelector("#admin-panel");
const closeAdminPanelButton = document.querySelector("#close-admin-panel");

// Force admin panel hidden before any scripted behavior begins
if (adminPanel) {
  adminPanel.hidden = true;
  adminPanel.style.display = "none";
  adminPanel.setAttribute("aria-hidden", "true");
}
const adminProductSelect = document.querySelector("#admin-product-select");
const adminProductName = document.querySelector("#admin-product-name");
const adminProductCategory = document.querySelector("#admin-product-category");
const adminProductPrice = document.querySelector("#admin-product-price");
const adminProductImage = document.querySelector("#admin-product-image");
const adminProductImageFile = document.querySelector("#admin-product-image-file");
const adminProductImages = document.querySelector("#admin-product-images");
const adminProductImagesFile = document.querySelector("#admin-product-images-file");
const adminProductImagesPreview = document.querySelector("#admin-product-images-preview");
const adminProductTag = document.querySelector("#admin-product-tag");
const adminProductDescription = document.querySelector("#admin-product-description");
const adminProductComplements = document.querySelector("#admin-product-complements");
const adminProductOptions = document.querySelector("#admin-product-options");
const adminSaveButton = document.querySelector("#admin-save-product");
const adminNewButton = document.querySelector("#admin-new-product");
const adminDeleteButton = document.querySelector("#admin-delete-product");
const adminStatus = document.querySelector("#admin-status");
const adminProductList = document.querySelector("#admin-product-list");
const adminOrdersList = document.querySelector("#admin-orders-list");
const adminRefreshOrders = document.querySelector("#admin-refresh-orders");
const adminWebhookBody = document.querySelector('#admin-webhook-body');
const adminSendWebhook = document.querySelector('#admin-send-webhook');
const adminFillSample = document.querySelector('#admin-fill-sample');
const adminFillApproved = document.querySelector('#admin-fill-approved');
const adminFillPending = document.querySelector('#admin-fill-pending');
const adminFillCancelled = document.querySelector('#admin-fill-cancelled');
const adminWebhookResult = document.querySelector('#admin-webhook-result');
const adminSiteSaveButton = document.querySelector("#admin-save-site");
const adminSiteResetButton = document.querySelector("#admin-reset-site");
const adminSiteStatus = document.querySelector("#admin-site-status");
const adminPromoText = document.querySelector("#admin-promo-text");
const adminPromoHighlight = document.querySelector("#admin-promo-highlight");
const adminNavMenuLabel = document.querySelector("#admin-nav-menu-label");
const adminNavStoryLabel = document.querySelector("#admin-nav-story-label");
const adminNavContactLabel = document.querySelector("#admin-nav-contact-label");
const adminNavExtraLabels = document.querySelector("#admin-nav-extra-labels");
const adminHeroTitleMain = document.querySelector("#admin-hero-title-main");
const adminHeroTitleAccent = document.querySelector("#admin-hero-title-accent");
const adminHeroEyebrow = document.querySelector("#admin-hero-eyebrow");
const adminHeroDescription = document.querySelector("#admin-hero-description");
const adminHeroCtaText = document.querySelector("#admin-hero-cta-text");
const adminHeroCtaUrl = document.querySelector("#admin-hero-cta-url");
const adminHeroImageFile = document.querySelector("#admin-hero-image-file");
const adminHeroImages = document.querySelector("#admin-hero-images");
const adminHeroImagesFile = document.querySelector("#admin-hero-images-file");
const adminHeroImagesPreview = document.querySelector("#admin-hero-images-preview");
const adminStoryTitle = document.querySelector("#admin-story-title");
const adminStoryAccent = document.querySelector("#admin-story-accent");
const adminStoryCopy = document.querySelector("#admin-story-copy");
const adminStoryLinkText = document.querySelector("#admin-story-link-text");
const adminStoryLinkUrl = document.querySelector("#admin-story-link-url");
const adminStoryImageUrl = document.querySelector("#admin-story-image-url");
const adminStoryImageFile = document.querySelector("#admin-story-image-file");
const adminMenuCategoryList = document.querySelector("#admin-menu-category-list");
const adminAddMenuCategory = document.querySelector("#admin-add-menu-category");
const adminOrderEyebrow = document.querySelector("#admin-order-eyebrow");
const adminOrderTitle = document.querySelector("#admin-order-title");
const adminOrderCopy = document.querySelector("#admin-order-copy");
const adminOrderCtaText = document.querySelector("#admin-order-cta-text");
const adminOrderCtaUrl = document.querySelector("#admin-order-cta-url");
const adminPremiumHighlightTitle = document.querySelector("#admin-premium-highlight-title");
const adminPremiumHighlightCopy = document.querySelector("#admin-premium-highlight-copy");
const adminSuggestionsTitle = document.querySelector("#admin-suggestions-title");
const adminSuggestionsCopy = document.querySelector("#admin-suggestions-copy");
const adminWhatsappText = document.querySelector("#admin-whatsapp-text");
const adminWhatsappUrl = document.querySelector("#admin-whatsapp-url");
const adminFacebookText = document.querySelector("#admin-facebook-text");
const adminFacebookUrl = document.querySelector("#admin-facebook-url");
const adminPaymentCardDetails = document.querySelector("#admin-payment-card-details");
const adminPaymentTransferDetails = document.querySelector("#admin-payment-transfer-details");
const adminLogoUrl = document.querySelector("#admin-logo-url");
const adminLogoFile = document.querySelector("#admin-logo-file");
const adminLogoPreview = document.querySelector("#admin-logo-preview");
const adminProductImagePreview = document.querySelector("#admin-product-image-preview");
const adminHeroImagePreview = document.querySelector("#admin-hero-image-preview");
const adminStoryImagePreview = document.querySelector("#admin-story-image-preview");
const adminSectionStoryImagePreview = document.querySelector("#admin-section-story-image-preview");
const adminStatsProducts = document.querySelector("#admin-stats-products");
const adminStatsCategories = document.querySelector("#admin-stats-categories");
const adminStatsSalsas = document.querySelector("#admin-stats-salsas");
const heroImageUrlMigrationMap = {
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1543353071-087092ec3936?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1516685018646-5494f46b63b8?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=85"
};

function migrateHeroImages(images) {
  if (!Array.isArray(images)) return Array.isArray(images) ? images : [];
  return images.map((url) => heroImageUrlMigrationMap[url] || url);
}

const defaultSiteSettings = {
  promoText: "Hecho con sabor mexicano",
  promoHighlight: "Envío gratis dentro de la comuna de Pucón",
  heroEyebrow: "Sabor mexicano en el corazón de Pucón",
  heroTitleMain: "México en cada",
  heroTitleAccent: "mordida.",
  heroDescription: "Tacos, salsas y antojos preparados con cariño para compartir en Pucón y todo el sur de Chile.",
  heroCtaText: "Ver el menú",
  heroCtaUrl: "#catalogo",
  heroImage: "",
  heroImages: [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=85"
  ],
  storyImage: "",
  storyTitle: "Recetas con alma.",
  storyAccent: "Sabor con carácter.",
  storyCopy: "Somos una cocina mexicana en Pucón: ponemos ingredientes frescos, recetas tradicionales y un toque del sur de Chile en cada pedido.",
  storyLinkText: "Conoce nuestra historia",
  storyLinkUrl: "#contacto",
  orderEyebrow: "¿Listo para el antojo?",
  orderTitle: "Tu mesa pide",
  orderCopy: "Revisa el menú, arma tu carrito, haz el pedido y escríbenos por alguna de nuestras redes sociales para coordinarlo.",
  orderCtaText: "Pedir por Instagram",
  orderCtaUrl: "https://www.instagram.com/lamexicanapucon/",
  premiumHighlightTitle: "Salsas de la casa",
  premiumHighlightCopy: "Promoción especial: 4 salsas por $12.000. Una forma sencilla de llevar a casa un poco de sabor y variedad para acompañar tus platos favoritos.",
  suggestionsTitle: "Tu opinión ayuda a mejorar",
  suggestionsCopy: "Cuéntanos qué te gustó, qué te gustaría probar o cómo podríamos mejorar nuestras salsas.",
  whatsappText: "Pedir por WhatsApp",
  whatsappUrl: "https://wa.me/56935976321",
  facebookText: "Pedir por Facebook",
  facebookUrl: "https://www.facebook.com/profile.php?id=61583403314437",
  paymentCardDetails: "Configura aquí los datos o instrucciones para recibir pagos con tarjeta.",
  paymentTransferDetails: "Para transferencia bancaria, usa Banco XYZ, Cuenta 12345678, RUT 12.345.678-9.",
  navMenuLabel: "Menú",
  navStoryLabel: "Nuestra cocina",
  navContactLabel: "Contacto",
  navExtraTitles: [],
  logoUrl: "",
  menuCategories: [
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
  ]
};

function loadSiteSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem("lamexicana-site-settings") || "null");
    if (stored && typeof stored === "object") {
      const merged = { ...defaultSiteSettings, ...stored };
      const rawHeroImages = Array.isArray(merged.heroImages)
        ? merged.heroImages
        : normalizeList(merged.heroImages || merged.heroImage || defaultSiteSettings.heroImage);
      merged.heroImages = migrateHeroImages(rawHeroImages.filter(Boolean));
      return merged;
    }
  } catch (error) {
    console.warn("No se pudieron cargar los ajustes de la página", error);
  }
  return { ...defaultSiteSettings };
}

function persistSiteSettings(settings) {
  localStorage.setItem("lamexicana-site-settings", JSON.stringify(settings));
}
let siteSettings = loadSiteSettings();
let selectedProduct = null;
let selectedQuantity = 1;
let activeHeroSlide = 0;
let activeAdminProductId = null;

function showHeroSlide(index) {
  if (!heroSlides.length) return;

  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeHeroSlide;
    slide.classList.toggle("active", isActive);
    slide.style.opacity = isActive ? "1" : "0";
    slide.style.visibility = isActive ? "visible" : "hidden";
    slide.style.pointerEvents = isActive ? "auto" : "none";
    slide.style.display = isActive ? "flex" : "none";
  });

  if (heroDots) {
    const dots = heroDots.querySelectorAll("button");
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeHeroSlide));
  }
}

initHeroSlideshow();

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
    let y = headerRect.bottom + 8;
    if (y > window.innerHeight - 1) y = Math.max(headerRect.top + 8, window.innerHeight - 1);

    const elements = document.elementsFromPoint(x, y);
    const target = elements.find((element) => element !== header && !header.contains(element)) || document.body;

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

  // On narrow screens, avoid relying on IntersectionObserver (mobile scrolling quirks)
  // and make reveal targets visible immediately so categories/products appear.
  const isNarrow = typeof window !== 'undefined' && (window.innerWidth || document.documentElement.clientWidth) <= 760;
  if (isNarrow) {
    revealTargets.forEach((t) => t.classList.add('is-visible'));
    return;
  }

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

  const categories = getEffectiveMenuCategories();
  categoryHero.innerHTML = `
    <div class="category-grid">
      ${categories.map((category) => `
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
  const cartItemCount = document.querySelector('#cart-item-count');
  if (cartItemCount) {
    cartItemCount.textContent = `${count} artículo${count === 1 ? '' : 's'}`;
  }
  if (cartTotalFinal) {
    cartTotalFinal.textContent = money(total);
  }
  const cartItemsContainer = document.querySelector("#cart-items");
  if (!cartItemsContainer) return;

  if (!cart.length) {
    cartItemsContainer.innerHTML = `<div class="empty-cart-graphic"><p class="empty-cart">Todavía no has elegido nada.<br>Tu próximo antojo puede estar aquí.</p></div>`;
  } else {
    cartItemsContainer.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <div class="cart-item-meta"><span class="cart-price">${money(item.price)}</span><span class="cart-line-total">${money(item.price * item.quantity)}</span></div>
        </div>
        <div class="cart-actions">
          <div class="cart-quantity-control" aria-label="Cambiar cantidad de ${item.name}">
            <button class="cart-qty-button" type="button" data-qty-action="decrease" data-qty-id="${item.id}" aria-label="Restar ${item.name}">−</button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button class="cart-qty-button" type="button" data-qty-action="increase" data-qty-id="${item.id}" aria-label="Agregar más ${item.name}">+</button>
          </div>
          <button class="remove-item" type="button" data-remove-id="${item.id}" aria-label="Quitar ${item.name}">Eliminar</button>
        </div>
      </div>
    `).join("");
  }

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

function buildOrder(paymentName) {
  return {
    id: `LM-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    items: cart.map((item) => ({ ...item })),
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    address: shippingAddressInput.value.trim(),
    paymentMethod: getSelectedPaymentMethod(),
    paymentName,
    whatsapp: whatsappInput.value.trim(),
    comments: orderCommentsInput?.value.trim() || ""
  };
}

function saveOrder(order) {
  // Keep local copy for offline, but also send to server
  try {
    const savedOrders = JSON.parse(localStorage.getItem("lamexicana-orders") || "[]") || [];
    savedOrders.unshift(order);
    localStorage.setItem("lamexicana-orders", JSON.stringify(savedOrders.slice(0, 8)));
  } catch (e) {
    console.warn("Could not persist order locally", e);
  }

  // Send to server for persistence (best-effort)
  return fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order) })
    .then((res) => res.json())
    .then((json) => {
      const successMeta = document.querySelector("#checkout-success-meta");
      if (successMeta) {
        successMeta.textContent = `Pedido ${order.id} · ${order.items.length} producto(s) · ${money(order.total)} · guardado en servidor`;
      }
      if (json.whatsapp && json.whatsapp.sent) {
        notify(`Pedido ${order.id} enviado automáticamente a WhatsApp`, 'success', 4000, { orderId: order.id });
      } else if (json.whatsapp && json.whatsapp.waLink) {
        notify(`Pedido ${order.id} preparado para WhatsApp (clic en admin)`, 'default', 4000, { orderId: order.id });
      }
      return json;
    })
    .catch((err) => {
      console.warn("Failed to persist order on server", err);
      const successMeta = document.querySelector("#checkout-success-meta");
      if (successMeta) {
        successMeta.textContent = `Pedido ${order.id} · ${order.items.length} producto(s) · ${money(order.total)} · guardado localmente`;
      }
      return { ok: false, error: err };
    });
}

function openProductModal(productId, sourceEl) {
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
    ${galleryImages.length ? `<div class="modal-gallery"><strong>Más fotos</strong>${galleryImages.map((image, index) => `<img src="${image}" alt="${selectedProduct.name} foto ${index + 1}">`).join("")}</div>` : ""}
  `;
  document.querySelector("#modal-product-price").textContent = money(selectedProduct.price);
  document.querySelector("#product-quantity").textContent = selectedQuantity;
  productModal.classList.toggle("sauce-detail", selectedProduct.category === "Salsas");
  // show overlay and modal with a smooth animation
  document.body.classList.add('product-open');
  productModalOverlay.hidden = false;
  // ensure overlay becomes visible (will transition via CSS)
  productModalOverlay.classList.add('visible');
  // ensure backdrop-filter is applied (some browsers drop it during transitions)
  try {
    productModalOverlay.style.backdropFilter = 'blur(8px)';
    productModalOverlay.style.webkitBackdropFilter = 'blur(8px)';
    productModalOverlay.style.opacity = '1';
  } catch (e) {
    /* ignore */
  }
  // prepare modal for animation
  productModal.classList.remove('closing');
  // If a source element was provided, animate from its bounds (drop/gota effect)
  if (sourceEl && sourceEl.getBoundingClientRect) {
    const rect = sourceEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    // estimate modal width as CSS allows (max 820 or vw - 40)
    const modalWidth = Math.min(820, Math.max(200, vw - 40));
    const tx = rect.left + rect.width / 2 - vw / 2;
    const ty = rect.top + rect.height / 2 - vh / 2;
    const s = Math.max(0.18, rect.width / modalWidth * 0.55);
    productModal.style.setProperty('--tx', tx + 'px');
    productModal.style.setProperty('--ty', ty + 'px');
    productModal.style.setProperty('--s', s);
    productModal.classList.add('from-thumb');
    // force reflow then add open to transition from-thumb -> open
    void productModal.offsetWidth;
    productModal.classList.add('open');
    // cleanup after transition
    const cleanup = (e) => {
      if (e.target !== productModal) return;
      productModal.removeEventListener('transitionend', cleanup);
      productModal.classList.remove('from-thumb');
      productModal.style.removeProperty('--tx');
      productModal.style.removeProperty('--ty');
      productModal.style.removeProperty('--s');
    };
    productModal.addEventListener('transitionend', cleanup);
  } else {
    // force reflow then add open to trigger transition
    void productModal.offsetWidth;
    productModal.classList.add('open');
  }
  productModal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  // animate closing: remove open, add closing, hide overlay after transition
  productModal.classList.remove('open');
  productModal.classList.add('closing');
  productModal.setAttribute('aria-hidden', 'true');
  // start overlay fade-out
  productModalOverlay.classList.remove('visible');
  document.body.classList.remove('product-open');

  const cleanup = () => {
    productModal.removeEventListener('transitionend', onTransitionEnd);
    productModal.classList.remove('closing');
    productModalOverlay.hidden = true;
    // clear inline backdrop styles
    try {
      productModalOverlay.style.backdropFilter = '';
      productModalOverlay.style.webkitBackdropFilter = '';
      productModalOverlay.style.opacity = '';
    } catch (err) {}
  };

  const onTransitionEnd = (e) => {
    if (e.target !== productModal) return;
    cleanup();
  };

  productModal.addEventListener('transitionend', onTransitionEnd);
  window.setTimeout(cleanup, 450);
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.classList.add("cart-is-open");
  clearCheckoutFeedback();
  setCartStep(1);
}
function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.classList.remove("cart-is-open");
}

function setCartStep(step) {
  cartStep = step;
  if (cartStepReview) cartStepReview.hidden = step !== 1;
  if (cartStepPayment) cartStepPayment.hidden = step !== 2;
  if (cartStepBack) cartStepBack.hidden = step === 1;
  if (securePayButton) {
    securePayButton.disabled = false;
    securePayButton.textContent = step === 1 ? "Continuar al pago" : "Confirmar pedido";
  }
  if (cartStepNote) {
    cartStepNote.textContent = step === 1
      ? "Completa tu dirección y WhatsApp para continuar con el pago dentro de la tienda."
      : "Elige un método de pago y confirma tu pedido.";
  }
  clearCheckoutFeedback();
}

let activeCategory = "Todos";
renderCategoryCards();
// render products initially so catalog is visible on first load
renderProducts(activeCategory);
if (menuSubmenu) {
  const categories = getEffectiveMenuCategories();
  menuSubmenu.innerHTML = categories.map((category) => `
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
productGrid.addEventListener("click", (event) => { const addButton = event.target.closest(".add-button"); if (addButton) { addToCart(Number(addButton.closest("[data-product-id]").dataset.productId), addButton); return; } const card = event.target.closest("[data-product-id]"); if (card) { const img = card.querySelector('img'); openProductModal(Number(card.dataset.productId), img || card); } });
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
if (cartStepBack) {
  cartStepBack.addEventListener("click", () => setCartStep(1));
}

function clearCheckoutFeedback() {
  checkoutError.hidden = true;
  checkoutError.textContent = "";
  checkoutSuccess.hidden = true;
  if (checkoutSuccess.querySelector(".checkout-success-message")) {
    checkoutSuccess.querySelector(".checkout-success-message").textContent = "";
  }
}

function getSelectedPaymentMethod() {
  const selected = paymentMethods.find((input) => input.checked);
  return selected ? selected.value : "mercadopago";
}

function updatePaymentSelectionUI() {
  const selectedMethod = getSelectedPaymentMethod();

  paymentMethods.forEach((input) => {
    const option = input.closest(".payment-option");
    if (option) {
      option.classList.toggle("active", input.checked);
    }
  });

  if (cardInputsSection) {
    cardInputsSection.hidden = true;
  }

  // renderPaymentInstructions handles missing element internally
  renderPaymentInstructions(selectedMethod);

  if (securePayButton) {
    if (cartStep === 1) {
      securePayButton.textContent = "Continuar al pago";
    } else {
      securePayButton.textContent = selectedMethod === "mercadopago"
        ? "Confirmar con Mercado Pago"
        : selectedMethod === "webpay"
        ? "Confirmar con Webpay"
        : "Confirmar transferencia";
    }
  }
}

function getPaymentMethodLabel(method) {
  const labels = {
    mercadopago: "Mercado Pago",
    webpay: "Webpay",
    transferencia: "Transferencia bancaria"
  };
  return labels[method] || "Método de pago";
}

function normalizeWhatsAppInput(value) {
  return value.trim().replace(/\s+/g, "");
}

function renderPaymentInstructions(selectedMethod) {
  const el = document.querySelector("#payment-instructions");
  if (!el) return;
  let message = "";
  if (selectedMethod === "transferencia") {
    message = siteSettings.paymentTransferDetails || defaultSiteSettings.paymentTransferDetails || "Usa transferencia bancaria para completar tu pago.";
  } else {
    message = siteSettings.paymentCardDetails || defaultSiteSettings.paymentCardDetails || "Sigue las instrucciones para pagar con tarjeta.";
  }

  if (message.trim()) {
    el.hidden = false;
    el.innerHTML = `<strong>Instrucciones de pago:</strong><p>${message.replace(/\n/g, "<br>")}</p>`;
  } else {
    el.hidden = true;
    el.innerHTML = "";
  }
}

function ensureWhatsAppPrefix() {
  if (!whatsappInput) return;
  const rawValue = normalizeWhatsAppInput(whatsappInput.value);
  if (!rawValue.startsWith(whatsappPrefix)) {
    const digits = rawValue.replace(/[^0-9]/g, "");
    whatsappInput.value = whatsappPrefix + digits;
  } else {
    const rest = rawValue.slice(whatsappPrefix.length).replace(/[^0-9]/g, "");
    whatsappInput.value = whatsappPrefix + rest;
  }
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

  if (!whatsappInput?.value.trim() || normalizeWhatsAppInput(whatsappInput.value) === whatsappPrefix) {
    checkoutError.textContent = "Agrega tu WhatsApp para recibir el detalle del pedido.";
    checkoutError.hidden = false;
    whatsappInput?.focus();
    return false;
  }

  const whatsappValue = normalizeWhatsAppInput(whatsappInput.value);
  if (!/^\+569\d{8}$/.test(whatsappValue)) {
    checkoutError.textContent = "Ingresa tu WhatsApp completo con +569 y 8 dígitos.";
    checkoutError.hidden = false;
    whatsappInput?.focus();
    return false;
  }

  const selectedMethod = getSelectedPaymentMethod();

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
  if (!whatsappInput.value.trim()) {
    whatsappInput.value = whatsappPrefix;
  }

  whatsappInput.addEventListener("focus", () => {
    if (!whatsappInput.value.trim()) {
      whatsappInput.value = whatsappPrefix;
    }
    window.setTimeout(() => {
      const pos = whatsappInput.value.length;
      whatsappInput.setSelectionRange(pos, pos);
    }, 0);
  });

  whatsappInput.addEventListener("input", () => {
    ensureWhatsAppPrefix();
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

document.querySelector("#secure-pay-button").addEventListener("click", async () => {
  if (cartStep === 1) {
    if (!validateCheckout()) return;
    setCartStep(2);
    return;
  }

  if (!validateCheckout()) return;

  const selectedMethod = getSelectedPaymentMethod();
  const paymentName = getPaymentMethodLabel(selectedMethod);
  const order = buildOrder(paymentName);

  checkoutSuccess.hidden = true;
  securePayButton.disabled = true;
  securePayButton.textContent = selectedMethod === "mercadopago" ? "Redirigiendo a Mercado Pago..." : selectedMethod === "webpay" ? "Redirigiendo a Webpay..." : "Confirmando...";

  if (selectedMethod === "transferencia") {
    saveOrder({ ...order, status: "confirmed" });
    const successMessage = document.querySelector("#checkout-success-message");
    if (successMessage) {
      successMessage.textContent = `Tu pedido fue confirmado con ${paymentName}.`;
    }
    cart = [];
    renderCart();
    checkoutSuccess.hidden = false;
    securePayButton.disabled = false;
    updatePaymentSelectionUI();
    return;
  }

  saveOrder({ ...order, status: "pending" });

  try {
    const response = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentMethod: selectedMethod, order })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "No se pudo iniciar el pago.");
    }

    const result = await response.json();
    if (result.redirectUrl) {
      // if server returned a paymentId, update local/order record for debugging
      if (result.paymentId) {
        try {
          await fetch(`/api/orders/${order.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId: result.paymentId })
          });
        } catch (err) {
          console.warn('Could not update order with paymentId', err);
        }
      }

      window.location.href = result.redirectUrl;
      return;
    }

    throw new Error("No se recibió URL de pago.");
  } catch (error) {
    checkoutError.textContent = `Error al iniciar el pago: ${error.message}`;
    checkoutError.hidden = false;
    securePayButton.disabled = false;
    updatePaymentSelectionUI();
  }
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
  if (adminProductImageFile) adminProductImageFile.value = "";
  if (adminProductImagePreview) updateImagePreviewFromUrl("", adminProductImagePreview);
  adminProductImages.value = "";
  if (adminProductImagesFile) adminProductImagesFile.value = "";
  if (adminProductImagesPreview) adminProductImagesPreview.innerHTML = "";
  adminProductTag.value = "";
  adminProductDescription.value = "";
  adminProductComplements.value = "";
  adminProductOptions.value = "";
  adminStatus.textContent = "";
}

function getAdminProductExtraImages() {
  return normalizeList(adminProductImages.value);
}

function updateAdminProductImagesPreview() {
  if (!adminProductImagesPreview) return;
  const urls = getAdminProductExtraImages();
  adminProductImagesPreview.innerHTML = urls.length
    ? urls.map((url, index) => `
        <div class="admin-multi-image-item">
          <img src="${url}" alt="Imagen adicional ${index + 1}">
          <button class="admin-multi-image-remove" type="button" data-image-index="${index}" aria-label="Eliminar imagen adicional ${index + 1}">Eliminar</button>
        </div>
      `).join("")
    : `<div class="admin-multi-image-empty">No hay fotos adicionales. Usa el campo de URLs o sube archivos para agregarlas.</div>`;
}

function removeAdminProductImageByIndex(index) {
  const images = getAdminProductExtraImages();
  if (index < 0 || index >= images.length) return;
  images.splice(index, 1);
  adminProductImages.value = images.join("\n");
  updateAdminProductImagesPreview();
}

function previewAdminProductImageFiles() {
  if (!adminProductImagesPreview || !adminProductImagesFile) return;
  const files = Array.from(adminProductImagesFile.files || []);
  if (!files.length) {
    updateAdminProductImagesPreview();
    return;
  }

  const existingUrls = getAdminProductExtraImages();
  const previewFragments = [...existingUrls.map((url, index) => `
      <div class="admin-multi-image-item">
        <img src="${url}" alt="Imagen adicional ${index + 1}">
      </div>
    `)];

  const readers = files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }));

  Promise.all(readers).then((results) => {
    results.forEach((result) => {
      if (result) {
        previewFragments.push(`
          <div class="admin-multi-image-item admin-multi-image-temp">
            <img src="${result}" alt="Imagen adicional subida">
          </div>
        `);
      }
    });
    adminProductImagesPreview.innerHTML = previewFragments.length
      ? previewFragments.join("")
      : `<div class="admin-multi-image-empty">No hay fotos adicionales. Usa el campo de URLs o sube archivos para agregarlas.</div>`;
  });
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
    updateImagePreviewFromUrl(currentProduct.image || "", adminProductImagePreview);
    adminProductImages.value = (currentProduct.images || []).join("\n");
    updateAdminProductImagesPreview();
    adminProductTag.value = currentProduct.tag || "";
    adminProductDescription.value = currentProduct.description || "";
    adminProductComplements.value = (currentProduct.complements || []).join(", ");
    adminProductOptions.value = (currentProduct.options || []).join(", ");
  }
}

function fetchAndRenderOrders() {
  if (!adminOrdersList) return;
  adminOrdersList.innerHTML = '<li>cargando...</li>';
  return fetch('/api/orders')
    .then((res) => res.json())
    .then((json) => {
      const orders = Array.isArray(json.orders) ? json.orders : (json.orders || []);
      if (!orders.length) {
        adminOrdersList.innerHTML = '<li>No hay pedidos</li>';
        return orders;
      }
      adminOrdersList.innerHTML = orders.slice(0, 30).map((order) => {
        const current = order.status || order.state || 'received';
        const opts = ['received','preparing','ready','delivered','cancelled'].map(s => `<option value="${s}" ${s===current? 'selected':''}>${s}</option>`).join('');
        return `
          <li class="admin-order" data-order-id="${order.id}" style="padding:8px 6px;border-bottom:1px solid #eee">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div><strong>${order.id}</strong> · ${new Date(order.createdAt || order.receivedAt || Date.now()).toLocaleString()}</div>
              <div class="order-badge" data-order-status="${current}">${current}</div>
            </div>
          <div style="margin-top:6px">${order.items.length} ítems · ${money(order.total)}</div>
          <div style="margin-top:6px;font-size:13px;color:#444">${order.address || ''} · ${order.whatsapp || ''}</div>
          ${order.paymentId ? `<div style="margin-top:6px;font-size:12px;color:#666">Pago: <strong style="font-weight:700">${order.paymentId}</strong> ${order.paymentInitPoint ? `<a href="${order.paymentInitPoint}" target="_blank" rel="noopener" style="margin-left:8px;font-size:12px">Abrir pago</a>` : ''} <button class="admin-copy-paymentid" type="button" data-payment-id="${order.paymentId}" style="margin-left:8px;font-size:12px;padding:4px 8px;border-radius:4px">Copiar</button></div>` : ''}
          <div style="margin-top:6px;font-size:12px;color:#666">WhatsApp: <strong>${order.whatsappSent ? 'Enviado' : 'Pendiente'}</strong> ${order.whatsappLink ? `<a href="${order.whatsappLink}" target="_blank" rel="noopener" style="margin-left:8px;font-size:12px">Abrir WA</a>` : ''}</div>
          <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
            <select data-order-select style="padding:6px">${opts}</select>
            <button class="admin-order-update" data-order-id="${order.id}" type="button">Actualizar estado</button>
          </div>
        </li>
      `;
      }).join('');
      return orders;
    })
    .catch((err) => {
      console.warn('Could not fetch orders', err);
      adminOrdersList.innerHTML = '<li>Error al cargar pedidos</li>';
      return [];
    });
}

// Toast utility
function ensureToastContainer() {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message, type = 'default', ms = 2000) {
  try {
    const container = ensureToastContainer();
    const t = document.createElement('div');
    t.className = `toast ${type === 'success' ? 'success' : type === 'error' ? 'error' : ''} short`;
    t.textContent = message;
    container.appendChild(t);
    // force repaint
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 250); }, ms);
  } catch (e) { /* ignore */ }
}

// Integrate toasts with persistent notifications
function notify(message, type = 'default', ms = 2000, opts = {}) {
  showToast(message, type, ms);
  pushNotify(message, opts || {});
}

// Try to focus/highlight an order in the admin list
function highlightAdminOrder(orderId) {
  try {
    const selector = `.admin-order[data-order-id="${orderId}"]`;
    let el = document.querySelector(selector);
    if (!el) el = document.querySelector(`li[data-order-id="${orderId}"]`);
    if (el) {
      // open admin panel if it's hidden
      const adminSection = document.querySelector('#admin-orders');
      if (adminSection && adminSection.style.display === 'none') adminSection.style.display = 'block';
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlighted-order');
      setTimeout(() => el.classList.remove('highlighted-order'), 4000);
    } else {
      // if not loaded, try fetching orders and then highlight
      if (typeof fetchAndRenderOrders === 'function') {
        fetchAndRenderOrders().then(() => {
          const el2 = document.querySelector(selector);
          if (el2) {
            el2.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el2.classList.add('highlighted-order');
            setTimeout(() => el2.classList.remove('highlighted-order'), 4000);
          }
        }).catch(() => {});
      }
    }
  } catch (e) {}
}

// Persistent notification panel
function ensureNotifyUI() {
  let bell = document.querySelector('.notify-bell');
  let panel = document.querySelector('.notify-panel');
  if (!bell) {
    bell = document.createElement('button');
    bell.className = 'notify-bell';
    bell.setAttribute('aria-label','Notificaciones');
    bell.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H9" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2z" stroke="#333" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8c0-3.3-2.7-6-6-6S6 4.7 6 8c0 5-3 6-3 6h18s-3-1-3-6" stroke="#333" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="dot" style="display:none"></span>';
    document.body.appendChild(bell);
  }
  if (!panel) {
    panel = document.createElement('div');
    panel.className = 'notify-panel';
    panel.innerHTML = '<h4>Notificaciones</h4><div class="notify-list"></div>';
    document.body.appendChild(panel);
  }

  bell.addEventListener('click', () => {
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
  });

  // delegate click for "Ver pedido" buttons
  panel.addEventListener('click', (ev) => {
    const btn = ev.target.closest && ev.target.closest('.notify-view-order');
    if (btn) {
      const id = btn.getAttribute('data-order-id');
      if (id) {
        // open a detail modal for the order and also try to highlight in admin
        showOrderModal(id);
        highlightAdminOrder(id);
        panel.style.display = 'none';
      }
    }
  });

  return { bell, panel };
}

// Show an order detail modal (fetches orders and displays fields)
function showOrderModal(orderId) {
  try {
    // try to find order in existing list first
    const tryFindInDom = () => {
      const li = document.querySelector(`.admin-order[data-order-id="${orderId}"]`);
      if (li) {
        // try to parse displayed content
        const html = li.innerHTML;
        return null;
      }
      return null;
    };

    const renderModal = (order) => {
      if (!order) return;
      let modal = document.querySelector('.order-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.className = 'order-modal';
        modal.innerHTML = `<div class="order-modal-inner"><button class="order-modal-close">×</button><div class="order-modal-body"></div></div>`;
        document.body.appendChild(modal);
        modal.querySelector('.order-modal-close').addEventListener('click', () => modal.remove());
      }
      const body = modal.querySelector('.order-modal-body');
      body.innerHTML = `
        <h3>Pedido ${order.id}</h3>
        <div><strong>Estado:</strong> ${order.status || order.state || 'n/a'}</div>
        <div><strong>Creado:</strong> ${new Date(order.createdAt || order.receivedAt || Date.now()).toLocaleString()}</div>
        <div style="margin-top:8px"><strong>Cliente:</strong> ${order.whatsapp || ''} · ${order.address || ''}</div>
        <div style="margin-top:8px"><strong>Items:</strong>
          <ul>${(order.items||[]).map(i => `<li>${i.name || i.title} x${i.quantity || i.qty || 1} ${i.price? ' - ' + money(i.price): ''}</li>`).join('')}</ul>
        </div>
        <div style="margin-top:8px"><strong>Total:</strong> ${money(order.total||order.amount||0)}</div>
        <div style="margin-top:8px">${order.paymentId ? `Pago: <strong>${order.paymentId}</strong> ${order.paymentInitPoint ? `<a href="${order.paymentInitPoint}" target="_blank" rel="noopener">Abrir pago</a>` : ''}` : ''}</div>
        <div style="margin-top:8px;font-size:13px;color:#444">WhatsApp: <strong>${order.whatsappSent ? 'Enviado' : 'Pendiente'}</strong> ${order.whatsappLink ? `<a href="${order.whatsappLink}" target="_blank" rel="noopener">Abrir WhatsApp</a>` : ''}</div>
      `;
      modal.style.display = 'block';
    };

    // fetch list and find order
    fetch('/api/orders').then(r => r.json()).then(json => {
      const orders = Array.isArray(json.orders) ? json.orders : (json.orders || []);
      const order = orders.find(o => String(o.id) === String(orderId) || String(o.reference) === String(orderId));
      if (order) return renderModal(order);
      // if not found, try to fetch by id via put-like route? fallback to notify
      renderModal(null);
    }).catch(() => renderModal(null));
  } catch (e) {}
}

const NOTIFY_HISTORY_LIMIT = 50;

function pushNotify(message, opts = {}) {
  try {
    const { bell, panel } = ensureNotifyUI();
    const list = panel.querySelector('.notify-list');
    const item = document.createElement('div');
    item.className = 'notify-item';
    const now = new Date();
    const timeHtml = `<time>${now.toLocaleTimeString()}</time>`;
    if (opts.orderId) {
      item.innerHTML = `${message} <div style="margin-top:6px"><button class="notify-view-order" data-order-id="${opts.orderId}" style="padding:6px 8px;border-radius:6px;border:0;background:#0b74de;color:#fff;cursor:pointer">Ver pedido</button></div>${timeHtml}`;
    } else {
      item.innerHTML = `${message}${timeHtml}`;
    }
    list.insertBefore(item, list.firstChild);

    // trim history
    while (list.children.length > NOTIFY_HISTORY_LIMIT) {
      list.removeChild(list.lastChild);
    }

    bell.querySelector('.dot').style.display = 'block';
    // auto-hide dot after short time
    setTimeout(() => { try { bell.querySelector('.dot').style.display = 'none'; } catch (e) {} }, 3500);
  } catch (e) {}
}

function saveAdminProduct() {
  if (!adminProductName || !adminProductCategory || !adminProductPrice || !adminProductImage) return;

  const uploadedImage = adminProductImageFile?.files?.[0];
  const uploadedImages = adminProductImagesFile?.files;

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

  if (uploadedImage) {
    const reader = new FileReader();
    reader.onload = () => {
      product.image = reader.result;
      saveProductData(product, uploadedImages);
    };
    reader.readAsDataURL(uploadedImage);
    return;
  }

  saveProductData(product, uploadedImages);
}

function saveProductData(product, uploadedImages) {
  if (uploadedImages && uploadedImages.length) {
    const existingImages = normalizeList(adminProductImages.value);
    const filesToRead = Array.from(uploadedImages);
    const loaded = [];

    filesToRead.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        loaded.push(reader.result);
        if (loaded.length === filesToRead.length) {
          product.images = [...existingImages, ...loaded].filter(Boolean);
          finalizeProductSave(product);
        }
      };
      reader.readAsDataURL(file);
    });
    return;
  }

  finalizeProductSave(product);
}

function finalizeProductSave(product) {
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

function readImageFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function uploadImageToServer(file) {
  if (!file) return Promise.resolve(null);
  const fd = new FormData();
  fd.append("image", file);
  return fetch("/api/upload-image", { method: "POST", body: fd }).then((res) => {
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  }).then((json) => json.url || null);
}

function attemptUploadThenFallback(file) {
  if (!file) return Promise.resolve(null);
  return uploadImageToServer(file).catch(() => readImageFileAsDataUrl(file));
}

function getSiteFormValues() {
  return {
    promoText: adminPromoText?.value.trim() || defaultSiteSettings.promoText,
    promoHighlight: adminPromoHighlight?.value.trim() || defaultSiteSettings.promoHighlight,
    heroEyebrow: adminHeroEyebrow?.value.trim() || defaultSiteSettings.heroEyebrow,
    heroTitleMain: adminHeroTitleMain?.value.trim() || defaultSiteSettings.heroTitleMain,
    heroTitleAccent: adminHeroTitleAccent?.value.trim() || defaultSiteSettings.heroTitleAccent,
    heroDescription: adminHeroDescription?.value.trim() || defaultSiteSettings.heroDescription,
    heroCtaText: adminHeroCtaText?.value.trim() || defaultSiteSettings.heroCtaText,
    heroCtaUrl: adminHeroCtaUrl?.value.trim() || defaultSiteSettings.heroCtaUrl,
    heroImages: normalizeList(adminHeroImages?.value).length ? normalizeList(adminHeroImages?.value) : siteSettings.heroImages || defaultSiteSettings.heroImages,
    storyImage: adminStoryImageUrl?.value.trim() || siteSettings.storyImage || defaultSiteSettings.storyImage,
    storyTitle: adminStoryTitle?.value.trim() || defaultSiteSettings.storyTitle,
    storyAccent: adminStoryAccent?.value.trim() || defaultSiteSettings.storyAccent,
    storyCopy: adminStoryCopy?.value.trim() || defaultSiteSettings.storyCopy,
    storyLinkText: adminStoryLinkText?.value.trim() || defaultSiteSettings.storyLinkText,
    storyLinkUrl: adminStoryLinkUrl?.value.trim() || defaultSiteSettings.storyLinkUrl,
    orderEyebrow: adminOrderEyebrow?.value.trim() || defaultSiteSettings.orderEyebrow,
    orderTitle: adminOrderTitle?.value.trim() || defaultSiteSettings.orderTitle,
    orderCopy: adminOrderCopy?.value.trim() || defaultSiteSettings.orderCopy,
    orderCtaText: adminOrderCtaText?.value.trim() || defaultSiteSettings.orderCtaText,
    orderCtaUrl: adminOrderCtaUrl?.value.trim() || defaultSiteSettings.orderCtaUrl,
    premiumHighlightTitle: adminPremiumHighlightTitle?.value.trim() || defaultSiteSettings.premiumHighlightTitle,
    premiumHighlightCopy: adminPremiumHighlightCopy?.value.trim() || defaultSiteSettings.premiumHighlightCopy,
    suggestionsTitle: adminSuggestionsTitle?.value.trim() || defaultSiteSettings.suggestionsTitle,
    suggestionsCopy: adminSuggestionsCopy?.value.trim() || defaultSiteSettings.suggestionsCopy,
    whatsappText: adminWhatsappText?.value.trim() || defaultSiteSettings.whatsappText,
    whatsappUrl: adminWhatsappUrl?.value.trim() || defaultSiteSettings.whatsappUrl,
    facebookText: adminFacebookText?.value.trim() || defaultSiteSettings.facebookText,
    facebookUrl: adminFacebookUrl?.value.trim() || defaultSiteSettings.facebookUrl,
    paymentCardDetails: adminPaymentCardDetails?.value.trim() || defaultSiteSettings.paymentCardDetails,
    paymentTransferDetails: adminPaymentTransferDetails?.value.trim() || defaultSiteSettings.paymentTransferDetails,
    navMenuLabel: adminNavMenuLabel?.value.trim() || defaultSiteSettings.navMenuLabel,
    navStoryLabel: adminNavStoryLabel?.value.trim() || defaultSiteSettings.navStoryLabel,
    navContactLabel: adminNavContactLabel?.value.trim() || defaultSiteSettings.navContactLabel,
    navExtraTitles: normalizeList(adminNavExtraLabels?.value),
    menuCategories: readAdminMenuCategories(),
    logoUrl: adminLogoUrl?.value.trim() || defaultSiteSettings.logoUrl
  };
}

function readAdminMenuCategories() {
  if (!adminMenuCategoryList) return defaultSiteSettings.menuCategories;
  return Array.from(adminMenuCategoryList.querySelectorAll('.admin-category-row')).map((row) => {
    const nameInput = row.querySelector('.admin-category-name');
    const imageInput = row.querySelector('.admin-category-image');
    return {
      name: nameInput?.value.trim() || "",
      image: imageInput?.value.trim() || ""
    };
  }).filter((category) => category.name);
}

function readAdminCategoryImageFiles() {
  if (!adminMenuCategoryList) return [];
  return Array.from(adminMenuCategoryList.querySelectorAll('.admin-category-row')).map((row) => {
    const imageFileInput = row.querySelector('.admin-category-image-file');
    return imageFileInput?.files?.[0] || null;
  });
}

function createAdminCategoryRow(category = { name: '', image: '' }) {
  const row = document.createElement('div');
  row.className = 'admin-category-row';
  row.innerHTML = `
    <div class="admin-category-row-field">
      <label>
        <span>Nombre</span>
        <input type="text" class="admin-category-name" placeholder="Nombre de la categoría" value="${category.name}">
      </label>
      <label>
        <span>URL de imagen</span>
        <input type="text" class="admin-category-image" placeholder="Imagen de categoría" value="${category.image}">
      </label>
      <label>
        <span>Subir imagen</span>
        <input type="file" accept="image/*" class="admin-category-image-file">
      </label>
    </div>
    <div class="admin-category-preview">
      <img class="admin-category-preview-img" src="${category.image || ''}" alt="Vista previa de categoría">
      <span class="admin-category-preview-label">${category.image ? '' : 'Agrega una URL o sube una imagen para ver la vista previa'}</span>
    </div>
    <button type="button" class="admin-danger-button admin-category-remove">Eliminar categoría</button>
  `;

  const categoryImageInput = row.querySelector('.admin-category-image');
  const previewImg = row.querySelector('.admin-category-preview-img');
  const previewLabel = row.querySelector('.admin-category-preview-label');
  const imageFileInput = row.querySelector('.admin-category-image-file');
  const updatePreview = (url) => {
    updateImagePreviewFromUrl(url, previewImg);
    if (previewLabel) previewLabel.hidden = !!url;
  };

  if (categoryImageInput) {
    categoryImageInput.addEventListener('input', () => updatePreview(categoryImageInput.value.trim()));
  }

  if (imageFileInput) {
    imageFileInput.addEventListener('change', () => {
      previewFileInput(imageFileInput, previewImg);
      if (previewLabel) previewLabel.hidden = true;
    });
  }

  updatePreview(category.image || '');

  const removeButton = row.querySelector('.admin-category-remove');
  if (removeButton) {
    removeButton.addEventListener('click', () => row.remove());
  }

  return row;
}

function renderAdminMenuCategories(settings) {
  if (!adminMenuCategoryList) return;
  adminMenuCategoryList.innerHTML = '';
  const categories = Array.isArray(settings?.menuCategories) && settings.menuCategories.length
    ? settings.menuCategories
    : defaultSiteSettings.menuCategories;

  categories.forEach((category) => {
    adminMenuCategoryList.appendChild(createAdminCategoryRow({
      name: category.name || '',
      image: category.image || ''
    }));
  });
}

function getEffectiveMenuCategories() {
  return Array.isArray(siteSettings.menuCategories) && siteSettings.menuCategories.length
    ? siteSettings.menuCategories
    : defaultSiteSettings.menuCategories;
}

function applySiteSettings(settings) {
  const heroImage = document.querySelector("#hero-gallery .hero-slide img");
  const storyImageEl = document.querySelector("#story-image");
  const heroCta = document.querySelector("#hero-cta");
  const storyTitleEl = document.querySelector("#story-title");
  const storyAccentText = document.querySelector("#story-accent")?.textContent || "";

  const promoTextEl = document.querySelector("#promo-text");
  const promoHighlightEl = document.querySelector("#promo-highlight");
  const heroEyebrowEl = document.querySelector("#hero-eyebrow");
  const heroTitleMainEl = document.querySelector("#hero-title-main");
  const heroTitleAccentEl = document.querySelector("#hero-title-accent");
  const heroDescriptionEl = document.querySelector("#hero-description");
  const storyCopyEl = document.querySelector("#story-copy");
  const storyAccentEl = document.querySelector("#story-accent");
  const storyLinkEl = document.querySelector("#story-link");
  const orderEyebrowEl = document.querySelector("#order-section-eyebrow");
  const orderSectionTitleEl = document.querySelector("#order-section-title");
  const orderSectionCopyEl = document.querySelector("#order-section-copy");
  const orderSectionCtaEl = document.querySelector("#order-section-cta");
  const whatsappOrderTextEl = document.querySelector("#whatsapp-order-text");
  const whatsappOrderLinkEl = document.querySelector("#whatsapp-order-link");
  const facebookOrderTextEl = document.querySelector("#facebook-order-text");
  const facebookOrderLinkEl = document.querySelector("#facebook-order-link");
const paymentInstructionsEl = document.querySelector("#payment-instructions");
  const premiumHighlightTitleEl = document.querySelector("#premium-highlight-title");
  const premiumHighlightCopyEl = document.querySelector("#premium-highlight-copy");
  const suggestionsTitleEl = document.querySelector("#suggestions-title");
  const suggestionsCopyEl = document.querySelector("#suggestions-copy");

  if (promoTextEl) promoTextEl.textContent = settings.promoText || defaultSiteSettings.promoText;
  if (promoHighlightEl) promoHighlightEl.textContent = settings.promoHighlight || defaultSiteSettings.promoHighlight;
  if (heroEyebrowEl) heroEyebrowEl.textContent = settings.heroEyebrow || defaultSiteSettings.heroEyebrow;
  if (heroTitleMainEl) heroTitleMainEl.textContent = settings.heroTitleMain || defaultSiteSettings.heroTitleMain;
  if (heroTitleAccentEl) heroTitleAccentEl.textContent = settings.heroTitleAccent || defaultSiteSettings.heroTitleAccent;
  if (heroDescriptionEl) heroDescriptionEl.textContent = settings.heroDescription || defaultSiteSettings.heroDescription;
  if (storyAccentEl) storyAccentEl.textContent = settings.storyAccent || defaultSiteSettings.storyAccent;
  if (storyLinkEl) {
    storyLinkEl.href = settings.storyLinkUrl || defaultSiteSettings.storyLinkUrl;
    storyLinkEl.innerHTML = `${settings.storyLinkText || defaultSiteSettings.storyLinkText} <span>→</span>`;
  }
  if (orderEyebrowEl) orderEyebrowEl.textContent = settings.orderEyebrow || defaultSiteSettings.orderEyebrow;
  if (premiumHighlightTitleEl) premiumHighlightTitleEl.textContent = settings.premiumHighlightTitle || defaultSiteSettings.premiumHighlightTitle;
  if (premiumHighlightCopyEl) premiumHighlightCopyEl.textContent = settings.premiumHighlightCopy || defaultSiteSettings.premiumHighlightCopy;
  if (suggestionsTitleEl) suggestionsTitleEl.textContent = settings.suggestionsTitle || defaultSiteSettings.suggestionsTitle;
  if (suggestionsCopyEl) suggestionsCopyEl.textContent = settings.suggestionsCopy || defaultSiteSettings.suggestionsCopy;
  const brandLogoEl = document.querySelector('.brand-logo');
  if (brandLogoEl) brandLogoEl.src = settings.logoUrl || defaultSiteSettings.logoUrl || brandLogoEl.src;
  if (adminLogoPreview) updateImagePreviewFromUrl(settings.logoUrl || defaultSiteSettings.logoUrl || "", adminLogoPreview);

  if (heroCta) {
    heroCta.href = settings.heroCtaUrl || defaultSiteSettings.heroCtaUrl;
    heroCta.innerHTML = `${settings.heroCtaText || defaultSiteSettings.heroCtaText} <span>↓</span>`;
  }

  const categoryHero = document.querySelector("#category-hero");
  const heroGallery = document.querySelector("#hero-gallery");
  const heroImages = Array.isArray(settings.heroImages)
    ? migrateHeroImages(settings.heroImages.filter(Boolean))
    : normalizeList(settings.heroImages || settings.heroImage || defaultSiteSettings.heroImage);

  if (heroGallery && heroImages.length) {
    heroGallery.innerHTML = heroImages
      .map((src, index) => `
        <div class="hero-slide${index === 0 ? " active" : ""}">
          <img src="${src}" alt="Imagen destacada ${index + 1}">
        </div>
      `)
      .join("") + '<div class="hero-dots" id="hero-dots"></div>';
    initHeroSlideshow();
  } else if (heroGallery && settings.heroImage) {
    heroGallery.innerHTML = `
      <div class="hero-slide active">
        <img src="${settings.heroImage}" alt="Imagen destacada">
      </div>
      <div class="hero-dots" id="hero-dots"></div>
    `;
    initHeroSlideshow();
  }

  const navMenuLabelEl = document.querySelector("#nav-menu-label");
  const navStoryLabelEl = document.querySelector("#nav-story-label");
  const navContactLabelEl = document.querySelector("#nav-contact-label");
  const navExtraLinks = document.querySelector("#nav-extra-links");
  if (navMenuLabelEl) navMenuLabelEl.textContent = settings.navMenuLabel || defaultSiteSettings.navMenuLabel;
  if (navStoryLabelEl) navStoryLabelEl.textContent = settings.navStoryLabel || defaultSiteSettings.navStoryLabel;
  if (navContactLabelEl) navContactLabelEl.textContent = settings.navContactLabel || defaultSiteSettings.navContactLabel;
  if (navExtraLinks) {
    const extraTitles = Array.isArray(settings.navExtraTitles)
      ? settings.navExtraTitles
      : normalizeList(settings.navExtraTitles);
    navExtraLinks.innerHTML = extraTitles
      .filter(Boolean)
      .map((title) => `<a href="#" class="nav-extra-item">${title}</a>`)
      .join("");
  }

  const categories = Array.isArray(settings.menuCategories) && settings.menuCategories.length
    ? settings.menuCategories
    : defaultSiteSettings.menuCategories;

  if (categoryHero) {
    categoryHero.innerHTML = `
      <div class="category-grid">
        ${categories.map((category) => `
          <button class="category-card ${activeCategory === category.name ? "active" : ""}" type="button" data-category="${category.name}" style="background-image: url('${category.image}');">
            <span class="category-card-content">
              <strong>${category.name === "Todos" ? "Todo el menú" : category.name}</strong>
            </span>
          </button>
        `).join("")}
      </div>
    `;
  }

  if (menuSubmenu) {
    menuSubmenu.innerHTML = categories.map((category) => `
      <button class="submenu-link ${activeCategory === category.name ? "active" : ""}" type="button" data-category="${category.name}">
        ${category.name === "Todos" ? "Todo el menú" : category.name}
      </button>
    `).join("");
    updateMenuCategoryState();
  }

  if (heroImage && settings.heroImage) {
    heroImage.src = settings.heroImage;
  }

  if (storyImageEl && settings.storyImage) {
    storyImageEl.src = settings.storyImage;
  }

  if (storyTitleEl) {
    storyTitleEl.innerHTML = `${settings.storyTitle || defaultSiteSettings.storyTitle}<br><i id="story-accent">${storyAccentText}</i>`;
  }

  if (storyCopyEl) storyCopyEl.textContent = settings.storyCopy || defaultSiteSettings.storyCopy;
  if (orderSectionTitleEl) orderSectionTitleEl.textContent = settings.orderTitle || defaultSiteSettings.orderTitle;
  if (orderSectionCopyEl) orderSectionCopyEl.textContent = settings.orderCopy || defaultSiteSettings.orderCopy;
  if (orderSectionCtaEl) {
    orderSectionCtaEl.textContent = settings.orderCtaText || defaultSiteSettings.orderCtaText;
    orderSectionCtaEl.setAttribute("href", settings.orderCtaUrl || defaultSiteSettings.orderCtaUrl);
  }
  if (whatsappOrderTextEl) whatsappOrderTextEl.textContent = settings.whatsappText || defaultSiteSettings.whatsappText;
  if (whatsappOrderLinkEl) whatsappOrderLinkEl.setAttribute("href", settings.whatsappUrl || defaultSiteSettings.whatsappUrl);
  if (facebookOrderTextEl) facebookOrderTextEl.textContent = settings.facebookText || defaultSiteSettings.facebookText;
  if (facebookOrderLinkEl) facebookOrderLinkEl.setAttribute("href", settings.facebookUrl || defaultSiteSettings.facebookUrl);
}

function hydrateSiteFormFields(settings) {
  if (!settings) return;
  adminPromoText.value = settings.promoText || "";
  adminPromoHighlight.value = settings.promoHighlight || "";
  adminHeroEyebrow.value = settings.heroEyebrow || "";
  adminHeroTitleMain.value = settings.heroTitleMain || "";
  adminHeroTitleAccent.value = settings.heroTitleAccent || "";
  adminHeroDescription.value = settings.heroDescription || "";
  adminHeroCtaText.value = settings.heroCtaText || "";
  adminHeroCtaUrl.value = settings.heroCtaUrl || "";
  adminStoryTitle.value = settings.storyTitle || "";
  adminStoryAccent.value = settings.storyAccent || "";
  adminStoryCopy.value = settings.storyCopy || "";
  adminStoryLinkText.value = settings.storyLinkText || "";
  adminStoryLinkUrl.value = settings.storyLinkUrl || "";
  if (adminHeroImages) adminHeroImages.value = Array.isArray(settings.heroImages) ? settings.heroImages.join("\n") : normalizeList(settings.heroImages).join("\n");
  updateAdminHeroImagesPreview();
  renderAdminMenuCategories(settings);
  if (adminHeroImagePreview) {
    const heroPreviewSrc = Array.isArray(settings.heroImages)
      ? settings.heroImages[0] || settings.heroImage || ""
      : normalizeList(settings.heroImages)[0] || settings.heroImage || "";
    updateImagePreviewFromUrl(heroPreviewSrc, adminHeroImagePreview);
  }
  if (adminStoryImageUrl) adminStoryImageUrl.value = settings.storyImage || "";
  if (adminStoryImagePreview) updateImagePreviewFromUrl(settings.storyImage || "", adminStoryImagePreview);
  adminOrderEyebrow.value = settings.orderEyebrow || "";
  adminOrderTitle.value = settings.orderTitle || "";
  adminOrderCopy.value = settings.orderCopy || "";
  adminOrderCtaText.value = settings.orderCtaText || "";
  adminOrderCtaUrl.value = settings.orderCtaUrl || "";
  adminPremiumHighlightTitle.value = settings.premiumHighlightTitle || "";
  adminPremiumHighlightCopy.value = settings.premiumHighlightCopy || "";
  adminSuggestionsTitle.value = settings.suggestionsTitle || "";
  adminSuggestionsCopy.value = settings.suggestionsCopy || "";
  adminWhatsappText.value = settings.whatsappText || "";
  adminWhatsappUrl.value = settings.whatsappUrl || "";
  adminFacebookText.value = settings.facebookText || "";
  adminFacebookUrl.value = settings.facebookUrl || "";
  adminPaymentCardDetails.value = settings.paymentCardDetails || "";
  adminPaymentTransferDetails.value = settings.paymentTransferDetails || "";
  if (adminMenuCategoryList) renderAdminMenuCategories(settings);
  if (adminNavMenuLabel) adminNavMenuLabel.value = settings.navMenuLabel || "";
  if (adminNavStoryLabel) adminNavStoryLabel.value = settings.navStoryLabel || "";
  if (adminNavContactLabel) adminNavContactLabel.value = settings.navContactLabel || "";
  if (adminNavExtraLabels) adminNavExtraLabels.value = Array.isArray(settings.navExtraTitles) ? settings.navExtraTitles.join("\n") : String(settings.navExtraTitles || "");
  if (adminLogoUrl) adminLogoUrl.value = settings.logoUrl || "";
  if (adminLogoPreview) updateImagePreviewFromUrl(settings.logoUrl || "", adminLogoPreview);
  if (adminProductImagePreview) updateImagePreviewFromUrl(adminProductImage?.value.trim() || "", adminProductImagePreview);
  const heroSrc = document.querySelector("#hero-gallery .hero-slide img")?.src || "";
  const storySrc = document.querySelector("#story-image")?.src || "";
  if (adminHeroImagePreview) updateImagePreviewFromUrl(heroSrc, adminHeroImagePreview);
  if (adminStoryImagePreview) updateImagePreviewFromUrl(storySrc, adminStoryImagePreview);
  if (adminSectionStoryImagePreview) updateImagePreviewFromUrl(storySrc, adminSectionStoryImagePreview);
}

function updateImagePreviewFromUrl(url, previewImg) {
  if (!previewImg) return;
  previewImg.src = url || "";
  previewImg.hidden = !url;
}

function previewFileInput(fileInput, previewImg) {
  if (!previewImg || !fileInput) return;
  const file = fileInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    previewImg.src = reader.result || "";
    previewImg.hidden = false;
  };
  reader.readAsDataURL(file);
}

function getAdminHeroImages() {
  return normalizeList(adminHeroImages?.value);
}

function updateAdminHeroImagesPreview() {
  if (!adminHeroImagesPreview) return;
  const urls = getAdminHeroImages();
  adminHeroImagesPreview.innerHTML = urls.length
    ? urls.map((url, index) => `
        <div class="admin-multi-image-item">
          <img src="${url}" alt="Imagen hero ${index + 1}">
        </div>
      `).join("")
    : `<div class="admin-multi-image-empty">No hay imágenes en el hero. Agrega URLs o sube archivos.</div>`;
}

function previewAdminHeroImagesFiles() {
  if (!adminHeroImagesPreview || !adminHeroImagesFile) return;
  const files = Array.from(adminHeroImagesFile.files || []);
  const urls = getAdminHeroImages();
  const fragments = urls.map((url, index) => `
      <div class="admin-multi-image-item">
        <img src="${url}" alt="Imagen hero ${index + 1}">
      </div>
    `);

  if (!files.length) {
    adminHeroImagesPreview.innerHTML = fragments.length ? fragments.join("") : `<div class="admin-multi-image-empty">No hay imágenes en el hero. Agrega URLs o sube archivos.</div>`;
    return;
  }

  const readers = files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }));

  Promise.all(readers).then((results) => {
    results.forEach((result) => {
      if (result) {
        fragments.push(`
          <div class="admin-multi-image-item admin-multi-image-temp">
            <img src="${result}" alt="Imagen hero subida">
          </div>
        `);
      }
    });
    adminHeroImagesPreview.innerHTML = fragments.length ? fragments.join("") : `<div class="admin-multi-image-empty">No hay imágenes en el hero. Agrega URLs o sube archivos.</div>`;
  });
}

function setupAdminImagePreviewHandlers() {
  if (adminProductImage) {
    adminProductImage.addEventListener("input", () => updateImagePreviewFromUrl(adminProductImage.value.trim(), adminProductImagePreview));
  }
  if (adminProductImageFile) {
    adminProductImageFile.addEventListener("change", () => previewFileInput(adminProductImageFile, adminProductImagePreview));
  }
  if (adminProductImages) {
    adminProductImages.addEventListener("input", updateAdminProductImagesPreview);
  }
  if (adminProductImagesFile) {
    adminProductImagesFile.addEventListener("change", previewAdminProductImageFiles);
  }
  if (adminProductImagesPreview) {
    adminProductImagesPreview.addEventListener("click", (event) => {
      const button = event.target.closest('.admin-multi-image-remove');
      if (!button) return;
      const index = Number(button.dataset.imageIndex);
      removeAdminProductImageByIndex(index);
    });
  }
  if (adminHeroImageFile) {
    adminHeroImageFile.addEventListener("change", () => previewFileInput(adminHeroImageFile, adminHeroImagePreview));
  }
  if (adminHeroImages) {
    adminHeroImages.addEventListener("input", updateAdminHeroImagesPreview);
  }
  if (adminHeroImagesFile) {
    adminHeroImagesFile.addEventListener("change", previewAdminHeroImagesFiles);
  }
  if (adminStoryImageFile) {
    adminStoryImageFile.addEventListener("change", () => {
      previewFileInput(adminStoryImageFile, adminStoryImagePreview);
      if (adminSectionStoryImagePreview) previewFileInput(adminStoryImageFile, adminSectionStoryImagePreview);
    });
  }
  if (adminLogoFile) {
    adminLogoFile.addEventListener("change", () => previewFileInput(adminLogoFile, adminLogoPreview));
  }
  if (adminLogoUrl) {
    adminLogoUrl.addEventListener("input", () => updateImagePreviewFromUrl(adminLogoUrl.value.trim(), adminLogoPreview));
  }
  if (adminAddMenuCategory) {
    adminAddMenuCategory.addEventListener('click', () => {
      if (!adminMenuCategoryList) return;
      adminMenuCategoryList.appendChild(createAdminCategoryRow({ name: '', image: '' }));
    });
  }
  if (adminStoryImageUrl) {
    adminStoryImageUrl.addEventListener("input", () => {
      const url = adminStoryImageUrl.value.trim();
      updateImagePreviewFromUrl(url, adminStoryImagePreview);
      if (adminSectionStoryImagePreview) updateImagePreviewFromUrl(url, adminSectionStoryImagePreview);
    });
  }
}

function resetAdminTabs() {
  const tabButtons = document.querySelectorAll('.admin-tab-button');
  const tabPanels = document.querySelectorAll('.admin-tab-panel');
  const emptyPanel = document.querySelector('.admin-tab-empty');

  tabButtons.forEach((btn) => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  tabPanels.forEach((panel) => {
    panel.hidden = true;
    panel.setAttribute('aria-hidden', 'true');
  });
  if (emptyPanel) emptyPanel.hidden = false;
}

function setupAdminTabs() {
  const tabButtons = document.querySelectorAll('.admin-tab-button');
  const tabPanels = document.querySelectorAll('.admin-tab-panel');
  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.adminTab;
      if (!target) return;

      resetAdminTabs();

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const emptyPanel = document.querySelector('.admin-tab-empty');
      if (emptyPanel) emptyPanel.hidden = true;

      tabPanels.forEach((panel) => {
        const isActivePanel = panel.id === `admin-tab-${target}`;
        panel.hidden = !isActivePanel;
        panel.setAttribute('aria-hidden', String(!isActivePanel));
        // When showing the Banners panel, ensure preview images reflect current site state
        if (isActivePanel && panel.id === 'admin-tab-banners') {
          try {
            if (typeof hydrateSiteFormFields === 'function') hydrateSiteFormFields(siteSettings);
          } catch (e) {
            console.warn('Error updating banner previews', e);
          }
        }
      });
    });
  });

  resetAdminTabs();
}

function saveSiteSettings() {
  if (!adminSiteStatus) return;
  adminSiteStatus.textContent = "";
  const settings = getSiteFormValues();
  const heroFile = adminHeroImageFile?.files?.[0];
  const heroImagesFiles = Array.from(adminHeroImagesFile?.files || []);
  const storyFile = adminStoryImageFile?.files?.[0];

  const logoFile = adminLogoFile?.files?.[0];
  const heroPromise = attemptUploadThenFallback(heroFile).then((src) => {
    if (src) {
      settings.heroImage = src;
      settings.heroImages = [src, ...(settings.heroImages || siteSettings.heroImages || defaultSiteSettings.heroImages)].filter(Boolean);
    }
  });
  const heroImagesFilesPromise = Promise.all(heroImagesFiles.map((file) => attemptUploadThenFallback(file).then((src) => src))).then((results) => {
    const uploaded = results.filter(Boolean);
    if (uploaded.length) {
      settings.heroImages = [...(settings.heroImages || siteSettings.heroImages || defaultSiteSettings.heroImages), ...uploaded];
    }
  });
  const storyPromise = attemptUploadThenFallback(storyFile).then((src) => { if (src) settings.storyImage = src; });
  const logoPromise = attemptUploadThenFallback(logoFile).then((src) => { if (src) settings.logoUrl = src; });
  const categoryImageFiles = readAdminCategoryImageFiles();
  const categoryFilesPromise = Promise.all(categoryImageFiles.map((file) => attemptUploadThenFallback(file).then((src) => src)));

  Promise.all([heroPromise, heroImagesFilesPromise, storyPromise, logoPromise, categoryFilesPromise]).then(([, , , , categoryImages]) => {
    const categories = readAdminMenuCategories();
    categoryImages.forEach((src, index) => {
      if (src) {
        categories[index] = categories[index] || { name: '', image: '' };
        categories[index].image = src;
      }
    });
    settings.menuCategories = categories;
    settings.heroImages = settings.heroImages && settings.heroImages.length ? settings.heroImages : (siteSettings.heroImages || defaultSiteSettings.heroImages);
    if (!settings.heroImages.length && settings.heroImage) {
      settings.heroImages = [settings.heroImage];
    }
    settings.heroImage = settings.heroImage || settings.heroImages[0] || siteSettings.heroImage || defaultSiteSettings.heroImage;
    settings.storyImage = settings.storyImage || siteSettings.storyImage || defaultSiteSettings.storyImage;
    settings.logoUrl = settings.logoUrl || siteSettings.logoUrl || defaultSiteSettings.logoUrl;
    siteSettings = { ...defaultSiteSettings, ...settings };
    persistSiteSettings(siteSettings);
    applySiteSettings(siteSettings);
    hydrateSiteFormFields(siteSettings);
    adminSiteStatus.textContent = "Ajustes de página guardados.";
    if (adminHeroImageFile) adminHeroImageFile.value = "";
    if (adminHeroImagesFile) adminHeroImagesFile.value = "";
    if (adminStoryImageFile) adminStoryImageFile.value = "";
    if (adminLogoFile) adminLogoFile.value = "";
  }).catch((error) => {
    adminSiteStatus.textContent = `Error guardando las imágenes: ${error.message}`;
  });
}

function exportSiteSettings() {
  const payload = { ...siteSettings };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `lamexicana-site-settings-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importSiteSettingsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      siteSettings = { ...defaultSiteSettings, ...data };
      persistSiteSettings(siteSettings);
      applySiteSettings(siteSettings);
      hydrateSiteFormFields(siteSettings);
      if (adminSiteStatus) adminSiteStatus.textContent = "Ajustes importados correctamente.";
    } catch (error) {
      if (adminSiteStatus) adminSiteStatus.textContent = "Archivo inválido.";
    }
  };
  reader.readAsText(file);
}

function resetSiteSettings() {
  if (!adminSiteStatus) return;
  siteSettings = { ...defaultSiteSettings };
  localStorage.removeItem("lamexicana-site-settings");
  applySiteSettings(siteSettings);
  hydrateSiteFormFields(siteSettings);
  adminSiteStatus.textContent = "Ajustes restaurados a los valores originales.";
  if (adminHeroImageFile) adminHeroImageFile.value = "";
  if (adminHeroImagesFile) adminHeroImagesFile.value = "";
  if (adminStoryImageFile) adminStoryImageFile.value = "";
  if (adminLogoFile) adminLogoFile.value = "";
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

function openAdminPanel() {
  if (adminPanel) {
    adminPanel.hidden = false;
    adminPanel.style.display = "block";
    adminPanel.setAttribute("aria-hidden", "false");
    renderAdminPanel();
  }
}

function closeAdminPanel() {
  if (adminPanel) {
    adminPanel.hidden = true;
    adminPanel.style.display = "none";
    adminPanel.setAttribute("aria-hidden", "true");
  }
}

// Global error handlers to surface JS errors instead of leaving the page blank
window.addEventListener('error', (event) => {
  try {
    console.error('Uncaught error:', event.error || event.message, event);
    const id = 'js-error-banner';
    let banner = document.getElementById(id);
    if (!banner) {
      banner = document.createElement('div');
      banner.id = id;
      banner.style.position = 'fixed';
      banner.style.zIndex = 99999;
      banner.style.left = 0;
      banner.style.right = 0;
      banner.style.top = 0;
      banner.style.background = 'rgba(200,0,0,0.95)';
      banner.style.color = '#fff';
      banner.style.padding = '8px 12px';
      banner.style.fontFamily = 'system-ui,Segoe UI,Roboto,Arial';
      banner.style.fontSize = '13px';
      banner.style.whiteSpace = 'pre-wrap';
      document.body.appendChild(banner);
    }
    banner.textContent = `JS error: ${ (event.error && event.error.message) || event.message || 'unknown' }`;
  } catch (e) { /* ignore */ }
});

window.addEventListener('unhandledrejection', (event) => {
  try {
    console.error('Unhandled promise rejection:', event.reason);
    const id = 'js-error-banner';
    let banner = document.getElementById(id);
    if (!banner) {
      banner = document.createElement('div');
      banner.id = id;
      banner.style.position = 'fixed';
      banner.style.zIndex = 99999;
      banner.style.left = 0;
      banner.style.right = 0;
      banner.style.top = 0;
      banner.style.background = 'rgba(200,0,0,0.95)';
      banner.style.color = '#fff';
      banner.style.padding = '8px 12px';
      banner.style.fontFamily = 'system-ui,Segoe UI,Roboto,Arial';
      banner.style.fontSize = '13px';
      banner.style.whiteSpace = 'pre-wrap';
      document.body.appendChild(banner);
    }
    banner.textContent = `Unhandled rejection: ${String(event.reason)}`;
  } catch (e) { /* ignore */ }
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure admin panel is hidden by default so it doesn't block the site
  if (adminPanel) {
    try {
      adminPanel.hidden = true;
      adminPanel.style.display = "none";
      adminPanel.setAttribute("aria-hidden", "true");
    } catch (e) {}
  }

  // Defensive: re-render key UI parts in case earlier execution failed
  try { initVisitCounter(); } catch (e) {}
  try { renderCategoryCards(); } catch (e) {}
  try { updateMenuCategoryState(); } catch (e) {}
  try { renderProducts(activeCategory); } catch (e) {}
  try { renderCart(); } catch (e) {}
  try { setupRevealAnimations(); } catch (e) {}

  // Make sure body is visible
  try { document.body.style.visibility = 'visible'; } catch (e) {}
});

renderCart();
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCart(); closeProductModal(); closeAdminPanel(); } });

setupRevealAnimations();
renderProducts();
renderCart();
// Do not auto-logout on load; preserve persisted admin state if present

// Hide admin toggle by default and enable reveal-on-5-clicks on logo
if (adminToggleButton) {
  adminToggleButton.style.display = 'none';
}

const brandLogoEl = document.querySelector('.brand-logo');
if (brandLogoEl) {
  let clickCount = 0;
  let clickTimer = null;
  brandLogoEl.addEventListener('click', () => {
    clickCount += 1;
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { clickCount = 0; }, 900);
    if (clickCount >= 5) {
      // toggle admin panel visibility and show the button briefly
      clickCount = 0;
      if (adminPanel) {
        adminPanel.hidden = !adminPanel.hidden;
        adminPanel.style.display = adminPanel.hidden ? 'none' : 'block';
        adminPanel.setAttribute('aria-hidden', adminPanel.hidden ? 'true' : 'false');
      }
      if (adminToggleButton) {
        adminToggleButton.style.display = adminPanel.hidden ? 'none' : 'inline-flex';
      }
    }
  });
}

if (closeAdminPanelButton) {
  closeAdminPanelButton.addEventListener("click", closeAdminPanel);
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

if (adminSiteSaveButton) {
  adminSiteSaveButton.addEventListener("click", saveSiteSettings);
}

if (adminSiteResetButton) {
  adminSiteResetButton.addEventListener("click", resetSiteSettings);
}

setupAdminImagePreviewHandlers();

if (adminProductList) {
  adminProductList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-edit-id]");
    if (!button) return;
    activeAdminProductId = Number(button.dataset.editId);
    renderAdminPanel();
  });
}

if (adminRefreshOrders) {
  adminRefreshOrders.addEventListener('click', () => fetchAndRenderOrders());
}

// Fetch orders when admin panel opens
if (adminPanel) {
  adminPanel.addEventListener('transitionend', () => {
    if (!adminPanel.hidden) fetchAndRenderOrders();
  });
}

if (adminFillSample) {
  adminFillSample.addEventListener('click', () => {
    if (!adminWebhookBody) return;
    adminWebhookBody.value = JSON.stringify({ data: { id: '12345' }, external_reference: 'TU_ORDER_ID' }, null, 2);
  });
}

if (adminFillApproved) {
  adminFillApproved.addEventListener('click', () => {
    if (!adminWebhookBody) return;
    adminWebhookBody.value = JSON.stringify({ data: { id: 'MP-PAID-123' }, external_reference: 'TU_ORDER_ID', status: 'approved' }, null, 2);
  });
}

if (adminFillPending) {
  adminFillPending.addEventListener('click', () => {
    if (!adminWebhookBody) return;
    adminWebhookBody.value = JSON.stringify({ data: { id: 'MP-PENDING-123' }, external_reference: 'TU_ORDER_ID', status: 'pending' }, null, 2);
  });
}

if (adminFillCancelled) {
  adminFillCancelled.addEventListener('click', () => {
    if (!adminWebhookBody) return;
    adminWebhookBody.value = JSON.stringify({ data: { id: 'MP-CANCEL-123' }, external_reference: 'TU_ORDER_ID', status: 'cancelled' }, null, 2);
  });
}

if (adminSendWebhook) {
  adminSendWebhook.addEventListener('click', () => {
    if (!adminWebhookBody) return;
    let payload;
    try {
      payload = JSON.parse(adminWebhookBody.value);
    } catch (err) {
      adminWebhookResult.textContent = 'JSON inválido: ' + err.message;
      return;
    }
    adminSendWebhook.disabled = true;
    adminWebhookResult.textContent = 'Enviando...';
    fetch('/api/webhook/simulate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(r => r.json())
      .then(json => {
        adminWebhookResult.textContent = JSON.stringify(json, null, 2);
        fetchAndRenderOrders();
      })
      .catch(err => {
        adminWebhookResult.textContent = 'Error: ' + (err.message || err);
      })
      .finally(() => { adminSendWebhook.disabled = false; });
  });
}

// Handle update clicks for orders
if (adminOrdersList) {
  adminOrdersList.addEventListener('click', (ev) => {
    const copyBtn = ev.target.closest('.admin-copy-paymentid');
    if (copyBtn) {
      const pid = copyBtn.dataset.paymentId;
      if (pid) {
        const original = copyBtn.textContent;
        const doCopied = () => {
          copyBtn.textContent = 'Copiado';
          copyBtn.disabled = true;
          // try to include order id when available
          const li = copyBtn.closest('li');
          const oid = li && li.getAttribute('data-order-id');
          notify('ID de pago copiado al portapapeles', 'success', 1400, oid ? { orderId: oid } : {});
          setTimeout(() => { copyBtn.textContent = original; copyBtn.disabled = false; }, 1400);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(pid).then(doCopied).catch(() => {
            // fallback to execCommand
            const ta = document.createElement('textarea');
            ta.value = pid;
            ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); doCopied(); } catch (e) { alert('Copia el id manualmente: ' + pid); }
            ta.remove();
          });
        } else {
          const ta = document.createElement('textarea');
          ta.value = pid;
          ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); doCopied(); } catch (e) { alert('Copia el id manualmente: ' + pid); }
          ta.remove();
        }
      }
      return;
    }
    const btn = ev.target.closest('.admin-order-update');
    if (!btn) return;
    const orderId = btn.dataset.orderId;
    const li = btn.closest('li');
    const select = li.querySelector('select[data-order-select]');
    if (!orderId || !select) return;
    const newStatus = select.value;
    btn.disabled = true;
    btn.textContent = 'Actualizando...';
    fetch(`/api/orders/${encodeURIComponent(orderId)}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: newStatus }) })
      .then(r => r.json())
      .then(json => {
          if (json && json.ok && json.order) {
          // reflect state in UI
          const badge = li.querySelector('.order-badge');
          if (badge) {
            badge.textContent = json.order.status || newStatus;
            badge.setAttribute('data-order-status', json.order.status || newStatus);
          }
          // include orderId for quick access from notifications
          notify('Estado actualizado', 'success', 1200, { orderId });
        } else {
          console.warn('Update response', json);
        }
      })
      .catch(err => console.error('Could not update order status', err))
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Actualizar estado';
      });
  });
}

if (adminPanel) {
  const savedSettings = loadSiteSettings();
  applySiteSettings(savedSettings);
  hydrateSiteFormFields(savedSettings);
}

setupAdminTabs();

const adminExportButton = document.querySelector("#admin-export-site");
const adminImportFile = document.querySelector("#admin-import-site-file");
const adminImportButton = document.querySelector("#admin-import-site");

if (adminExportButton) adminExportButton.addEventListener("click", exportSiteSettings);
if (adminImportButton) adminImportButton.addEventListener("click", () => {
  const file = adminImportFile?.files?.[0];
  if (!file) {
    adminSiteStatus.textContent = "Selecciona un archivo JSON para importar.";
    return;
  }
  importSiteSettingsFile(file);
});
