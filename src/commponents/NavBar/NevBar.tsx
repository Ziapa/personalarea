import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to={"InfoPanel"}>{"Инфопанель"}</Link>
            <Link to={"Profile"}>{"Профиль"}</Link>
        </div>
    )
}