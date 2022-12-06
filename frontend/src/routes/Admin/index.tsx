import HeaderAdmin from "../../components/HeaderAdmin";
import {Outlet} from "react-router-dom";

export default function Admin() {
    return (
        <>
            <HeaderAdmin/>
            <Outlet/>
        </>
    )
}