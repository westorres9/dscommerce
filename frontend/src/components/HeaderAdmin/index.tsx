import homeIcon from '../../assets/img/home.svg';
import stockIcon from '../../assets/img/stock.svg';
import LoggedUser from "../LoggedUser";
import {Link, NavLink} from "react-router-dom";

export default function HeaderAdmin() {
    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <Link to="/catalog">
                    <h1>DSC Admin</h1>
                </Link>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <NavLink to="/admin/home" className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
                            <div className="dsc-menu-item">
                                <img src={homeIcon} alt="Início"/>
                                <p>Início</p>
                            </div>
                        </NavLink>
                        <NavLink to="/admin/products"  className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
                            <div className="dsc-menu-item">
                                <img src={stockIcon} alt="Cadastro de produtos"/>
                                <p>Produtos</p>
                            </div>
                        </NavLink>
                    </div>
                    <LoggedUser/>
                </div>
            </nav>
        </header>
    )
}