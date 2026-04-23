const products = {
  mango: {
    title: "Fruit Bites – Mango",
    subtitle: "Freeze-Dried",
    desc: "Premium freeze-dried mango snack with rich flavor and crunch.",
    images: [
      "images/products-page/mango-modal.png",
      "images/products-page/mango-bowl.png",
      "images/products-page/mango-modal-flat.png",
    ],
    highlights: ["No preservatives", "Real fruit", "Vegan", "Long shelf life"],
  },

  strawberry: {
    title: "Fruit Bites – Strawberry",
    subtitle: "Freeze-Dried",
    desc: "Sweet and tangy strawberry bites with natural taste.",
    images: [
      "images/products-page/strawberry-modal.png",
      "images/products-page/strawberry-bowl.png",
      "images/products-page/strawberry-modal-flat.png",
    ],
    highlights: ["No preservatives", "Real fruit", "Vegan"],
  },

  pineapple: {
    title: "Fruit Bites – Pineapple",
    subtitle: "Freeze-Dried",
    desc: "Naturally sweet pineapple with crisp texture.",
    images: [
      "images/products-page/pineapple-modal.png",
      "images/products-page/pineapple-bowl.png",
      "images/products-page/pineapple-modal-flat.png",
    ],
    highlights: ["Natural taste", "No additives", "Crunchy"],
  },

  jamun: {
    title: "Fruit Bites – Jamun",
    subtitle: "Freeze-Dried",
    desc: "Unique bold flavor with deep fruit notes.",
    images: [
      "images/products-page/jamun-modal.png",
      "images/products-page/jamun-bowl.png",
      "images/products-page/jamun-modal-flat.png",
    ],
    highlights: ["Exotic fruit", "Rich antioxidants", "No preservatives"],
  },

  jackfruit: {
    title: "Fruit Bites – Jackfruit",
    subtitle: "Freeze-Dried",
    desc: "Tropical jackfruit with natural sweetness.",
    images: [
      "images/products-page/jackfruit-modal.png",
      "images/products-page/jackfruit-bowl.png",
      "images/products-page/jackfruit-modal-flat.png",
    ],
    highlights: ["Tropical flavor", "Crunchy texture", "Vegan"],
  },

  guava: {
    title: "Fruit Bites – Pink Guava",
    subtitle: "Freeze-Dried",
    desc: "Exotic guava snack with premium taste.",
    images: [
      "images/products-page/pinkguava-modal.png",
      "images/products-page/pink-guava-bowl.png",
      "images/products-page/pinkguava-modal-flat.png",
    ],
    highlights: ["Premium quality", "Natural fruit", "No preservatives"],
  },
};

let currentIndex = 0;
let currentImages = [];

function updateCarousel() {
  const imgs = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".dot");

  imgs.forEach((img, i) => {
    img.src = currentImages[i];
    img.style.opacity = i === currentIndex ? "1" : "0";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-800", i === currentIndex);
    dot.classList.toggle("bg-gray-300", i !== currentIndex);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function openModal(key) {
  const product = products[key];

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalSubtitle").innerText = product.subtitle;
  document.getElementById("modalDesc").innerText = product.desc;
  currentImages = product.images;
  currentIndex = 0;
  updateCarousel();
  window.currentProduct = product.title;

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
  document.getElementById("productModal").classList.add("hidden");
}
