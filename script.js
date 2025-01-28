// ---------------------
// Menu burger (mobile)
// ---------------------
const menuToggle = document.getElementById('menu-toggle');
const navbarUl = document.querySelector('.header-nav ul');

menuToggle.addEventListener('click', () => {
  navbarUl.classList.toggle('show');
});

// ---------------------------------------
// Intersection Observer for fade-in
// ---------------------------------------
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});

// ---------------------------------------
// Cookie banner
// ---------------------------------------
const cookieBanner = document.getElementById('cookie-banner');
const cookieAcceptBtn = document.getElementById('cookie-accept-btn');

cookieAcceptBtn.addEventListener('click', () => {
  cookieBanner.style.display = 'none';
});

// ---------------------------------------
// Mini slider (testimonials)
// ---------------------------------------
const slider = document.getElementById('testimonial-slider');
if (slider) {
  const slides = slider.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;
    const offset = -index * 100;
    slides.forEach(slide => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  }

  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });
  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  // Init
  showSlide(currentSlide);
}

// ---------------------------------------
// Form submission (contact)
// ---------------------------------------
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Votre message a bien été envoyé !");
  contactForm.reset();
});
