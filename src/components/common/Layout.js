import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PATHS } from "../../constants";
import Header from "./Header";

export default function Layout() {
    const { pathname } = useLocation();
    const noNav = (pathname === PATHS.RESUME);

    return (
        <Fragment>
            {
                noNav ?
                    null :
                    <Header />
            }
            <Outlet />
        </Fragment>
    )
}