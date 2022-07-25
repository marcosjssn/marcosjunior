let jogador= ["X","O"];
let indexJogador= 0;
let gameover= false;
let tabuleiro = document.getElementById('idTabuleiro');
let casa;
var posicao= "";
var turno= "";
var indexTabuleiro= [
                        "-",
                        "-",
                        "-",
                        "-",
                        "-",
                        "-",
                        "-",
                        "-",
                        "-",
                    ]

tabuleiro.addEventListener('click', function(e) {
    posicao=(e.target.id);
    turno= jogador[indexJogador];
    casa= document.getElementById(posicao);

    if(casa.innerText === "-" && casa != idTabuleiro && gameover === false){
        indexJogador = ( indexJogador === 0 ? 1:0 );
        casa.innerText=turno;
        indexTabuleiro[posicao]= turno; 
        verificaGanhador();
    }
});

function verificaGanhador(){
    if(indexTabuleiro[0] !== "-" && indexTabuleiro[0] === indexTabuleiro[1] && indexTabuleiro[1] === indexTabuleiro[2]){
        gameover= true;
        alert("o jogador " + turno + " ganhou!");
        }else if(indexTabuleiro[3] !== "-" && indexTabuleiro[3] === indexTabuleiro[4] && indexTabuleiro[4] === indexTabuleiro[5]){
            gameover= true;
            alert("o jogador " + turno + " ganhou!");
            }else if(indexTabuleiro[6] !== "-" && indexTabuleiro[6] === indexTabuleiro[7] && indexTabuleiro[7] === indexTabuleiro[8]){
                gameover= true;
                alert("o jogador " + turno + " ganhou!");
                }else if(indexTabuleiro[0] !== "-" && indexTabuleiro[0] === indexTabuleiro[3] && indexTabuleiro[3] === indexTabuleiro[6]){
                    gameover= true;
                    alert("o jogador " + turno + " ganhou!");
                    }else if(indexTabuleiro[1] !== "-" && indexTabuleiro[1] === indexTabuleiro[4] && indexTabuleiro[4] === indexTabuleiro[7]){
                        gameover= true;
                        alert("o jogador " + turno + " ganhou!");
                        }else if(indexTabuleiro[2] !== "-" && indexTabuleiro[2] === indexTabuleiro[5] && indexTabuleiro[5] === indexTabuleiro[8]){
                            gameover= true;
                            alert("o jogador " + turno + " ganhou!");
                            }else if(indexTabuleiro[0] !== "-" && indexTabuleiro[0] === indexTabuleiro[4] && indexTabuleiro[4] === indexTabuleiro[8]){
                                gameover= true;
                                alert("o jogador " + turno + " ganhou!");
                                }else if(indexTabuleiro[2] !== "-" && indexTabuleiro[2] === indexTabuleiro[4] && indexTabuleiro[4] === indexTabuleiro[6]){
                                    gameover= true;
                                    alert("o jogador " + turno + " ganhou!");
                                }
    }
// let sequencia: [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ],