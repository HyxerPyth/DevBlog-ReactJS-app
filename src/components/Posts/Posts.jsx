import React from "react";
import PostContainer from "./Post/PostContainer";


const Posts = (props) => {

    let postData = props.state.postsData;

    console.log(props.path);

    // let matching = if () => {}

    let matchBlog = props.state.blogData.filter(post => post.blogId === props.state.postsData.blogId)

    console.log(matchBlog);

    let postElement = postData.map(post => <PostContainer key={post.id} postId={post.id} header={post.header} postMessage={post.message} />)

    return (
        <div>
            {postElement}
        </div>
    );
}

export default Posts;

