const products = {
  mango: {
    title: "Fruit Bites – Mango",
    price: "₹170",
    pack: "20g",
    equivalent: "≈ 300g fresh fruit",
    desc: "Crisp, naturally sweet mango bites.",
    images: [
      "images/products-page/mango-modal.png",
      "images/products-page/mango-bowl.png",
      "images/products-page/mango-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Retains 97% Nutrients",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },

  strawberry: {
    title: "Fruit Bites – Strawberry",
    price: "₹190",
    pack: "15g",
    equivalent: "≈ 225g fresh fruit",
    desc: "Sweet & tangy strawberry with a crisp bite.",
    images: [
      "images/products-page/strawberry-modal.png",
      "images/products-page/strawberry-bowl.png",
      "images/products-page/strawberry-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Retains 97% Nutrients",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },

  pineapple: {
    title: "Fruit Bites – Pineapple",
    price: "₹170",
    pack: "20g",
    equivalent: "≈ 300g fresh fruit",
    desc: "Naturally sweet pineapple with a crisp texture.",
    images: [
      "images/products-page/pineapple-modal.png",
      "images/products-page/pineapple-bowl.png",
      "images/products-page/pineapple-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Retains 97% Nutrients",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },

  jamun: {
    title: "Fruit Bites – Jamun",
    price: "₹190",
    pack: "20g",
    equivalent: "≈ 300g fresh fruit",
    desc: "Bold, unique jamun flavor with natural richness.",
    images: [
      "images/products-page/jamun-modal.png",
      "images/products-page/jamun-bowl.png",
      "images/products-page/jamun-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Rich in Antioxidants",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },

  jackfruit: {
    title: "Fruit Bites – Jackfruit",
    price: "₹170",
    pack: "20g",
    equivalent: "≈ 300g fresh fruit",
    desc: "Tropical jackfruit with natural sweetness and crunch.",
    images: [
      "images/products-page/jackfruit-modal.png",
      "images/products-page/jackfruit-bowl.png",
      "images/products-page/jackfruit-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Retains 97% Nutrients",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },

  guava: {
    title: "Fruit Bites – Pink Guava",
    price: "₹170",
    pack: "20g",
    equivalent: "≈ 300g fresh fruit",
    desc: "Exotic pink guava with a naturally rich taste.",
    images: [
      "images/products-page/pinkguava-modal.png",
      "images/products-page/pink-guava-bowl.png",
      "images/products-page/pinkguava-modal-flat.png",
    ],
    highlights: [
      "100% Real Fruit",
      "No Added Sugar",
      "Retains 97% Nutrients",
      "Light & Crunchy",
      "Long Shelf Life",
    ],
  },
};

let currentIndex = 0;
let currentImages = [];

function updateCarousel() {
  const imgs = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".dot");

  imgs.forEach((img, i) => {
    img.src = currentImages[i] || "";
    img.style.opacity = i === currentIndex ? "1" : "0";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-800", i === currentIndex);
    dot.classList.toggle("bg-gray-300", i !== currentIndex);
    dot.classList.toggle("scale-110", i === currentIndex);
  });
}

function nextImage() {
  if (!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function openModal(key) {
  const product = products[key];

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalPrice").innerText = product.price;
  document.getElementById("modalPack").innerText =
    product.pack + " • " + product.equivalent;

  document.getElementById("modalDesc").innerText = product.desc;

  currentImages = product.images || [];
  currentIndex = 0;
  updateCarousel();

  window.currentProduct = product;

  const list = document.getElementById("modalHighlights");
  list.innerHTML = "";

  product.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="text-green-600 mr-1">✓</span>${item}`;
    list.appendChild(li);
  });

  document.getElementById("productModal").classList.remove("hidden");
  document.getElementById("productModal").classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("productModal");

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  currentIndex = 0;
  currentImages = [];
}
