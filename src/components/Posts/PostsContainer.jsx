import React from "react";
import Posts from "./Posts";
import { useSelector } from "react-redux";


const PostsContainer = (props) => {

    let state = props.store.getState().content;

    let currentPath = useSelector(state => state.router.location.pathname);

    console.log(currentPath)

    return (
        <Posts state={state}/>
    );
}

export default PostsContainer;