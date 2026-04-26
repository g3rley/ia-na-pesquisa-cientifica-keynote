export default {
  id: 's4',
  html: `
    <div class="eyebrow fade-in">Questão 1 de 3</div>
    <div class="quiz-question fade-in-1">
      Qual dos seguintes tipos de estudo ocupa o <span class="accent">topo</span> da pirâmide de evidências científicas?
    </div>
    <div class="quiz-options fade-in-2">
      <button class="quiz-opt" data-correct="false">
        <span class="opt-letter">A</span> Estudo de coorte prospectivo
      </button>
      <button class="quiz-opt" data-correct="true">
        <span class="opt-letter">B</span> Revisão sistemática com meta-análise
      </button>
      <button class="quiz-opt" data-correct="false">
        <span class="opt-letter">C</span> Ensaio clínico randomizado
      </button>
      <button class="quiz-opt" data-correct="false">
        <span class="opt-letter">D</span> Relato de caso
      </button>
    </div>
    <div class="quiz-feedback"></div>
  `,
};
