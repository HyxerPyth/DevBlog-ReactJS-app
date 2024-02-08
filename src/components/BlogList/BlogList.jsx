import React from "react";
import BlogContainer from "../Blog/BlogContainer";


const BlogList = (props) => {

    let blogData = props.state.blogData

    let blogElement = blogData.map(blog => <BlogContainer key={blog.id} blogId={blog.id} title={blog.title}/>)

    return (
        <div>
            {blogElement}
        </div>
    );
}


export default BlogList;
