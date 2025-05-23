import axios from "axios";
import {
    SERVER_URL
} from "../../constants";

const API = axios.create({
    baseURL: SERVER_URL[
        import.meta.env.VITE_ENVIRONMENT],
    timeout: 600000,
});

export default API;