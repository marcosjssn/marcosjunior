const listaPratos = [
    {
        id: 0,
        nome: 'Combo hamburguer + batata frita 1',
        descricao: 'Hamburguer com batata frita',
        preco: 21.15,
        categoria: 'destaques',
        imagem: './assets/img/produto.png'
    },
    {
        id: 1,
        nome: 'Combo hamburguer + batata frita 2',
        descricao: 'Hamburguer com batata frita',
        preco: 21.25,
        categoria: 'destaques',
        imagem: './assets/img/produto.png'
    },
    {
        id: 2,
        nome: 'Combo hamburguer + batata frita 3',
        descricao: 'Hamburguer com batata frita',
        preco: 19.90,
        categoria: 'destaques',
        imagem: './assets/img/produto.png'
    },
    {
        id: 3,
        nome: 'Brownie de chocolate 1',
        descricao: 'O clássico brownie para quem ama um docinho de sobremesa.',
        preco: 15.90,
        categoria: 'sobremesas',
        imagem: './assets/img/sobremesa.png'
    },
    {
        id: 4,
        nome: 'Brownie de chocolate 2',
        descricao: 'O clássico brownie para quem ama um docinho de sobremesa.',
        preco: 45.90,
        categoria: 'sobremesas',
        imagem: './assets/img/sobremesa.png'
    },
    {
        id: 5,
        nome: 'Brownie de chocolate Nova Sobremesa',
        descricao: 'O clássico brownie para quem ama um docinho de sobremesa.',
        preco: 100.90,
        categoria: 'sobremesas',
        imagem: './assets/img/sobremesa.png'
    },
    {
        id: 6,
        nome: 'Bebida 1',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    },
    {
        id: 7,
        nome: 'Bebida 2',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    },
    {
        id: 8,
        nome: 'Bebida 3',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    },
    {
        id: 6,
        nome: 'Bebida 1',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    },
    {
        id: 7,
        nome: 'Bebida 2',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    },
    {
        id: 8,
        nome: 'Bebida 3',
        descricao: 'Bebida 10',
        preco: 10.90,
        categoria: 'bebidas',
        imagem: './assets/img/bebidas.jpg'
    }
];

let listaDestaque = document.querySelector(".secaoPratosDestaque__listaPratos");
let listaSobreMesas = document.querySelector(".secaoSobremesas__listaSobremesas");
let listaBebidas = document.querySelector(".secaoBebidas__listaBebidas");
let listaCarrinho = document.querySelector('.secaoCarrinho__listaItens');

const containerTotal = document.querySelector('.secaoCarrinho__total > span');

let listaNome= [];
let total = 0;

function construirLayoutPratos(ulContainer, prato, classePrato){
    let li = document.createElement("li")
    let a = document.createElement("a")
   
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    img.src = prato.imagem
    img.alt = prato.nome

    let figcaption = document.createElement("figcaption")
    figcaption.innerText = prato.nome

    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.innerText = prato.nome

    let p = document.createElement("p")
    p.innerText = prato.descricao

    let span = document.createElement("span")
    span.innerText = "R$ " + prato.preco.toFixed(2)

    li.appendChild(a)
    li.dataset.id = prato.id;

    figure.appendChild(img)
    figure.appendChild(figcaption)
    a.appendChild(figure)

    div.appendChild(h3)

    if(prato.categoria === "sobremesas"){
        div.appendChild(p)
    }

    div.appendChild(span)
    a.appendChild(div)

    li.classList.add(classePrato)
    ulContainer.appendChild(li)

    li.addEventListener('click', adicionarNoCarrinho);
}

for(let cont = 0; cont < listaPratos.length; cont++){
    let prato = listaPratos[cont]

    if(prato.categoria === "destaques"){
        construirLayoutPratos(listaDestaque,prato, "secaoPratosDestaque__itemPrato")
    }else if(prato.categoria === "sobremesas"){
        construirLayoutPratos(listaSobreMesas,prato, "secaoSobremesas__itemSobremesa")
    }else if(prato.categoria  === "bebidas"){
        construirLayoutPratos(listaBebidas,prato, "secaoBebidas__itemBebida")
    }
    
}
let novoId= 0;

function construirLayoutCarrinho(prato) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const button = document.createElement('button');

    h3.innerText = prato.nome;
    span.innerText = prato.preco.toFixed(2);
    button.innerText = 'Remover';

    div.appendChild(h3);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(button);

    
    li.classList.add('secaoCarrinho__item');
    li.id= novoId; 
    novoId= novoId+1;

    listaCarrinho.appendChild(li);

    button.addEventListener('click', removerDoCarrinho);
}


function adicionarNoCarrinho(evento) {
    const elementoClicado = evento.currentTarget; 
    const idElementoClicado = elementoClicado.dataset.id;

    const pratoSelecionado = listaPratos[idElementoClicado];

    construirLayoutCarrinho(pratoSelecionado);
    atualizarTotal();
}

function removerDoCarrinho(evento) {
    const elementoClicado = evento.currentTarget;
    const elementoPai = elementoClicado.parentElement;

    elementoPai.remove();
    atualizarTotal();
}

function atualizarTotal() {
    const listaPrecos = document.querySelectorAll('.secaoCarrinho__item > div > span');

    total = 0;
    for(let contador = 0; contador < listaPrecos.length; contador++){
        const elementoSpan = listaPrecos[contador];
        const precoNumero = Number(elementoSpan.innerText);
        total += precoNumero;
    }

    total = total.toFixed(2);
    containerTotal.innerText = total;
}

function enviarPedido() {
    window.open("https://wa.me/+5532999999999?text=");
}