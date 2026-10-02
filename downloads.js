// Fills in the download buttons from config.js
document.querySelectorAll('[data-dl]').forEach(a => {
  a.href = DOWNLOADS[a.dataset.dl];
  a.target = '_blank';
  a.rel = 'noopener';
});
