export default {
  id: 's14b',
  html: `
    <div class="slide-content" style="gap:0; max-width:1040px;">
      <div class="eyebrow fade-in">Módulo VI · Prática Aplicada</div>
      <h2 class="fade-in-1">Prompts Prontos para Copiar</h2>
      <div class="rule fade-in-2"></div>
      <div class="card-grid fade-in-3" style="grid-template-columns:repeat(2,1fr); gap:12px;">

        <div class="card" style="display:flex;flex-direction:column;gap:8px;">
          <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);">01 · Introdução IMRAD</div>
          <div style="font-family:var(--font-mono);font-size:.72rem;line-height:1.6;color:var(--ink2);background:var(--bg2);padding:10px 12px;border-left:2px solid var(--accent);">
            Atue como orientador científico. Tema: [TEMA]. Escreva uma introdução IMRAD com: (1) contexto epidemiológico em 2 parágrafos, (2) lacuna do conhecimento, (3) hipótese e objetivo. Use linguagem formal. Onde faltar dado real, marque <span style="color:var(--accent);">[REF NECESSÁRIA]</span> — não invente números.
          </div>
        </div>

        <div class="card" style="display:flex;flex-direction:column;gap:8px;">
          <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);">02 · Extração de Abstract</div>
          <div style="font-family:var(--font-mono);font-size:.72rem;line-height:1.6;color:var(--ink2);background:var(--bg2);padding:10px 12px;border-left:2px solid var(--accent);">
            Extraia do abstract abaixo em formato de tabela: tipo de estudo · população (n, idade, sexo) · intervenção · comparador · desfecho primário · resultado principal com IC 95% · limitação principal.<br><br>Abstract: <span style="color:var(--accent);">[COLAR AQUI]</span>
          </div>
        </div>

        <div class="card" style="display:flex;flex-direction:column;gap:8px;">
          <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);">03 · Odds Ratio (tabela 2×2)</div>
          <div style="font-family:var(--font-mono);font-size:.72rem;line-height:1.6;color:var(--ink2);background:var(--bg2);padding:10px 12px;border-left:2px solid var(--accent);">
            Calcule o Odds Ratio e IC 95% (método de Woolf) para: a=<span style="color:var(--accent);">[exposto+desfecho]</span> b=<span style="color:var(--accent);">[exposto-desfecho]</span> c=<span style="color:var(--accent);">[não-exposto+desfecho]</span> d=<span style="color:var(--accent);">[não-exposto-desfecho]</span>. Mostre o cálculo passo a passo e interprete em linguagem clínica.
          </div>
        </div>

        <div class="card" style="display:flex;flex-direction:column;gap:8px;">
          <div style="font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);">04 · Declaração de Uso de IA</div>
          <div style="font-family:var(--font-mono);font-size:.72rem;line-height:1.6;color:var(--ink2);background:var(--bg2);padding:10px 12px;border-left:2px solid var(--accent);">
            Redija uma declaração de uso de IA para o artigo "<span style="color:var(--accent);">[TÍTULO]</span>" conforme diretrizes ICMJE. IA foi usada para <span style="color:var(--accent);">[revisão gramatical / estruturação]</span>. Os autores revisaram todo o conteúdo e são inteiramente responsáveis. A IA não é listada como autora.
          </div>
        </div>

      </div>
      <div class="callout fade-in-4 mt-md" style="width:100%;">
        <strong>Regra de uso:</strong> substitua todos os campos em <span style="color:var(--accent);font-family:var(--font-mono);font-size:.85em;">[colchetes]</span> antes de enviar. Nunca aceite o output sem revisar cada afirmação e cada referência gerada.
      </div>
    </div>
  `,
};
