const ASIDE_MENU = document.querySelector(".menu-lateral")
const CLOSE_MENU =  ASIDE_MENU.querySelector('.close-menu')
const MOBILE_MENU = document.querySelector('.mobile-menu')

MOBILE_MENU.onclick = appearsMenu

document.onclick = e => {
    if(e.target.classList.contains('menu-link') || e.target.parentElement.classList.contains('menu-link')){
        removeMenu()
    }
}

CLOSE_MENU.addEventListener('click', removeMenu)

function removeMenu() {
    ASIDE_MENU.style.animation = 'none'
    ASIDE_MENU.style.animation = 'menuGoodBye .3s'
    setTimeout(() => {
        ASIDE_MENU.style.display = 'none'    
    }, 300)
}

function appearsMenu() {
    ASIDE_MENU.style.animation = 'none'
    ASIDE_MENU.style.animation = 'menuAppears .3s'
    setTimeout(() => {
        ASIDE_MENU.style.display = 'grid'   
    }, 300)
}