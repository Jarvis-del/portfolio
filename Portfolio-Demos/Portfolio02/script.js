const tabs = document.querySelectorAll('.editor-tabs a');
  const sections = Array.from(tabs).map(t => document.querySelector(t.getAttribute('href')));

  const setActive = () => {
    let idx = 0;
    const y = window.scrollY + 120;
    sections.forEach((sec, i) => {
      if (sec && sec.offsetTop <= y) idx = i;
    });
    tabs.forEach((t, i) => t.classList.toggle('active', i === idx));
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
