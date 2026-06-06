import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8081/lunix',
    timeout: 10000,
});