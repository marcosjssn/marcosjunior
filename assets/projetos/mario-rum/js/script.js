const mario = document.querySelector(".mario");
const tubo = document.querySelector(".pipe");
const nuvem = document.querySelector(".nuvem");
const campoPontuacao = document.querySelector(".pontuacao");
const campoRecord = document.querySelector(".record");
const menuGameOver = document.querySelector(".gameOverMenu");
const nomeJogadorMenu = document.getElementById("jogadorMenuGameOver");
const campoPontuacaoMenu = document.getElementById("pontuacaoMenu");

let gameOver = false;
let contador = 0;

let record = localStorage.getItem("recordGameMarioJump");
campoRecord.innerText = localStorage.getItem("recordGameMarioJump");

let nomeJogador = localStorage.getItem("playerMarioJump");
nomeJogadorMenu.textContent = nomeJogador;

campoPontuacaoMenu.textContent = contador;

const pulo = () => {
    mario.classList.add("pulo");

    setTimeout(() => {
        mario.classList.remove("pulo");
    }, 500);
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace("px", "");
    const posicaoNuvem = nuvem.offsetLeft;

    if (posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 160) {

        gameOver = true;

        menuGameOver.style.display = "flex"

        tubo.style.animation = "none";
        tubo.style.left = `${posicaoTubo}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = "../imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px"

        nuvem.style.animation = "none";
        nuvem.style.left = `${posicaoNuvem}px`;

        if (contador > record) {
            record = contador;
            localStorage.setItem("recordGameMarioJump", record);
            campoRecord.innerText = localStorage.getItem("recordGameMarioJump");
        }

        clearInterval(loop);


    } else {
        contador = contador + 1;
        campoPontuacao.innerText = contador;
        campoPontuacaoMenu.textContent = contador;

        if (contador == 2000) {
            tubo.style.animationDuration = "1.6s";
        } else if (contador == 4000) {
            tubo.style.animationDuration = "1.2s";
        } else if (contador == 6000) {
            tubo.style.animationDuration = "0.8s";
        }
    }

}, 10);

function voltarInicio() {
    window.location = '../login.html';
}
function recomecar() {
    window.location = '../html/index.html';
}

document.addEventListener("keydown", pulo);