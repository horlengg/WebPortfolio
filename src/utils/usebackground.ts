const BACKGROUND_COLORS = ["#F4B266","#67A9F5","#E2EFDE","#29BB19"]

export function useBackground(){

    const randomBgColor = ()=> BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)]
    const randomAnimationDelay = ()=> (Math.random() * 2).toString().slice(0,3)

    const setStyleElement = (element:HTMLElement)=>{
        element.setAttribute("class","bg-style")
        element.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`
        element.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`
        element.style.backgroundColor = randomBgColor()
        if(innerWidth > 768) element.style.animation = `__star 2s linear ${randomAnimationDelay()}s infinite`
        document.body.appendChild(element)
    }

    const init = ()=>{
        const isMobile = window.innerWidth < 768
        for (let index = 0; index < (isMobile ? 40 : 100); index++) {
            const element = document.createElement("span");
            setStyleElement(element)
            
        }
    }
    const refresh = ()=>{
        const elements =document.getElementsByClassName("bg-style")
        Array.from(elements).forEach(element => {
            element.remove();
        })
        init()
    }

    return {
        init,
        refresh
    }


}