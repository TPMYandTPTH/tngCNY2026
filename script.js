
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
