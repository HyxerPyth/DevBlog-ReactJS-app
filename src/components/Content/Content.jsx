import React from "react";
import style from "./Content.module.css"
import PostSelection from "./MyPosts/PostSelection/PostSeceltion";
import { updatePostAreaActionCreator } from "../../redux/state"
import { NavLink } from "react-router-dom";



const Content = (props) => {



    let newPostElement = React.createRef(); 

    let AddPost = () => {
        let text = newPostElement.current.value;
        <NavLink to="/postselection" text={text}>Post</NavLink>
    }

    let updatePostArea = () => {
        let text = newPostElement.current.value;
        let action = (updatePostAreaActionCreator(text))
        props.dispatch(action)
    }

    return (
        <div className={style.content}>
            <div>
                <textarea className={style.textArea} onChange={ updatePostArea } >
                  Type here...
                </textarea>
            </div>
            <div>
              <button className={style.button} onClick={ AddPost } > Post </button>
            </div>
        </div>
    )
}


export default Content;