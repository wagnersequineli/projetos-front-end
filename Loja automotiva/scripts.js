let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.item .list')
let indicator = document.querySelector('incidator')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

item - 0
item - 1
item - 2

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
}


prevButton.onclick = () => {
    console.log('Botão prev');
}
