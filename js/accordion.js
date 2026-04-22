// accordion.js

function setActive(el) {
  const items = el.parentElement.children;

  for (let item of items) {
    item.classList.remove("active");
    item.style.flex = "1 1 0%";
  }

  el.classList.add("active");
  el.style.flex = "6 1 0%";
}

function setActiveVertical(el) {
  const items = el.parentElement.children;

  for (let item of items) {
    item.classList.remove("active");
    item.style.flex = "1 1 0%";
  }

  el.classList.add("active");
  el.style.flex = "5 1 0%";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const section = document.getElementById("applications");
    if (!section) return;

    const desktop = section.querySelector(".applications-desktop");
    if (desktop && desktop.children.length) {
      setActive(desktop.children[0]);
    }

    const mobile = section.querySelector(".applications-mobile");
    if (mobile && mobile.children.length) {
      setActiveVertical(mobile.children[0]);
    }
  }, 100);
});
