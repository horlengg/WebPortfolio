import {BASE_API_URL} from "../app.config"

export default function sendClientViewWebsite(){
    
    if(!BASE_API_URL) return;

    fetch(`${BASE_API_URL}/api/view`,{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            url : window.location.href
        })
    })
}