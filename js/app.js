// Smooth scrolling
new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'easeInOutQuad'
});

// Animating page
ScrollReveal({
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  duration: 800,
  scale: 0.25,
  opacity: 0,
  delay: 200,
  origin: 'bottom',
});
ScrollReveal().reveal('#header')
ScrollReveal().reveal('#about', {delay: 500})
ScrollReveal().reveal('#contact')