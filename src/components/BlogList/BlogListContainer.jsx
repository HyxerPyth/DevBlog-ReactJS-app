import React from "react";
import BlogList from "./BlogList";
import { selectBlogActionCreator, addPostToBlogActionCreator } from "../../redux/posts-reducer";



const BlogListContainer = (props) => {

    let state = props.store.getState().content;

    // let onBlogSelect = (blogID) => {
    //     let action = selectBlogActionCreator(blogID, state.updatePostArea);
    //     props.store.dispatch(action);
    // }

    let onBlogSelect = (blogId) => {
        let action = selectBlogActionCreator(blogId, state.updatePostArea);
        props.store.dispatch(action)
    }

    let addPostToBlog = (id) => {
        let action = addPostToBlogActionCreator(id, state.tempPostText)
        props.store.dispatch(action)
    }


    let addPost = () => {
        // props.store.dispatch(addPostToBlogActionCreator());
    }

    return <BlogList state={state} onBlogSelect={addPostToBlog} addPost={addPost}/>
}

export default BlogListContainer;
