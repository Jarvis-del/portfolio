const scrollProgress = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';

  nav.classList.toggle('is-scrolled', scrollTop > 20);
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* =====================================================
   MOBILE NAV TOGGLE
===================================================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-active', isOpen);
});

// close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-active');
  });
});

/* =====================================================
   TYPEWRITER EFFECT
===================================================== */
const typewriterEl = document.getElementById('typewriter');
const phrases = [
  'ideas',
  'weather data',
  'to-do lists',
  'clean code',
  'REST APIs'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typewriterEl.textContent = current.substring(0, charIndex);

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 1400; // pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 300;
  }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* =====================================================
   SCROLL REVEAL (IntersectionObserver)
===================================================== */
const revealEls = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

/* =====================================================
   ACTIVE NAV LINK ON SCROLL
===================================================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('is-active'));
      link.classList.add('is-active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));
