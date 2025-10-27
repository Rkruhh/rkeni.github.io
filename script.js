// Fade-in on scroll (optional if you already had it)
const fxSections = document.querySelectorAll('.section, .card, .project-card, .cardish');
const onScroll = () => {
  const trigger = window.innerHeight * 0.85;
  fxSections.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

// Dark / Light toggle with memory
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    toggleBtn.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
}

// Formspree AJAX submit (stays on page and shows status)
const form = document.getElementById('fs-form');
const statusEl = document.getElementById('fs-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';
    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method,
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Thanks! Your message has been sent.';
      } else {
        statusEl.textContent = 'Oops, something went wrong. Please try again.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error. Please try again.';
    }
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
