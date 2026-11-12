const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('print-cv')?.addEventListener('click', () => window.print());

// Navigate to the homepage hero immediately, even when a section hash is active.
document.querySelectorAll('[data-home-link]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const homeUrl = window.location.pathname + window.location.search;
    if (window.location.hash) {
      window.history.pushState(null, '', homeUrl);
    }
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    window.requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
