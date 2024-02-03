import React from "react";
import { updatePostAreaActionCreator, addPostActionCreator } from "../../redux/posts-reducer";
import PostForm from "./PostForm";



const PostFormContainer = (props) => {

    let AddPost = () => {
        let clearArea = updatePostAreaActionCreator("");
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(clearArea);
    }

    let updatePostArea = (text) => {
        let action = (updatePostAreaActionCreator(text))
        props.store.dispatch(action)
    }

    console.log(props.store.updatePostArea);

    return <PostForm updatePostArea={updatePostArea} addPost={AddPost} state={props.store.getState().content}/>
}


export default PostFormContainer;