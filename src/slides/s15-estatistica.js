export default {
  id: 's15',
  html: `
    <div class="slide-content" style="gap:0; max-width:1020px;">
      <div class="eyebrow fade-in">Módulo V</div>
      <h2 class="fade-in-1">Modelos Estatísticos com IA + Dados Online</h2>
      <div class="rule fade-in-2"></div>
      <div class="two-col fade-in-3" style="align-items:start; gap:40px;">
        <div>
          <h3>Fontes de Dados Epidemiológicos</h3>
          <ul class="bullet-list">
            <li><code>DATASUS</code> — morbidade, mortalidade e internações no Brasil</li>
            <li><code>SINAN</code> — doenças de notificação compulsória</li>
            <li><code>Our World in Data</code> — séries históricas globais</li>
            <li><code>WHO GHO</code> — indicadores globais de saúde</li>
            <li><code>IBGE</code> — dados socioeconômicos e demográficos</li>
          </ul>
        </div>
        <div>
          <h3>O que a IA pode calcular</h3>
          <ul class="bullet-list">
            <li>Odds Ratio, Risco Relativo e IC 95% a partir de tabelas 2×2</li>
            <li>Regressão logística simples com interpretação</li>
            <li>Correlação de Pearson/Spearman entre variáveis</li>
            <li>Série temporal e taxa de crescimento de casos</li>
            <li>Teste qui-quadrado e valor p em tabelas de contingência</li>
          </ul>
        </div>
      </div>
      <div class="callout fade-in-4 mt-md" style="width:100%;">
        <strong>Exemplo:</strong> baixe o CSV de mortalidade por município do DATASUS → cole no Julius AI → solicite a taxa de mortalidade padronizada por idade por região. Resultado em segundos.
      </div>
    </div>
  `,
};
