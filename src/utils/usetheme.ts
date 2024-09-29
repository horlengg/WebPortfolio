import { Storage } from "./localstorage.js";

enum ThemeMode {
    DARK = "DARK",
    LIGHT = "LIGHT"
}

export function useTheme(themeModeListElement:HTMLElement){

    const isClientUsingLightMode = ()=> Storage.getTheme() === ThemeMode.LIGHT

    const toggleTheme = ()=>{
        checkTheme(isClientUsingLightMode() ? ThemeMode.DARK : ThemeMode.LIGHT)
    }
    const setDarkTheme = ()=> {
        Storage.setTheme(ThemeMode.DARK)
        document.body.setAttribute("class",'dark')
        themeModeListElement.classList.toggle("dark-mode");
    }
    const setLightTheme = ()=> {
        Storage.setTheme(ThemeMode.LIGHT)
        document.body.setAttribute("class",'')
        themeModeListElement.classList.remove("dark-mode");
    }
    const checkTheme = (theme?:string)=>{
        if(!theme) {
            const t = Storage.getTheme()
            if(t) t === ThemeMode.DARK ? setDarkTheme() : setLightTheme()
            else setDarkTheme() 
        } 
        else theme === ThemeMode.LIGHT ? setLightTheme() : setDarkTheme()
    }

    const init = ()=>{
        const buttonChangeTheme = document.getElementById("btn-change-them")
        buttonChangeTheme?.addEventListener("click",toggleTheme)
        checkTheme()
    }

    return {
        init,
        isClientUsingLightMode,
        toggleTheme,
        setDarkTheme,
        setLightTheme
    }
    
}