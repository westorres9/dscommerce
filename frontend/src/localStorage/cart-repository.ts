import { Order } from "../types/order";

export function save(cart: Order){
    const str = JSON.stringify(cart)
    localStorage.setItem("com.devsuperior.dscommerce/cart" , str)
}

export function get() : Order {
    const str = localStorage.getItem("com.devsuperior.dscommerce/cart") || '{"items"=[]}';
    return JSON.parse(str);
}