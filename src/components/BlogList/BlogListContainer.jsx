import React from "react";
import BlogList from "./BlogList";
import { selectBlogActionCreator } from "../../redux/posts-reducer";



const BlogListContainer = (props) => {

    let state = props.store.getState().content;

    let selectOption =(blogId) => {
        props.store.dispatch(selectBlogActionCreator(blogId));
    }
    
    return <BlogList selectOption={selectOption} state={state} />
}

export default BlogListContainer;