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
            // const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
            theme = ThemeMode.DEVICE;
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
        loadHighlightTheme(true);
    }
    const setLightTheme = ()=> {
        Storage.setTheme(ThemeMode.LIGHT)
        document.body.setAttribute("class",'')
        _elementBindClassTheme.classList.remove(ThemeMode.DARK,ThemeMode.DEVICE);
        _elementBindClassTheme.classList.add(ThemeMode.LIGHT);
        loadHighlightTheme(false);
    }
    const setDeviceTheme = ()=> {
        Storage.setTheme(ThemeMode.DEVICE)
        const prefersDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute("class",prefersDarkMode ? 'dark' : '')
        _elementBindClassTheme.classList.remove(ThemeMode.DARK,ThemeMode.LIGHT);
        _elementBindClassTheme.classList.add(ThemeMode.DEVICE);
        loadHighlightTheme(prefersDarkMode);

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

function loadHighlightTheme(isDark: boolean) {
    const href = isDark
      ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-dark.min.css'
      : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-light.min.css';
  
    const link = document.getElementById('hljs-theme') as HTMLLinkElement ?? document.createElement('link');
    link.id = 'hljs-theme';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }