import {Credentials} from "../types/auth";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/system";
import QueryString from "qs";
import {AxiosRequestConfig} from "axios";
import {requestBackend} from "../utils/requests";
import * as accessTokenRepository from '../localStorage/access-token-repository';



export function loginRequest(loginData: Credentials) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    };

    const requestBody = QueryString.stringify({
        ...loginData,
        grant_type: "password",
    });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers,
    };
    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    accessTokenRepository.get();
}