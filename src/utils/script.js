import {useBackground} from "./usebackground.js"
import { useTheme } from "./usetheme.js";
import { useTextAnimation } from "./usetextanimation.js";

const bg = useBackground();
const theme = useTheme()
const textAnimation = useTextAnimation();

const buttonTogleMenu  = document.getElementById("btn-toogle-menu")
const menuElement = document.getElementById("app-menu")
const menuOverlayElement = document.getElementById("menu-overlay")

// initialize the background, theme, and text animation hooks
bg.init()
theme.init()
textAnimation.init()


const toogleMenu = ()=>{
    if(menuElement.classList.contains("mobile-active")) menuElement.classList.remove("mobile-active")
    else menuElement.classList.add("mobile-active")
}

const checkMenu = ()=>{
    const pathName = location.pathname
    if(pathName === '/') {
        const el  = Array.from(menuItemElements).find(e => e.querySelector("a")?.href.includes('/index.html'))
        el?.classList.add("is-active")
        return ;
    }
    Array.from(menuItemElements).forEach(element => {
        if(element.querySelector("a").href.includes(pathName)){
            element.classList.add("is-active")
        }
    });
}

const menuItemElements = document.getElementsByClassName("app-menu_item")


window.addEventListener("resize",bg.refresh)

buttonTogleMenu?.addEventListener("click",toogleMenu)
menuOverlayElement.addEventListener("click",toogleMenu)
checkMenu()

