let ativar= document.getElementById("ativar");
let popUp= document.getElementById("popUp");
let fechar= document.getElementById("fechar");
let classe= popUp.className;

ativar.onclick= function abrirZoom(){

    if(classe === "popUpOculto"){
        popUp.classList.toggle("popUpAtivo")
        }else if(classe === "popUpAtivo"){
            popUp.classList.toggle("popUpOculto")
        }
}
fechar.onclick= function abrirZoom(){

    if(classe === "popUpOculto"){
        popUp.classList.toggle("popUpAtivo")
        }else if(classe === "popUpAtivo"){
            popUp.classList.toggle("popUpOculto")
        }
}