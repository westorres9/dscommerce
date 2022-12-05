import { Order, OrderItem } from "../types/order";
import * as cartRepository from '../localStorage/cart-repository';
import { Product } from "../types/Product";

export function saveCart(cart: Order) {
    cartRepository.save(cart);
}

export function getCart() : Order {
    return cartRepository.get();
}

export function addProduct(product: Product) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        const newItem = new OrderItem(product.id, 1,product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}