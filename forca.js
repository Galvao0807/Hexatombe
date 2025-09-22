const words=['MORTE','HEXAGON','TUMULO','SANGUE','CRIPTA','SOMBRA','LAMENTO','FANTASMA'];
let chosen='',errors=0,correct=[];const maxErrors=6;
const audioCorrect=new Audio('assets/audio/correct.mp3');const audioWrong=new Audio('assets/audio/wrong.mp3');const audioWin=new Audio('assets/audio/win.mp3');const audioLose=new Audio('assets/audio/lose.mp3');
function pick(){chosen=words[Math.floor(Math.random()*words.length)];correct=Array(chosen.length).fill(false);errors=0;document.getElementById('errors').textContent=errors;document.getElementById('message').textContent='';renderWord();renderLetters();}
function renderWord(){document.getElementById('wordDisplay').textContent=chosen.split('').map((c,i)=>correct[i]?c:'_').join(' ');}
function renderLetters(){const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');const c=document.getElementById('letters');c.innerHTML='';letters.forEach(l=>{const b=document.createElement('button');b.className='btn btn-sm btn-outline-light me-1 mb-1';b.textContent=l;b.onclick=()=>tryLetter(l,b);c.appendChild(b);});}
function tryLetter(l,b){b.disabled=true;let found=false;for(let i=0;i<chosen.length;i++){if(chosen[i]===l){correct[i]=true;found=true;}}if(found){audioCorrect.play();}else{errors++;document.getElementById('errors').textContent=errors;audioWrong.play();}renderWord();checkState();}
function checkState(){if(correct.every(Boolean)){document.getElementById('message').textContent='Você venceu!';audioWin.play();disableLetters();}else if(errors>=maxErrors){document.getElementById('message').textContent='Game Over! Palavra: '+chosen;audioLose.play();revealAll();disableLetters();}}
function disableLetters(){Array.from(document.querySelectorAll('#letters button')).forEach(b=>b.disabled=true);}
function revealAll(){correct=Array(chosen.length).fill(true);renderWord();}
document.getElementById('resetBtn').addEventListener('click',()=>pick());window.addEventListener('load',pick);
