import './styles.css';
import computerImg from '../../../assets/img/computer.png'

export default function Cart() {
    return (
        <main>
      <section id="cart-container-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={computerImg} alt="Computador" />
              <div className="dsc-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              R$ 5000,00
            </div>
          </div>
          <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
              <img src={computerImg}  alt="Computador" />
              <div className="dsc-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="dsc-cart-item-quantity-container">
                  <div className="dsc-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="dsc-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="dsc-cart-item-right">
              R$ 5000,00
            </div>
          </div>
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