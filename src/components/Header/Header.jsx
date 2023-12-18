import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={ style.header }>
            <h2 className={ style.item } > DevBlog</h2>
            <img src="https://s0.wp.com/wp-content/themes/pub/dos/assets/images/blink-block_default.gif"></img>
        </header>
    )
}


export default Header;