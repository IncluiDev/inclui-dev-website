export class WebClient {
    static baseURL = 'https://inclui-dev-api-production-production.up.railway.app';
    
    static async exchange(endPoint, method, body) {
        return await fetch(
            this.baseURL + endPoint, 
            {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, 
                body: body ? JSON.stringify(body) : null
            }
        );
    }

    static async exchangeWithAuth(endPoint, method, token, body) {
        return await fetch(
            this.baseURL + endPoint, 
            {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                }, 
                body: body ? JSON.stringify(body) : null
            }
        );
    }
}