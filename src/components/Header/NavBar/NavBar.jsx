import React from "react"; 
import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (

        <div className={style.navBar}>
            <div>
                <NavLink to="/home">Home</NavLink>
            </div>
            <div>
                <NavLink to="/about">About</NavLink>
            </div>
            <div>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>

    )
}

export default NavBar;