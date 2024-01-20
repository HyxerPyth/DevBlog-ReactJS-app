import React from "react"; 
import style from "./NavBar.module.css"


const NavBar = () => {
    return (

        <div>
            <nav className={style.NavBar}> 
                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
            </nav>
        </div>

    )
}

export default NavBar;