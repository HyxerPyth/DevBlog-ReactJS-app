import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div>
            <header className={style.header}>
                <h2 className={style.headerName}>
                     DevBlog
                </h2>
            </header>
        </div>
    )   
}


export default Header;