import './styles.css';
import cartIcon from "../../assets/img/cart.svg";
import {Link} from "react-router-dom";

export default function CartIcon() {
    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            <div className="dsc-cart-count">22</div>
        </>
    );
}