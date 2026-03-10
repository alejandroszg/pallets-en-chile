(() => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const icon = btn.querySelector(".material-symbols-outlined");
  const links = menu.querySelectorAll(".mobile-nav-link");

  function open() {
    menu.style.maxHeight = menu.scrollHeight + "px";
    menu.style.opacity = "1";
    btn.setAttribute("aria-expanded", "true");
    icon.textContent = "close";
  }

  function close() {
    menu.style.maxHeight = "0";
    menu.style.opacity = "0";
    btn.setAttribute("aria-expanded", "false");
    icon.textContent = "menu";
  }

  function toggle() {
    btn.getAttribute("aria-expanded") === "true" ? close() : open();
  }

  btn.addEventListener("click", toggle);

  links.forEach((link) => link.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      close();
      btn.focus();
    }
  });
})();
