const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet() {
    let tweetTextarea = textarea.value;

    // verificaçao de campo
    if(tweetTextarea === ""){
        alert("diga-nos algo");
    }else{
        criarTweet(tweetTextarea);
    }
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();
    if(minutos < 10 ){
        minutos= `0${minutos}`
    }

    //OBJETO
    const tweet = {
        nome: "UserName1",
        foto: "../imagens/perfil.jpg",
        usuario: "@UserName1",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`
    }

        listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} = tweet
    
    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet");

    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil");

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo");

    let h2    = document.createElement("h2");
    h2.innerText = nome
   
    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`;

    let p     = document.createElement("p");
    p.innerText = texto
    
    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img);
    li.appendChild(div);
    
    feed.appendChild(li);

    textarea.value = "" //limpar campo tweet
}   