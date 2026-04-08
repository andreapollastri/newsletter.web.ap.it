// Subtle scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .pillar-card, .code-block, .cta-content, .deploy-card, .production-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Docs sidebar toggle (mobile)
const toggle = document.getElementById('docs-menu-toggle');
const sidebar = document.getElementById('docs-sidebar');
if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });
}
