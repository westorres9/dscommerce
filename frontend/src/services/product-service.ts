import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import {requestBackend} from "../utils/requests";
import {Product} from "../types/Product";


export function findPageRequest(page: number, name: string, size=12, sort = 'name') {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/products',
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort
        }
    }

    return requestBackend(config);
}

export function findById(id: number) {
    return requestBackend({ url:`/products/${id}` })
}
 
export function deleteById(id: number) {
    const config: AxiosRequestConfig = {
        method: 'DELETE',
        url: `/products/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function updateRequest(product: Product) {
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url: `/products/${product.id}`,
        withCredentials: true,
        data: product
    }

    return requestBackend(config);
}

export function insertRequest(product: Product) {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url: `/products`,
        withCredentials: true,
        data: product
    }
    return requestBackend(config);
}