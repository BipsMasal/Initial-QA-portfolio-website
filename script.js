const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.skill-card,.project,.process-step,.quote-box').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(15px)';el.style.transition='opacity .55s ease, transform .55s ease';
  observer.observe(el);
});
