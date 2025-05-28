let imagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco){    
    imagem.src = endereco
}
function trocarACor(cor){
    circulo.style.background = cor
}