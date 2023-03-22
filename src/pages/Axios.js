import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://192.168.0.108:3307/api/',
    timeout: 1000,
    headers : {'Content-Type': 'application/json'}
});

export default Axios;