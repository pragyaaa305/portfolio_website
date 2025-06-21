// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// Hamburger Menu
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const hamburgerIcon = document.getElementById("hamburger-icon");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    hamburgerIcon.style.filter = "invert(0)";
  } else {
    hamburgerIcon.style.filter = "invert(1)";
  }
});


