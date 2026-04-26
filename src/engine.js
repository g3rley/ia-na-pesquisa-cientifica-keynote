export function initEngine(total) {
  const slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('counter');
  const progressBar = document.getElementById('progress-bar');
  let current = 0;

  function updateUI() {
    counter.textContent =
      String(current + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    progressBar.style.width = ((current + 1) / total * 100) + '%';
  }

  function goTo(n) {
    slides[current].classList.remove('active');
    slides[current].classList.add('exit-left');
    const prev = current;
    current = Math.max(0, Math.min(n, total - 1));
    slides[current].classList.add('active');
    setTimeout(() => slides[prev].classList.remove('exit-left'), 320);
    updateUI();
  }

  function next() { if (current < total - 1) goTo(current + 1); }
  function prev() { if (current > 0) goTo(current - 1); }

  document.getElementById('btn-next').addEventListener('click', next);
  document.getElementById('btn-prev').addEventListener('click', prev);

  document.getElementById('fs-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  });

  document.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
    if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); prev(); }
  });

  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  document.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
  });

  updateUI();
}
