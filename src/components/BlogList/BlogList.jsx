import React from "react";
import BlogContainer from "../Blog/BlogContainer";


const BlogList = (props) => {

    let blogData = props.state.blogData

    let blogElement = blogData.map(blog => <BlogContainer id={blog.id} title={blog.title}/>);
    let postElement = props.state.blogData.posts.map(post => <BlogContainer id={post.id} header={post.header} message={post.message}/>);

    return (
        <div>
                <button>
                    {blogElement}
                </button>
                {postElement}
        </div>
    );
}


export default BlogList;
