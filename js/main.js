
const navbar = document.getElementById('navbar');
if(navbar) window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>50));

const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if(hamburger && navMenu){
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a:not(.dropdown-toggle)').forEach(a=>{
    a.addEventListener('click',()=>{ hamburger.classList.remove('active'); navMenu.classList.remove('open'); });
  });
}

document.querySelectorAll('.dropdown').forEach(dd=>{
  const toggle = dd.querySelector('.dropdown-toggle');
  if(toggle) toggle.addEventListener('click',e=>{
    if(window.innerWidth<=768){ e.preventDefault(); dd.classList.toggle('mobile-open'); }
  });
});

// FAQ accordion - targets .faq-icon class (explicit 20x20, no broken triangles)
document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  if(q) q.addEventListener('click',()=>{
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});
