import React from "react";
import { NavLink } from "react-router-dom";
import style from './Blog.module.css'
import { selectBlogActionCreator } from "../../redux/posts-reducer";

const Blog = (props) => {

    let path = "/blog/" + props.id;

    let onBlogSelect = () => {
        let action = selectBlogActionCreator(props.id);
        props.onBlogSelect(action)
        props.addPost(props.id);
    }


    return(
        <div className={style.button}>
            <NavLink to={path} onClick={onBlogSelect}>{props.title}</NavLink>
        </div>
    );
}


export default Blog;
