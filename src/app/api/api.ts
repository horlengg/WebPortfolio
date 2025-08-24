import {BASE_API_URL} from "../app.config"


export default function sendClientViewWebsite(url: string) {
    if (!BASE_API_URL) return
  
    const endpoint = `${BASE_API_URL}/api/view`
    const payload = JSON.stringify({ url })
  
    // Use navigator.sendBeacon if available (works on tab close/unload)
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, payload)
    } else {
      // fallback to fetch for normal SPA calls
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload
      })
    }
  }