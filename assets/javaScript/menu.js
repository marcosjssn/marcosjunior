let ativoDesativo= false;

const menuSection= document.querySelector(".menuSection");
const menuHamburguer= document.querySelector(".navegacaoHamburguer");

menuHamburguer.addEventListener("click", () => {

    if(ativoDesativo === true){
        document.body.style.overflow= "initial";
        ativoDesativo= false
    }else if(ativoDesativo === false){
            document.body.style.overflow= "hidden";
            ativoDesativo= true
        }
    menuSection.classList.toggle("ON")
})

function atalho(){
    document.body.style.overflow= "initial";
    menuSection.classList.remove("ON")
}