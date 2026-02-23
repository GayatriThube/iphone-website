  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // Color swatches
  document.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active');
    });
  });

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.background =
      window.scrollY > 60 ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)';
  });