import React from "react";
import BlogListContainer from "../../components/BlogList/BlogListContainer";


const ExistingBlogs = (props) => {
    return (
        <BlogListContainer store={props.store} />
    );
}


export default ExistingBlogs;