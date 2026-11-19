const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced && 'IntersectionObserver' in window){
 document.documentElement.classList.add('motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
document.querySelectorAll('nav a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.removeAttribute('aria-current'));link.setAttribute('aria-current','location');}));
document.querySelector('#copy-email').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText('mballeng91@gmail.com');const t=document.querySelector('.toast');t.textContent='Email copied to clipboard';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400);}
 catch{window.location.href='mailto:mballeng91@gmail.com';}
});
const motionButton=document.querySelector('#motion-toggle');
let paused=reduced;
motionButton.textContent=paused?'Motion off':'Pause motion';
motionButton.setAttribute('aria-pressed',String(paused));
if(paused)document.documentElement.classList.add('paused');
motionButton.addEventListener('click',()=>{paused=!paused;document.documentElement.classList.toggle('paused',paused);motionButton.textContent=paused?'Resume motion':'Pause motion';motionButton.setAttribute('aria-pressed',String(paused));});
const signal=document.querySelector('.signal');
signal.addEventListener('pointermove',e=>{if(reduced||paused||e.pointerType==='touch')return;const r=signal.getBoundingClientRect();signal.style.setProperty('--rx',`${-(e.clientY-r.top-r.height/2)/r.height*8}deg`);signal.style.setProperty('--ry',`${(e.clientX-r.left-r.width/2)/r.width*8}deg`);});
signal.addEventListener('pointerleave',()=>{signal.style.setProperty('--rx','0deg');signal.style.setProperty('--ry','0deg');});
