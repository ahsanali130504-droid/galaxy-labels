// ===== SLIDER =====
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;

// Create dots dynamically based on number of slides
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

// Auto-change slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// Close mobile menu when clicking anywhere outside it
document.addEventListener('click', (e) => {
  const isClickInsideNav = mobileNav.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
  }
});
// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});