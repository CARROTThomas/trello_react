import axios from "axios";
import {GlobalConstant} from "../Common/global-constant.ts";


const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        // Ajouter des en-têtes à la requête
        config.headers['Authorization'] = `Bearer ${GlobalConstant.token}`;
        // Vous pouvez également ajouter d'autres en-têtes ici si nécessaire
        return config;
    },
    (error) => {
        // Gérer les erreurs de requête
        return Promise.reject(error);
    }
);


export default axiosInstance;