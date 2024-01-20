import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={ style.header }>
            <h2 className={ style.item } > DevBlog</h2>
        </header>
    )
}


export default Header;