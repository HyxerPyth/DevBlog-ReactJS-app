import React from "react";
import Post from "./Post";

const PostContainer = (props) => {

    return (
        <Post blogID={props.blogID} postId={props.postId} header={props.header} postMessage={props.postMessage} />
    );
}

export default PostContainer;
