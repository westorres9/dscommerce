import {Credentials} from "../types/auth";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/system";

export function loginRequest(loginData: Credentials) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }
    console.log(headers);
}