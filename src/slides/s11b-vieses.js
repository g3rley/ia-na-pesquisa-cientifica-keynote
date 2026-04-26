export default {
  id: 's11b',
  html: `
    <div class="slide-content" style="gap:0; max-width:1040px;">
      <div class="eyebrow fade-in">Módulo II · Qualidade</div>
      <h2 class="fade-in-1">Vieses e Avaliação de Qualidade</h2>
      <div class="rule fade-in-2"></div>
      <div class="two-col fade-in-3" style="align-items:start; gap:44px;">
        <div>
          <h3>Principais Tipos de Viés</h3>
          <ul class="bullet-list">
            <li>
              <span><strong>Seleção</strong> — grupos não comparáveis na linha de base; ocorre quando a alocação não é oculta ou a amostra não é representativa.</span>
            </li>
            <li>
              <span><strong>Aferição</strong> — desfecho medido de forma diferente entre grupos; comum quando avaliadores sabem a qual grupo cada participante pertence.</span>
            </li>
            <li>
              <span><strong>Confundimento</strong> — terceira variável associada tanto à exposição quanto ao desfecho distorce o efeito observado.</span>
            </li>
            <li>
              <span><strong>Publicação</strong> — estudos com resultado negativo ou não significativo têm menor chance de ser publicados, inflando estimativas de efeito.</span>
            </li>
            <li>
              <span><strong>Atrito</strong> — perda diferencial de participantes ao longo do seguimento compromete a comparabilidade dos grupos.</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Ferramentas de Avaliação</h3>
          <ul class="bullet-list">
            <li>
              <span><code>ROB 2</code> — Cochrane Risk of Bias para ensaios clínicos randomizados; avalia 5 domínios com julgamento baixo / preocupante / alto.</span>
            </li>
            <li>
              <span><code>ROBINS-I</code> — versão para estudos observacionais não randomizados; 7 domínios de risco.</span>
            </li>
            <li>
              <span><code>Newcastle-Ottawa</code> — escala de estrelas para coorte e caso-controle; máximo 9 pontos.</span>
            </li>
            <li>
              <span><code>GRADE</code> — certeza da evidência de muito baixa a alta; usado em revisões sistemáticas e diretrizes.</span>
            </li>
            <li>
              <span><code>AMSTAR 2</code> — avalia a qualidade metodológica de revisões sistemáticas já publicadas.</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="callout fade-in-4 mt-md" style="width:100%;">
        <strong>Regra prática:</strong> estar no topo da pirâmide não elimina vieses — um ECR mal conduzido pode ter evidência GRADE "muito baixa". Hierarquia e qualidade são dimensões independentes.
      </div>
    </div>
  `,
};
