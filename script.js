
// --- Fade-in animation ---
const sections = document.querySelectorAll('.section, .card');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
});

// --- Dark/Light Toggle ---
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  const userPref = localStorage.getItem('theme');

  // Load saved theme
  if (userPref === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
