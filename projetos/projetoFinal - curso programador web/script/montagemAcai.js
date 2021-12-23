    var sabor= "";
    function saborAcai(){
        document.getElementById("imgForm").src="../imagens/copoAcai.jpg"
        sabor= "CREME DE AÇAI: "
    }
    function saborAcaiCupuacu(){
        document.getElementById("imgForm").src="../imagens/copoAcaiCupuacu.jpg"
        sabor= "AÇAI COM CUPUAÇU: "
    }
    function saborCupuacu(){
        document.getElementById("imgForm").src="../imagens/copoCupuacu.jpg"
        sabor= "CREME DE CUPUAÇU: "
    }
    // ----------------------------------- || ---------------------------------
    function valor1(){
        document.getElementById("valorMontagem").innerText= "R$5,00"
    }
    function valor2(){
        document.getElementById("valorMontagem").innerText= "R$7,00"
    }
    function valor3(){
        document.getElementById("valorMontagem").innerText= "R$9,00"
    }
    function valor4(){
        document.getElementById("valorMontagem").innerText= "R$10,00"
    }
    // ----------------------------------- || ---------------------------------

    function addMontagem() {
        // var nomeItem= document.getElementById("sabor1").innerText;
        var valorItem= document.getElementById("valorMontagem").innerText;
        var lista= document.getElementById("listaCarrinho").innerHTML;
    
        lista = lista +"<li>"+sabor+valorItem+"</li>";
        document.getElementById("listaCarrinho").innerHTML = lista;
      }