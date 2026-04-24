function openWhatsApp() {
  const product = window.currentProduct;

  const message = `Hi, I'm interested in ${product.title} (${product.pack}) for ${product.price}.`;

  const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
