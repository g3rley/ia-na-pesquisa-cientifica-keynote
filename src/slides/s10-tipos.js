export default {
  id: 's10',
  html: `
    <div class="slide-content" style="gap:0; max-width:1020px;">
      <div class="eyebrow fade-in">Módulo I</div>
      <h2 class="fade-in-1">Tipos de Trabalhos Científicos</h2>
      <div class="rule fade-in-2"></div>
      <div class="card-grid fade-in-3" style="grid-template-columns:repeat(3,1fr);">
        <div class="icon-card">
          <div class="icon">I.</div>
          <h4>Primários</h4>
          <p>Dados originais coletados pelo pesquisador.<br><span style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent2);">ECR · Coorte · Caso-controle · Transversal · Relato</span></p>
        </div>
        <div class="icon-card">
          <div class="icon">II.</div>
          <h4>Secundários</h4>
          <p>Sintetizam estudos primários existentes.<br><span style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent2);">Revisão Sistemática · Meta-análise · Revisão Narrativa</span></p>
        </div>
        <div class="icon-card">
          <div class="icon">III.</div>
          <h4>Terciários</h4>
          <p>Compilações amplas para prática clínica.<br><span style="font-family:var(--font-mono);font-size:.72rem;color:var(--accent2);">Diretrizes · Guidelines · Livros-texto · UpToDate</span></p>
        </div>
      </div>
      <div class="callout fade-in-4 mt-md" style="width:100%;">
        <strong>Regra prática:</strong> quanto mais alto na hierarquia, maior o controle sobre vieses — mas também maior o custo e o tempo. O desenho deve ser adequado à pergunta PICO.
      </div>
    </div>
  `,
};
