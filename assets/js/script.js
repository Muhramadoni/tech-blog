const navbaritem = document.querySelector(".nav-items");

document.querySelector("#menu").onclick = () => {
  navbaritem.classList.toggle("active");
};

const sidebar = document.querySelector("#menu");
document.addEventListener("click", function (klik_event) {
  if (!sidebar.contains(klik_event.target)) {
    navbaritem.classList.remove("active");
  }
});
