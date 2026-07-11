const toggle = document.querySelector('[data-nav-toggle]');
const links = document.querySelector('[data-nav-links]');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.dataset.open !== 'true';
    links.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      links.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
