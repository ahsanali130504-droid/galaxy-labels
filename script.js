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
// ===== MACHINE MODAL =====
const machineData = {
  weaving: {
    img: "images/m1.jpg",
    title: "Weaving Loom",
    body: `
      <h4>What It Does</h4>
      <p>This machine weaves your design directly into the fabric using thin threads, one line at a time. Nothing is printed here — every letter, logo and pattern is actually built out of thread, just like fabric is woven.</p>
      <h4>Why This Method Is Better</h4>
      <p>Since the design is woven in, it can't peel off, fade, or crack the way printed labels sometimes do. Even after being washed hundreds of times, the label still looks sharp and clear.</p>
      <h4>The Feel & Look</h4>
      <p>Woven labels have a soft, fabric-like texture instead of a rough printed surface. This is what makes clothing labels feel "premium" when you touch them.</p>
      <h4>What We Make With It</h4>
      <p>We use this machine for brand logo labels, size tags, care instruction labels, and woven badges — anything that needs to look sharp and last a long time.</p>
      <h4>Speed & Precision</h4>
      <p>The loom can weave thin, detailed designs at high speed without losing quality, so even small text and fine logo details come out clean and readable.</p>
    `
  },
  cutting: {
    img: "images/m2.jpg",
    title: "Cutting & Folding Unit",
    body: `
      <h4>What It Does</h4>
      <p>After labels are woven or printed, they come out as one long continuous roll. This machine's job is to cut that roll into individual labels and fold each one into the exact shape needed.</p>
      <h4>Why Folding Matters</h4>
      <p>Different garments need different label folds — some need the label folded in half, some need the edges tucked in, some need it flat. This machine handles all these fold types automatically.</p>
      <h4>Consistency Is Key</h4>
      <p>Imagine cutting 10,000 labels by hand — no two would be exactly the same size. This machine makes sure every single label, from the first to the last, comes out identical.</p>
      <h4>Clean Finish</h4>
      <p>The edges are trimmed neatly with no loose threads or rough cuts, so the final label looks clean and professional when it's sewn onto a product.</p>
      <h4>Handles Large Orders Easily</h4>
      <p>Because it's automated, this machine can process large quantities in a short time — perfect for big orders that need to be delivered quickly.</p>
    `
  },
  heatpress: {
    img: "images/m3.jpeg",
    title: "Heat Press Station",
    body: `
      <h4>What It Does</h4>
      <p>This machine uses heat and pressure to seal and finish labels, tags, and badges. Think of it like an iron, but much more precise and controlled digitally.</p>
      <h4>Why Heat Sealing Is Used</h4>
      <p>Some labels and badges need to be bonded onto fabric or backing material without stitching. Heat sealing creates a strong, smooth bond that holds up well over time.</p>
      <h4>Precise Temperature Control</h4>
      <p>The temperature is set digitally and monitored closely. Too much heat can damage the material, and too little won't seal properly — this machine keeps it exactly right, every time.</p>
      <h4>Smooth, Wrinkle-Free Results</h4>
      <p>Even pressure across the whole surface means no bumps, wrinkles, or uneven spots — the finished label looks flat and neat.</p>
      <h4>Used For</h4>
      <p>Heat seal badges, backing material application, and adding a final polished touch to tags and labels before they're packed and shipped.</p>
    `
  },
  printing: {
    img: "images/m4.jpg",
    title: "Flexo Printing Machine",
    body: `
      <h4>What It Does</h4>
      <p>This machine prints your design onto satin, taffeta, or fabric tape using a technique called flexographic printing — where a flexible printing plate transfers ink directly onto the material.</p>
      <h4>Multiple Colors In One Pass</h4>
      <p>The machine has several print stations, so it can layer multiple colors onto a single label in one continuous run, instead of printing each color separately.</p>
      <h4>Accurate Color Matching</h4>
      <p>Every brand has specific colors — we match these precisely using Pantone color codes, so the label color matches your brand exactly, order after order.</p>
      <h4>Sharp, Vibrant Output</h4>
      <p>Because the ink is applied with precision, text and designs come out crisp and the colors stay bright, even on small or detailed designs.</p>
      <h4>Fast Production</h4>
      <p>The roll-to-roll printing process means large quantities can be printed quickly without sacrificing quality — good for both small custom batches and bulk orders.</p>
    `
  }
};

function openMachineModal(key) {
  const data = machineData[key];
  if (!data) return;

  document.getElementById('modalBody').innerHTML = `
    <img src="${data.img}" alt="${data.title}">
    <h2>${data.title}</h2>
    ${data.body}
  `;
  document.getElementById('machineModal').classList.add('active');
}

// Close modal
const machineModal = document.getElementById('machineModal');
const modalClose = document.getElementById('modalClose');

modalClose.addEventListener('click', () => {
  machineModal.classList.remove('active');
});

// Close when clicking outside the card (on the dark overlay)
machineModal.addEventListener('click', (e) => {
  if (e.target === machineModal) {
    machineModal.classList.remove('active');
  }
});
// ===== PRODUCT CATEGORY TABS =====
const productImages = {
  woven: [
    { src: "images/sl1.jpg", alt: "Woven Label Design 1" },
    { src: "images/sl3.avif", alt: "Woven Label Design 2" },
    { src: "images/sli2.jpg", alt: "Woven Label Design 3" }
  ],
  badges: [
    { src: "images/sli4.jpg", alt: "Woven Badge Design 1" },
    { src: "images/sli5.jpg", alt: "Woven Badge Design 2" },
    { src: "images/sl3.avif", alt: "Woven Badge Design 3" }
  ],
  lasercut: [
    { src: "images/sl1.jpg", alt: "Laser Cut Label Design 1" },
    { src: "images/sl3.avif", alt: "Laser Cut Label Design 2" },
    { src: "images/sli2.jpg", alt: "Laser Cut Label Design 3" }
  ],
  damask: [
    { src: "images/sl3.avif", alt: "Damask Label Design 1" },
    { src: "images/sli4.jpg", alt: "Damask Label Design 2" },
    { src: "images/sl1.jpg", alt: "Damask Label Design 3" }
  ],
  satin: [
    { src: "images/sl3.avif", alt: "Satin Label Design 1" },
    { src: "images/sli5.jpg", alt: "Satin Label Design 2" },
    { src: "images/sli4.jpg", alt: "Satin Label Design 3" }
  ],
  taffeta: [
    { src: "images/sli4.jpg", alt: "Taffeta Label Design 1" },
    { src: "images/sli5.jpg", alt: "Taffeta Label Design 2" },
    { src: "images/sl3.avif", alt: "Taffeta Label Design 3" }
  ],
  zipper: [
    { src: "images/sli4.jpg", alt: "Zipper Puller Design 1" },
    { src: "images/sli5.jpg", alt: "Zipper Puller Design 2" },
    { src: "images/sl1.jpg", alt: "Zipper Puller Design 3" }
  ],
  hangtags: [
    { src: "images/sli5.jpg", alt: "Hang Tag Design 1" },
    { src: "images/sli4.jpg", alt: "Hang Tag Design 2" },
    { src: "images/sl1.jpg", alt: "Hang Tag Design 3" }
  ]
};

function showProductCategory(key, btnEl) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  btnEl.classList.add('active');

  const gallery = document.getElementById('productGallery');
  gallery.innerHTML = '';

  productImages[key].forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
    gallery.appendChild(div);
  });
}

// Load default category (woven) on page load
document.addEventListener('DOMContentLoaded', () => {
  const firstBtn = document.querySelector('.tab-btn');
  if (firstBtn) showProductCategory('woven', firstBtn);
});