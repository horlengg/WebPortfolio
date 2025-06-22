import { Storage } from "./localstorage.js";

enum ThemeMode {
    DARK = "dark_mode",
    LIGHT = "light_mode",
    DEVICE = "device_mode"
}

export function useTheme(){

    let _elementBindClassTheme:HTMLElement;
    let toggleThemeCounter = 0;
    let direction = 1; // 1 for up, -1 for down
    const isClientUsingLightMode = () => Storage.getTheme() == ThemeMode.LIGHT

    const setThemeCounterBaseThemeMode = (_theme?:ThemeMode)=>{
        let theme = _theme ?? Storage.getTheme();
        if(theme == null){
            const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
            theme = prefersDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT;
        }
        if(theme == ThemeMode.DARK) toggleThemeCounter = 0;
        else if(theme == ThemeMode.LIGHT) toggleThemeCounter = 1;
        else toggleThemeCounter = 2;
        if(toggleThemeCounter == 2) direction = -1;
    }

    const toggleTheme = () => {
        // Change direction at bounds
        toggleThemeCounter += direction;
        if (toggleThemeCounter === 2 || toggleThemeCounter === 0) {
            direction *= -1;
        }
        
        checkTheme();
    };
    const setDarkTheme = ()=> {
        Storage.setTheme(ThemeMode.DARK)
        document.body.setAttribute("class",'dark')
        _elementBindClassTheme.classList.remove(ThemeMode.LIGHT,ThemeMode.DEVICE);
        _elementBindClassTheme.classList.add(ThemeMode.DARK);
    }
    const setLightTheme = ()=> {
        Storage.setTheme(ThemeMode.LIGHT)
        document.body.setAttribute("class",'')
        _elementBindClassTheme.classList.remove(ThemeMode.DARK,ThemeMode.DEVICE);
        _elementBindClassTheme.classList.add(ThemeMode.LIGHT);
    }
    const setDeviceTheme = ()=> {
        Storage.setTheme(ThemeMode.DEVICE)
        const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute("class",prefersDarkMode ? 'dark' : '')
        _elementBindClassTheme.classList.remove(ThemeMode.DARK,ThemeMode.LIGHT);
        _elementBindClassTheme.classList.add(ThemeMode.DEVICE);
    }
    const checkTheme = ()=>{
        if(toggleThemeCounter == 0) setDarkTheme()
        else if(toggleThemeCounter == 1) setLightTheme();
        else setDeviceTheme();
    }

    const init = (elementBindClassTheme:HTMLElement)=>{
        _elementBindClassTheme = elementBindClassTheme;
        
        setThemeCounterBaseThemeMode();
        checkTheme()

        const buttonChangeTheme = document.getElementById("btn-change-them")
        buttonChangeTheme?.addEventListener("click",toggleTheme)

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', (_) => {
            if(toggleThemeCounter != 2) return;
            setDeviceTheme();
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