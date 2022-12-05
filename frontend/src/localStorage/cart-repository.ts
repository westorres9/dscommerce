import { Order } from "../types/order";
import { CART_KEY } from "../utils/system";

export function save(cart: Order){
    const str = JSON.stringify(cart)
    localStorage.setItem(CART_KEY , str)
}

export function get() : Order {
    const str = localStorage.getItem(CART_KEY) || '{"items"=[]}';
    return JSON.parse(str);
}