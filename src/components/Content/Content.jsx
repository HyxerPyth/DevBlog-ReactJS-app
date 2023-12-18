import React from "react";
import style from "./Content.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={style.content}>
            <MyPosts />
        </div>
    );
}


export default Content;