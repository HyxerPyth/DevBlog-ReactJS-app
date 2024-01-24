import React from "react";
import style from "./Content.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={style.content}>
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
}


export default Content;