import './styles/variables.css';
import './styles/engine.css';
import './styles/components.css';

import { slides } from './slides/index.js';
import { initEngine } from './engine.js';
import { initQuiz } from './quiz.js';

const deck = document.getElementById('deck');
const total = slides.length;

slides.forEach((slide, i) => {
  const label = String(i + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
  const el = document.createElement('div');
  el.className = 'slide' + (i === 0 ? ' active' : '');
  el.id = slide.id;
  el.innerHTML = `<span class="slide-label">${label}</span>${slide.html}`;
  deck.appendChild(el);
});

initEngine(total);
initQuiz();
