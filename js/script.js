
document.addEventListener('keydown' , pular);

const mario = document.querySelector('.mario');
const tubo = document.querySelector('.pipe');

function pararDePular(){
    
    mario.classList.remove('jump');
}

function pular(){
    mario.classList.add('jump');
    setTimeout( pararDePular, 500 );
}

function checkGameOver(){
 const posicaoTubo = +window.getComputedStyle(tubo ).left.replace('px','');
 const posicaoMario = +window.getComputedStyle(mario ).bottom.replace('px','')
 const tuboNaoPassou = posicaoTubo > 0;
 const tuboAlcancou = posicaoTubo<=120;
 const marioNaoPulou  = posicaoMario< 80
 if (tuboAlcancou && tuboNaoPassou && marioNaoPulou){
    gameOver(posicaoTubo, posicaoMario)
 }
}

const verificador = setInterval( checkGameOver, 10)

function gameOver(posicaoTubo, posicaoMario){
    clearInterval(verificador);
    tubo.style.animation='none'
    tubo.style.left = posicaoTubo+"px";
    mario.style.animation='none'
    mario.style.bottom = posicaoMario+"px";
    mario.src = './images/game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
}


