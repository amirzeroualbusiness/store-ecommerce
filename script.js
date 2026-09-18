const form = document.getElementById("formulario");
const btn = document.getElementById("sub");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "home.html";
});
