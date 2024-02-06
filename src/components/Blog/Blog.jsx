import React from "react";
import { NavLink } from "react-router-dom";

const Blog = (props) => {

    let path = "/blog" + props.state.blogData.id;

    return(
        <div>
            <button>
                Hello
            </button>
            Hello
            <NavLink to={path}>{props.state.blogData.posts.message}</NavLink>
        </div>
    );
}


export default Blog;
