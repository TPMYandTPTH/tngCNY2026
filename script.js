// Falling angbao (subtle, performance-safe)
const layer = document.getElementById('angbao-layer');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  const SRC = 'assets/angbao.png';

  function spawn() {
    const img = document.createElement('img');
    img.src = SRC;
    img.alt = '';
    img.className = 'angbao';

    // Start position and drift
    const startX = Math.random() * 100; // vw
    const scale = 0.65 + Math.random() * 0.55; // 0.65–1.2
    const duration = 7 + Math.random() * 5; // 7–12s

    img.style.left = startX + 'vw';
    img.style.transform = `scale(${scale}) rotate(${Math.random()*90 - 45}deg)`;
    img.style.animationDuration = duration + 's';

    layer.appendChild(img);
    window.setTimeout(() => img.remove(), (duration + 0.5) * 1000);
  }

  // Rate: subtle (matches premium look)
  window.setInterval(spawn, 950);
  // initial burst
  for (let i = 0; i < 6; i++) setTimeout(spawn, i * 200);
}
// GA4 CTA click tracking
document.querySelectorAll('[data-cta]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'cta_click', {
        cta_name: btn.getAttribute('data-cta'),
        page_title: document.title,
        page_location: window.location.href
      });
    }
  });
});
