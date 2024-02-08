import React from "react";
import Blog from "./Blog";


const BlogContainer = (props) => {

    return <Blog blogId={props.blogId} title={props.title}/>;
}

export default BlogContainer;