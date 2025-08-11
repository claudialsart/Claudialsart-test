
// Mobile menu toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if(burger){
  burger.addEventListener('click', ()=>{
    if(menu.style.display === 'flex'){ menu.style.display = 'none'; }
    else { menu.style.display = 'flex'; menu.style.flexDirection='column'; }
  });
}

// Mark active nav item
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a=>{
  if(a.getAttribute('href') === path) a.classList.add('active');
});
// === Home style-panels slideshow ===
(function(){
  const panels = document.querySelectorAll('.style-panel .slides');
  if(!panels.length) return;

  panels.forEach(slidesEl => {
    const urls = (slidesEl.dataset.images || '')
      .split(',').map(s => s.trim()).filter(Boolean);
    const [a,b] = slidesEl.querySelectorAll('.slide');
    if(!a || !b || !urls.length) return;

    const setBg = (el,url) => { el.style.backgroundImage = `url('${url}')`; };
    let idx = 0, showA = true;

    setBg(a, urls[idx]);              // first image
    a.classList.add('visible');
    setBg(b, urls[(idx+1)%urls.length]); // preload second

    setInterval(() => {
      idx = (idx + 1) % urls.length;
      const next = urls[idx];
      if (showA){
        setBg(b, next); b.classList.add('visible'); a.classList.remove('visible');
      } else {
        setBg(a, next); a.classList.add('visible'); b.classList.remove('visible');
      }
      showA = !showA;
    }, 4000); // change every 4s
  });
})();