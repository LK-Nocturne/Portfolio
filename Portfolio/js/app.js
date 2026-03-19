// ── ACCORDION ────────────────────────────────────────
document.querySelectorAll('.accordion__trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion__item');
    const body = item.querySelector('.accordion__body');
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

      // Anima barras de idioma quando a seção abre
      if (item.dataset.section === 'idiomas') animateLangBars();
    }
  });
});

// ── BARRAS DE IDIOMA ─────────────────────────────────
function animateLangBars() {
  document.querySelectorAll('.lang-item__bar-fill').forEach(bar => {
    const target = bar.dataset.width;
    setTimeout(() => { bar.style.width = target; }, 80);
  });
}

// ── SKILL ICON — TOOLTIP ─────────────────────────────
document.querySelectorAll('.skill-icon').forEach(icon => {
  icon.setAttribute('title', icon.querySelector('span')?.textContent || '');
});

// ── EASTER EGG: SEQUÊNCIA KONAMI ─────────────────────
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;

document.addEventListener('keydown', e => {
  if (e.key === konami[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konami.length) {
      konamiIdx = 0;
      document.querySelector('.card').style.animation = 'none';
      document.querySelector('.avatar-wrap').style.setProperty('--speed', '0.4s');
      document.querySelector('.avatar-wrap::after');
      alert('🎮 +100 XP — LK desbloqueou o modo Fullstack!');
    }
  } else {
    konamiIdx = 0;
  }
});
