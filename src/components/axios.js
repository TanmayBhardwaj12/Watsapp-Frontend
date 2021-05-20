import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:9100"
});

export default instance;