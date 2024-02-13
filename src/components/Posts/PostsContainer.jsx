import React from "react";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let state = props.store.getState().content;

    return (
        <Posts state={state}/>
    );
}

export default PostsContainer;