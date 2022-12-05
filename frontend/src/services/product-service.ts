import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";


export function findPageRequest(page: number, name: string, size=12, sort = 'name') {
    const config: AxiosRequestConfig = {
        method: 'GET',
        baseURL: BASE_URL,
        url: '/products',
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort
        }
    }

    return axios(config)
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`)
}
 
