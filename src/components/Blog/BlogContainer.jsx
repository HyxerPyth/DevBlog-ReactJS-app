import React from "react";
import Blog from "./Blog";


const BlogContainer = (props) => {

    return (

        <div>
            <Blog id={props.id} title={props.title} posts={props.posts}/>
        </div>
    )
}

export default BlogContainer;