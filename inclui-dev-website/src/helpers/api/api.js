const baseURL = 'https://inclui-dev-api-production-production.up.railway.app'

export default baseURL 

export class WebClient {
    static baseURL = 'https://inclui-dev-api-production-production.up.railway.app'
    
    static async exchange(method, body) {
        return await fetch(
            baseURL,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: `${body || ""}`
            }
        )
    }

    static async exchangeWithAuth(method, token, body) {
        return await fetch(
            baseURL,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || ""}`
                },
                body: `${body || ""}`
            }
        )
    }
}