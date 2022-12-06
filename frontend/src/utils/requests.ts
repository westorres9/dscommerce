import axios, {AxiosRequestConfig} from "axios";
import {BASE_URL} from "./system";
import * as authService from '../services/auth-service';

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ? {
        ...config.headers,
            Authorization: "Bearer " + authService.getAccessToken()
        }
        : config.headers;


    return axios({...config, baseURL: BASE_URL, headers })
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
// DO SOMETHING BEFORE REQUEST IS SENT
        return config;
    },
    function (error) {
// DO SOMETHING WITH REQUEST ERROR
        return Promise.reject(error);
    }
)

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
// DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
        return response;
    },
    function (error) {
// DO SOMETHING WITH RESPONSE ERROR
        if(error.response.status === 401) {
            console.log("DEU 401")
        }
        if(error.response.status === 403) {
            console.log("DEU 403")
        }
        return Promise.reject(error);
    }
);