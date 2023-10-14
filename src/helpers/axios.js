import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://adres-twojego-api.com', // Tutaj podaj adres Twojego API
});

export default instance;