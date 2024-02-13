import React from "react";
import PostContainer from "./Post/PostContainer";
import { useParams } from "react-router-dom";


const Posts = (props) => {

    let postData = props.state.postData;

    let blogData = useParams();

    let matchBlog = blogData.filter(blog => blog.id === postData.blogID);

    console.log(matchBlog);

    postData.forEach(post => {console.log(post.blogID)});

    let postElement = postData.map(post => <PostContainer key={post.id} id={post.id} header={post.header} postMessage={post.message} />)

    return (
        <div>
            {postElement}
        </div>
    );
}

export default Posts;

