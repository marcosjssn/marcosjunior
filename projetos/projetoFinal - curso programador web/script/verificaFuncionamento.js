let data = new Date();
// let minutos = data.getUTCMinutes();
let horas = data.getUTCHours() - 3;
let diaSemana = data.getUTCDay();

// console.log("horas: " + horas + ":" + minutos)
let text = document.getElementById("horarioAuto");

if( horas >= 18 && horas <= 24 && diaSemana != 1){
    text.classList.toggle("funcionamentoAberto");
    text.innerText= "aberto";
    }else{
        text.classList.toggle("funcionamentoFechado");
        text.innerText= "fechado";
    }