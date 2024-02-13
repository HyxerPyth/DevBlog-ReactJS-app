import React from "react";
import { NavLink } from "react-router-dom";
import style from './Blog.module.css'

const Blog = (props) => {

    let path = "/blog/" + props.id;

    return(
        <div className={style.button}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    );
}


export default Blog;
