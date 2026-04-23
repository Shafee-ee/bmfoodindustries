function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  const isOpen = !menu.classList.contains("translate-y-full");

  if (isOpen) {
    menu.classList.add("translate-y-full");
    overlay.classList.add("hidden");
  } else {
    menu.classList.remove("translate-y-full");
    overlay.classList.remove("hidden");
  }
}

document.getElementById("overlay").addEventListener("click", toggleMenu);
