import { Order, OrderItem } from "../types/order";
import { CART_KEY } from "../utils/system";

export function save(cart: Order){
    const str = JSON.stringify(cart)
    localStorage.setItem(CART_KEY , str)
}

export function get() : Order {
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}';
    const obj = JSON.parse(str) as Order;
    const cart = new Order();
    obj.items.forEach(x => {
        cart.items.push(new OrderItem(x.productId, x.quantity, x.name, x.price, x.imgUrl))
    })
    console.log(cart);
    return cart;
}