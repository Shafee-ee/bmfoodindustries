function openWhatsApp() {
  const product = window.currentProduct;
  const phone = "919901919978";

  const message = `Hi, I'm interested in ${product.title} (${product.pack}) for ${product.price}.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
