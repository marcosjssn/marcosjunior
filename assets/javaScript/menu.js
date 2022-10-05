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
    console.log(menuSection.classList.value);
    if(menuSection.classList.value === "menuSection ON"){
        document.body.style.overflow= "hidden";

    }else{
        document.body.style.overflow= "initial";
    }
})

function atalho(){
    document.body.style.overflow= "initial";
    menuSection.classList.remove("ON");
}
