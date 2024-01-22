import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import s from "./MainPage.module.css"
import NavBar from "../NavBar/NavBar";




const MainPage = () => {
    return (
        <div className={s.appWrapper}>
            <Content />
            <Header />
            <NavBar />
        </div>
    );
}

export default MainPage;