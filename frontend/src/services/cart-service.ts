import { Order } from "../types/order";
import * as cartRepository from '../localStorage/cart-repository';

export function saveCart(cart: Order) {
    cartRepository.save(cart);
}