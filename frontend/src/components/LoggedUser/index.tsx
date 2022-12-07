import * as authService from '../../services/auth-service';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ContextToken} from "../../utils/context-token";

export default function LoggedUser() {

    const navigate = useNavigate();

    const {contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
        navigate("/catalog");
    }

    return (

        contextTokenPayload && authService.isAuthenticated()
        ?
            (
                <div className="dsc-logged-user">
                    <p>{contextTokenPayload.user_name}</p>
                    <span onClick={handleLogoutClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    Entrar
                </Link>
            )

    );
}