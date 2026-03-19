// ─────────────────────────────────────────────────────
//  PORTFOLIO — Leonardo Morais Cruz
//  Lê o data.json e monta todo o HTML dinamicamente
// ─────────────────────────────────────────────────────

// ── 1. BUSCA O JSON ──────────────────────────────────
async function carregarDados() {
  const res  = await fetch('./data.json');
  const data = await res.json();
  renderTudo(data);
}

// ── 2. CHAMA TODOS OS RENDERS ────────────────────────
function renderTudo(data) {
  renderPerfil(data.perfil);
  renderSkills(data.skills);
  renderIdiomas(data.idiomas);
  renderEducacao(data.educacao);
  renderProjetos(data.projetos);
  renderExperiencia(data.experiencia);
  iniciarAccordion();
}

// ── 3. PERFIL ────────────────────────────────────────
function renderPerfil(p) {
  document.querySelector('.avatar-wrap__img').src = p.foto;
  document.querySelector('.avatar-wrap__img').alt = p.nome;

  const partes = p.nome.split(' ');
  const ultimo = partes.pop();
  const resto  = partes.join(' ');
  document.querySelector('.greeting').innerHTML =
    `Olá,<br/>eu sou<br/>${resto} <em>${ultimo}</em>`;

  document.querySelector('.meta').innerHTML = `
    <div class="meta__item"><i class="fa-solid fa-code"></i>${p.titulo}</div>
    <div class="meta__item"><i class="fa-solid fa-location-dot"></i>${p.cidade}</div>
    <div class="meta__item"><i class="fa-solid fa-phone"></i>${p.telefone}</div>
    <div class="meta__item">
      <i class="fa-solid fa-envelope"></i>
      <a href="mailto:${p.email}">${p.email}</a>
    </div>
  `;

  document.querySelector('.card-footer__links').innerHTML = `
    <a href="${p.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="mailto:${p.email}"><i class="fa-solid fa-envelope"></i></a>
    <a href="tel:${p.telefone.replace(/\D/g,'')}"><i class="fa-solid fa-phone"></i></a>
  `;
}

// ── 4. SKILLS ────────────────────────────────────────
function renderSkills(skills) {
  document.querySelector('#skills-grid').innerHTML = skills.map(s => `
    <div class="skill-icon">
      <i class="${s.classe}"></i>
      <span>${s.nome}</span>
    </div>
  `).join('');
}

// ── 5. IDIOMAS ───────────────────────────────────────
function renderIdiomas(idiomas) {
  document.querySelector('#idiomas-lista').innerHTML = idiomas.map(i => `
    <div class="lang-item">
      <div class="lang-item__header">
        <span class="lang-item__name">${i.nome}</span>
        <span class="lang-item__level">${i.nivel}</span>
      </div>
      <div class="lang-item__bar-bg">
        <div class="lang-item__bar-fill lang-item__bar-fill--${i.cor}"
             data-width="${i.barra}%" style="width:0%"></div>
      </div>
    </div>
  `).join('');
}

// ── 6. EDUCAÇÃO ──────────────────────────────────────
function renderEducacao(educacao) {
  document.querySelector('#educacao-lista').innerHTML = educacao.map(e => `
    <div class="edu-item">
      <div class="edu-item__icon">${e.emoji}</div>
      <div>
        <div class="edu-item__title">${e.titulo}</div>
        <div class="edu-item__sub">${e.instituicao}</div>
        <span class="edu-item__tag">${e.status}</span>
      </div>
    </div>
  `).join('');
}

// ── 7. PROJETOS ──────────────────────────────────────
function renderProjetos(projetos) {
  document.querySelector('#projetos-lista').innerHTML = projetos.map(p => `
    <div class="project-card">
      <div class="project-card__title">${p.emoji} ${p.titulo}</div>
      <div class="project-card__desc">${p.descricao}</div>
      <div class="project-card__tags">
        ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
      </div>
      ${p.link ? `<a href="${p.link}" target="_blank" class="project-card__link">Ver projeto →</a>` : ''}
    </div>
  `).join('');
}

// ── 8. EXPERIÊNCIA ───────────────────────────────────
function renderExperiencia(exp) {
  document.querySelector('#exp-lista').innerHTML = exp.map(e => `
    <div class="exp-item">
      <div class="exp-item__timeline">
        <div class="dot"></div><div class="line"></div>
      </div>
      <div class="exp-item__body">
        <div class="exp-item__role">${e.cargo}</div>
        <div class="exp-item__company">${e.empresa} — ${e.local}</div>
        <div class="exp-item__period">${e.periodo}</div>
      </div>
    </div>
  `).join('');
}

// ── 9. ACCORDION ─────────────────────────────────────
function iniciarAccordion() {
  document.querySelectorAll('.accordion__trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.accordion__item');
      const body   = item.querySelector('.accordion__body');
      const isOpen = item.classList.contains('is-open');

      // Fecha todos
      document.querySelectorAll('.accordion__item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.accordion__body').style.maxHeight = '0';
      });

      // Abre o clicado (se estava fechado)
      if (!isOpen) {
        item.classList.add('is-open');
        body.style.maxHeight = body.scrollHeight + 'px';

        // Anima barras de idioma
        if (item.dataset.section === 'idiomas') {
          setTimeout(() => {
            document.querySelectorAll('.lang-item__bar-fill').forEach(bar => {
              bar.style.width = bar.dataset.width;
            });
          }, 80);
        }
      }
    });
  });
}

// ── INIT ─────────────────────────────────────────────
carregarDados();