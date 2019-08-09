const navbar = document.querySelector('.navContainer');

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  };
});