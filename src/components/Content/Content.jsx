import React from "react";
import style from "./Content.module.css"

const Content = () => {
    return (
        <div className={style.content}>
            <div>
                <textarea className={style.textArea}>
                  Type here...
                </textarea>
            </div>
            <div>
              <button className={style.button}> Post </button>
            </div>
        </div>
    );
    debugger;
}


export default Content;