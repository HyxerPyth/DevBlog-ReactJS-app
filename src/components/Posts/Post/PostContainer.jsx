import React from "react";
import Post from "./Post";

const PostContainer = (props) => {

    return (
        <Post postId={props.postId} header={props.header} postMessage={props.postMessage}/>
    );
}

export default PostContainer;
