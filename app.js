// Membuat Toggle Kelas Aktif untuk Navigasi
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
};

// Mengatur Klik di Luar untuk Menghilangkan Nav

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
