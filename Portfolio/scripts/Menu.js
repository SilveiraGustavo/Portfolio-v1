
let btnMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-omenu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-omenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-omenu')
})