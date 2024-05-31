import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    }
})