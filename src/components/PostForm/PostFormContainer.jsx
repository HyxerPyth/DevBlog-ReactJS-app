import React from "react";
import { updatePostAreaActionCreator, addPostActionCreator } from "../../redux/posts-reducer";
import PostForm from "./PostForm";



const PostFormContainer = (props) => {

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updatePostArea = (text) => {
        let action = (updatePostAreaActionCreator(text))
        props.store.dispatch(action)
    }

    return <PostForm updatePostArea={updatePostArea} addPost={AddPost} state={props.store.getState().content}/>
}


export default PostFormContainer;