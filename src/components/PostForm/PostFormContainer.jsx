import React from "react";
import { updatePostAreaActionCreator, updateTempPostTextActionCreator } from "../../redux/posts-reducer";
import PostForm from "./PostForm";



const PostFormContainer = (props) => {


    let updatePostArea = (text) => {
        let action = (updatePostAreaActionCreator(text))
        props.store.dispatch(action)
    }

    let updateTempPostText = (text) => {
        let action = (updateTempPostTextActionCreator(text))
        props.store.dispatch(action)
    }

    return <PostForm updatePostArea={updatePostArea} updateTempPostText={updateTempPostText} state={props.store.getState().content}/>
}


export default PostFormContainer;