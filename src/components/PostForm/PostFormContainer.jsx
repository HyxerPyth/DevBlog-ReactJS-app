import React from "react";
import { updatePostAreaActionCreator } from "../../redux/posts-reducer";
import PostForm from "./PostForm";



const PostFormContainer = (props) => {


    let updatePostArea = (text) => {
        let action = (updatePostAreaActionCreator(text))
        props.store.dispatch(action)
    }

    return <PostForm updatePostArea={updatePostArea} state={props.store.getState().content}/>
}


export default PostFormContainer;