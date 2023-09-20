const listaProjetos = [
    {
        id: 0,
        titulo: 'Projeto restaurante',
        descricao: 'Simulação de site de venda de lanches, com sistema de carrinho e manipulação do HTML pelo JavaScript.',
        ancora: './assets/projetos/projetoDelivery/index.html',
        imagem: './assets/projetos/projetoDelivery/home.png'
    },
    {
        id: 1,
        titulo: 'Mario Jump',
        descricao: 'Mini game do Mario no estilo "T-Rex Running" da Google. Com contagem de pontuação e marcação de records.',
        ancora: './assets/projetos/mario-rum/login.html',
        imagem: './assets/projetos/mario-rum/print.png'
    },
    {
        id: 2,
        titulo: 'Simulação Twitter',
        descricao: 'Projeto com intuito de criar uma versão simplificada do twitter com sistema de postagem.',
        ancora: './assets/projetos/projetoPassarinho/html/index.html',
        imagem: './assets/projetos/projetoPassarinho/indexIMG.png'
    },
    {
        id: 3,
        titulo: 'Jogo Da Velha',
        descricao: 'Jogo da velha funcional feito com HTML, CSS e JavaScript',
        ancora: './assets/projetos/jogoDaVelha/html/jogo.html',
        imagem: './assets/projetos/jogoDaVelha/jogoDaVelhaIMG.png'
    }
];

let campoProjetos = document.querySelector(".projetos");

function construirLayoutProjetos(adcProjeto) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const aside = document.createElement("aside");
    const a = document.createElement("a");

    campoProjetos.appendChild(div);
    div.classList.add("projeto");
    div.appendChild(h1);
    h1.innerText = adcProjeto.titulo;

    div.appendChild(aside);
    aside.classList.add("projeto-conteudo");
    aside.appendChild(figure);
    figure.appendChild(img);
    img.src = adcProjeto.imagem;
    img.alt = adcProjeto.titulo;

    aside.appendChild(span);
    span.appendChild(p);
    p.innerText = adcProjeto.descricao;

    div.appendChild(a);
    a.innerText = "abrir projeto";
    a.href = adcProjeto.ancora;
    a.target = "_blank";
}
for (let contador = 0; contador < listaProjetos.length; contador++) {
    let adcProjeto = listaProjetos[contador];
    construirLayoutProjetos(adcProjeto);
}