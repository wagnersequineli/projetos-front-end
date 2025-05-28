function mudarVisual(cor) {
    const imagemTenis = document.querySelector('.imagem-tenis');
    const body = document.body;

    if (cor === 'verde') {
        imagemTenis.src = '/Nike/img/nike1.png';
        body.style.backgroundColor = '#ccee66'; 
    } else if (cor === 'rosa') {
        imagemTenis.src = '/Nike/img/nike3.png';
        body.style.backgroundColor = '#ff9eb5'; 
    } else if (cor === 'azul') {
        imagemTenis.src = '/Nike/img/nike2.png';
        body.style.backgroundColor = '#58cccd'; 
    }
}