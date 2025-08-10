
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
