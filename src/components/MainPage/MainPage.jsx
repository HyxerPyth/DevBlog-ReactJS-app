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
                  Type here...
                </textarea>
            </div>
            <div className={style.button}>
              <button> Add post </button>
            </div>
        </div>
    );
};

export default MainPage;

