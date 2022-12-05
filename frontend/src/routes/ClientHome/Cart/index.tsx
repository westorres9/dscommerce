import './styles.css';
import computerImg from '../../../assets/img/computer.png'
import { useEffect, useState } from 'react';
import * as cartService from '../../../services/cart-service';
import { Order, OrderItem } from '../../../types/order';

const item1: OrderItem = new OrderItem(4,1,"PC Gamer",1200,"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg");
const item2: OrderItem = new OrderItem(5,2,"Rails for Dummies",100.99,"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg")

  
export default function Cart() {

    const [cart, setCart] = useState<Order>(cartService.getCart);

    return (
        <main>
      <section id="cart-container-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">

          {cart.items.map(item => (
            <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={item.imgUrl} alt={item.name} />
              <div className="dsc-cart-item-description">
                <h3>{item.name}</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>{item.quantity}</p>
                  <div className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              R$ {(item.quantity * item.price).toFixed(2)}
            </div>
          </div>
          ))}
          
          
          <div className="dsc-cart-total-container">
            <h3>R$ 15000,00</h3>
          </div>
        </div>
        <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Finalizar pedido
            </div>
            <div className="dsc-btn dsc-btn-white">
              Continuar comprando
            </div>
        </div>
      </section>
    </main>
    );
}