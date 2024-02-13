import React from "react";
import { NavLink } from "react-router-dom";

const Blog = (props) => {

    let path = "/blog/" + props.id;

    return(
        <div>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    );
}


export default Blog;
