import { Order } from "../types/order";

export function save(cart: Order){
    const str = JSON.stringify(cart)
    localStorage.setItem("com.devsuperior.dscommerce/cart" , str)
}