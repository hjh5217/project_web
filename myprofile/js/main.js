window.onload = function () {
  const toggleBtn = document.querySelector(".navbar__toggleBtn");
  const menu = document.querySelector(".navbar__menu");

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
    console.log("active");
  });
};
