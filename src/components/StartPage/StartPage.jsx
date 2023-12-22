import React from "react";
import s from "./StartPage.module.css"
import { Link  } from "react-router-dom";

const StartPage = (props) => {

    return (
        <div className={s.body}>
            <div className={s.item}>
                <Link to="/mainpage">Click anywhere on the screen</Link>
            </div>
        </div>
    );
}

export default StartPage;