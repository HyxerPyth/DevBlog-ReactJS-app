import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import s from "./MainPage.module.css"




const MainPage = () => {
    return (
        <div className={s.appWrapper}>
            <Content />
            <Header />
        </div>
    );
}

export default MainPage;