export function initQuiz() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.quiz-opt');
    if (!btn) return;

    const slide = btn.closest('.slide');
    if (!slide) return;

    const opts = slide.querySelectorAll('.quiz-opt');
    const fb = slide.querySelector('.quiz-feedback');
    const isCorrect = btn.dataset.correct === 'true';

    opts.forEach(o => {
      o.disabled = true;
      if (o.dataset.correct === 'true') o.classList.add('revealed-correct');
    });

    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    fb.className = 'quiz-feedback show ' + (isCorrect ? 'right' : 'wrong');
    fb.textContent = isCorrect
      ? 'Correto. Avance para ver a explicação →'
      : 'Não exatamente. Veja a explicação no próximo slide →';
  });
}
