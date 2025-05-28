function mudarVisual(cor) {
    const imagemTenis = document.querySelector('.imagem-tenis');
    const body = document.body;

    if (cor === 'verde') {
        imagemTenis.src = '/img/nike1.png';
        body.style.backgroundColor = '#ccee66'; 
    } else if (cor === 'rosa') {
        imagemTenis.src = '/img/nike3.png';
        body.style.backgroundColor = '#ff9eb5'; 
    } else if (cor === 'azul') {
        imagemTenis.src = '/img/nike2.png';
        body.style.backgroundColor = '#58cccd'; 
    }
}