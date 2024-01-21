import React from "react";
import style from "./MainPage.module.css"
import Content from "../Content/Content";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";


const MainPage = () => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <NavBar />
            <div>
                <textarea className={style.textArea}>
                    Hello
                </textarea>
            </div>
        </div>
    );
};

export default MainPage;

