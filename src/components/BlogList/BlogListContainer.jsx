import React from "react";
import BlogList from "./BlogList";
import { addPostToBlogActionCreator, selectBlogActionCreator } from "../../redux/posts-reducer";



const BlogListContainer = (props) => {

    let state = props.store.getState().content;

    let onBlogSelect = (blogID) => {
        let action = selectBlogActionCreator(blogID);
        props.store.dispatch(action);
    }

    let addPost = () => {
        // props.store.dispatch(addPostToBlogActionCreator());
    }

    return <BlogList state={state} onBlogSelect={onBlogSelect} addPost={addPost}/>
}

export default BlogListContainer;
