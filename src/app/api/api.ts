import {BASE_API_URL} from "../app.config"


export default function sendClientViewWebsite(url:string,isLeavingApp : boolean = false){
    
    if(!BASE_API_URL) return;
    
    if (isLeavingApp && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify({ url : `${url}:::status.leaving` })], {
          type: "application/json",
        });
        navigator.sendBeacon(`${BASE_API_URL}/api/view`, blob);
        return;
    }

    fetch(`${BASE_API_URL}/api/view`,{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            url
        }),
        keepalive: true
    })
}