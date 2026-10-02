// ---- theme ----
// Light / dark switch. Remembers your choice; with no choice it follows your system setting.
(function () {
  const root = document.documentElement, btn = document.getElementById('theme-toggle');
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.dataset.theme || (mq.matches ? 'dark' : 'light');
  function paint() {
    const dark = current() === 'dark', next = dark ? 'light' : 'dark';
    btn.firstElementChild.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    btn.title = 'Switch to ' + next + ' mode';
  }
  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('shuben.theme', next); } catch (e) {}
    paint();
  });
  if (mq.addEventListener) mq.addEventListener('change', () => { if (!root.dataset.theme) paint(); });
  paint();
})();
