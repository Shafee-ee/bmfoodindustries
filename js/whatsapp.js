// js/whatsapp.js

window.openWhatsApp = function (productName) {
  const phone = "919901919978";

  const message = `Hello, I'm interested in ${productName}. Please share price and details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
