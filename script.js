const intro=document.getElementById('intro');
document.getElementById('openSurprise').addEventListener('click',()=>{intro.classList.add('hidden');window.scrollTo({top:0,behavior:'smooth'});});
const target=new Date('2026-11-23T00:00:00');
function tick(){const now=new Date();let diff=target-now;if(diff<=0){document.getElementById('countdownNote').textContent='Today is your day, Minal. Happy Birthday, baby! ♡';diff=0;}
const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
[['days',d],['hours',h],['minutes',m],['seconds',s]].forEach(([id,v])=>document.getElementById(id).textContent=String(v).padStart(2,'0'));}
tick();setInterval(tick,1000);
const audio=document.getElementById('backgroundMusic'),musicBtn=document.getElementById('musicToggle');
musicBtn.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();musicBtn.innerHTML='♫ <span>Pause our song</span>';}catch(e){musicBtn.innerHTML='♫ <span>Add our-song.mp3</span>';}}else{audio.pause();musicBtn.innerHTML='♫ <span>Play our song</span>';}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal,.section-heading,.gallery-item,.reason-card,.letter-paper').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
