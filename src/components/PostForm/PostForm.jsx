import React, { useState } from "react";
import style from "./PostForm.module.css"
import { NavLink } from "react-router-dom";




const PostForm = (props) => {

    let [ShowInstructions, setShowInstructions] = useState(false);

    let newPostElement = React.createRef(); 

    let onAddPost = () => {
        props.addPost();
    }

    let updatePostArea = () => {
        let text = newPostElement.current.value;
        props.updatePostArea(text);
    }

    console.log(props.state.updatePostArea);

    let onClickInstructions = () => {
        setShowInstructions(true);
    }

    let instructionContainer = {
        text: ["Just start typing your post's text in here. To highligh any code use // before and after // your code. When you are done with your post just click 'Post' button."]
    }

    return (
        <div className={style.content}>
            <div>
                <textarea className={style.textArea} onChange={ updatePostArea } onClick={ onClickInstructions } value={ props.state.updatePostArea } ref={ newPostElement } placeholder="Type here..." >
                </textarea>
                <div>
                    {ShowInstructions && (
                        <div>
                            <p className={style.instructions}> {instructionContainer.text} </p>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <NavLink to="/selectoption">
                    <button className={style.button} onClick={onAddPost} > Post </button>
                </NavLink>
            </div>
        </div>
    )
}


export default PostForm;