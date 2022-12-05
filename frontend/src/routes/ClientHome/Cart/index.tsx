import './styles.css';
import computerImg from '../../../assets/img/computer.png'
import { useEffect, useState } from 'react';
import * as cartService from '../../../services/cart-service';
import { Order, OrderItem } from '../../../types/order';
import { Link } from 'react-router-dom';

export default function Cart() {

    const [cart, setCart] = useState<Order>(cartService.getCart());

    function handleClearClick() {
      cartService.clearCart();
      setCart(cartService.getCart())
    }

    function handleIncreaseItem(productId: number) {
      cartService.increaseItem(productId);
      setCart(cartService.getCart())
    }

    return (
        <main>
      <section id="cart-container-section" className="dsc-container">
        {
          cart.items.length === 0
          ? (
            <div>
              <h2 className="dsc-section-title dsc-mb20">Seu carrinho está vazio</h2>
            </div>
          )
          :
          <div className="dsc-card dsc-mb20">
          {
          cart.items.map(item => (
            <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={item.imgUrl} alt={item.name} />
              <div className="dsc-cart-item-description">
                <h3>{item.name}</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>{item.quantity}</p>
                  <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              R$ {item.subTotal.toFixed(2)}
            </div>
          </div>
          ))}
          
          
          <div className="dsc-cart-total-container">
            <h3>R$ {cart.total.toFixed(2)}</h3>
          </div>
        </div>
        }
        
        <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Finalizar pedido
            </div>
            <Link to="/catalog">
            <div className="dsc-btn dsc-btn-white">
              Continuar comprando
            </div>
            </Link>
            <div onClick={handleClearClick} className="dsc-btn dsc-btn-white">
              Limpar Carrinho
            </div>
        </div>
      </section>
    </main>
    );
}