import React from "react";
import Blog from "./Blog";
import PostContainer from "../Posts/Post/PostContainer";


const BlogContainer = (props) => {

    return (

        <div>
            <Blog blogId={props.blogId} title={props.title}/>
        </div>
    )
}

export default BlogContainer;