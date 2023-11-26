let abre_menu =  document.getElementById('abrir-menu');
let menu =  document.getElementById('menu-mobile');

abre_menu.addEventListener('click', ()=> {
    menu.classList.add('abrir-omenu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-omenu')
})
