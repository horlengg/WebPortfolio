const THEME = "theme"

export class Storage {
    
    static setTheme(theme:string){
        localStorage.setItem(THEME, theme);
    }
    static getTheme(){
        return localStorage.getItem(THEME);
    }
    
}