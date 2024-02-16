import React from "react";
import PostContainer from "./Post/PostContainer";
import { useParams } from "react-router-dom";


const Posts = (props) => {

    console.log(props.state);

    let blogID = useParams();

    let postData = props.state.blogData[blogID.id - 1].posts;

    // postData.forEach(post => {console.log(post.blogID)});

    let postElement = postData.map(post => <PostContainer key={post.id} id={post.id} header={post.header} postMessage={post.message}/>)

    return (
        <div>
            {postElement}
        </div>
    );
}

export default Posts;

