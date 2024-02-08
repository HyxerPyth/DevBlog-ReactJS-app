import React from "react";
import PostContainer from "./Post/PostContainer";


const Posts = (props) => {

    let postData = props.state.postData

    let postElement = postData.map(post => <PostContainer key={post.id} postId={post.id} header={post.header} postMessage={post.message} />)


    return (
        <div>
            {postElement}
        </div>
    );
}

export default Posts;

