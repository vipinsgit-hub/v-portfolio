// Your existing JavaScript code from the inline script
// Initialize particles, handle menu toggle, section reveal, skill bar animations, etc.

// Mobile menu toggle
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'));
});

// Section reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

// Skill bar animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.getElementById('skills') && skillObserver.observe(document.getElementById('skills'));

// Particles
(function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00e87b', '#3b82f6', '#ffffff'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
    p.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(p);
  }
})();

// Resume download
function handleResumeDownload() {
  const toast = document.getElementById('resume-toast');
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}

// Initialize icons
lucide.createIcons();
