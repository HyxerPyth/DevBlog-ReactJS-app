import React from "react";
import Blog from "./Blog";


const BlogContainer = (props) => {

    console.log(props);

    return <Blog id={props.id} title={props.title}/>;
}

export default BlogContainer;