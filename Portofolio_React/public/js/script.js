alert("Welcome to my profile ^_^");

// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//klik hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk hilangin nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Scroll Reveal
ScrollReveal({ 
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .sub-title, .container2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .container1, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


