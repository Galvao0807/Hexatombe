document.addEventListener('DOMContentLoaded', ()=>{
  if(window.anime) anime({targets:'#title',scale:[0.96,1.02],duration:1400,direction:'alternate',loop:true,easing:'easeInOutSine'});

  const container=document.querySelector('.blood-drops');
  function spawnDrop(){const d=document.createElement('div');d.className='drop';d.style.left=Math.random()*100+'%';d.style.width=30+Math.random()*40+'px';d.style.height=60+Math.random()*80+'px';d.style.animationDuration=(3+Math.random()*4)+'s';container.appendChild(d);setTimeout(()=>d.remove(),8000);}setInterval(spawnDrop,600);

  // background music
  const audio=new Audio('assets/audio/ambience.mp3');audio.loop=true;audio.volume=0.3;audio.play().catch(()=>{});
});
