import homeIcon from '../../assets/img/home.svg';
import stockIcon from '../../assets/img/stock.svg';
import LoggedUser from "../LoggedUser";

export default function HeaderAdmin() {
    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={homeIcon} alt="Início"/>
                            <p>Início</p>
                        </div>
                        <div className="dsc-menu-item">
                            <img src={stockIcon} alt="Cadastro de produtos"/>
                            <p className="dsc-menu-item-active">Produtos</p>
                        </div>
                    </div>
                    <LoggedUser/>
                </div>
            </nav>
        </header>
    )
}