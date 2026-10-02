// Credits intro + sound (starts on click because browsers block autoplay audio)
const $ = s => document.querySelector(s);
const snd = $('#snd'), intro = $('#intro');
let timer, fade;

function fadeOut() {
  clearInterval(fade);
  fade = setInterval(() => {
    snd.volume = Math.max(0, snd.volume - 0.1);
    if (snd.volume <= 0) { clearInterval(fade); snd.pause(); }
  }, 50);
}
function end() {
  clearTimeout(timer);
  intro.classList.add('out');
  document.body.classList.remove('lock');
  fadeOut();
  setTimeout(() => { intro.hidden = true; }, 500);
}
function play() {
  clearInterval(fade);
  intro.hidden = false;
  intro.classList.remove('out');
  document.body.classList.add('lock');
  $('#gate').hidden = true;
  const r = $('#roll');
  r.hidden = false;
  r.classList.remove('go');
  void r.offsetWidth;
  r.classList.add('go');
  $('#skip').hidden = false;
  snd.currentTime = 0;
  snd.volume = 0.8;
  snd.play().catch(() => {});
  timer = setTimeout(end, 5000);
}
$('#enter').addEventListener('click', play);
$('#skip').addEventListener('click', end);
$('#replay').addEventListener('click', play);
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  intro.hidden = true;
  document.body.classList.remove('lock');
}

