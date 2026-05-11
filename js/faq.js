const toggles = document.querySelectorAll(".faq-toggle");
console.log("faq loaded");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqItem = toggle.closest(".faq-item");
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector(".faq-icon");

    content.classList.toggle("hidden");

    icon.classList.toggle("rotate-45");

    faqItem.classList.toggle("border-green-500");
    faqItem.classList.toggle("border-l-4");
  });
});
