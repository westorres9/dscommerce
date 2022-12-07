import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import {RoleEnum} from "../../types/auth";

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[];
}

export function PrivateRoute({ children, roles =[] }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!authService.hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />
    }
    return children;
}
