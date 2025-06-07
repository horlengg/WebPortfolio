import { Storage } from "./localstorage.js";

enum ThemeMode {
    DARK = "DARK",
    LIGHT = "LIGHT"
}

export function useTheme(themeModeListElement:HTMLElement){

    
    const isClientUsingLightMode = () => Storage.getTheme() == ThemeMode.LIGHT

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
        let theme = Storage.getTheme();
        if(theme == null){
            const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
            theme = prefersDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT;
        }
        checkTheme(theme)

        const buttonChangeTheme = document.getElementById("btn-change-them")
        buttonChangeTheme?.addEventListener("click",toggleTheme)

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', (e) => {
            checkTheme(e.matches ? ThemeMode.DARK : ThemeMode.LIGHT)
        });
        
    }

    return {
        init,
        isClientUsingLightMode,
        toggleTheme,
        setDarkTheme,
        setLightTheme
    }
    
}