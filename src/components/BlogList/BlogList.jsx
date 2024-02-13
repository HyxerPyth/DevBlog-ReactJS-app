import React from "react";
import BlogContainer from "../Blog/BlogContainer";
import style from './BlogList.module.css'


const BlogList = (props) => {
    let blogData = props.state.blogData

    let blogElement = blogData.map(blog => <BlogContainer key={blog.id} id={blog.id} title={blog.title} posts={blog.posts}/>)

    return (
        <div className={style.buttonWrapper}>
            <div className={style.button}>
            {blogElement}
            </div>
        </div>
    );
}


export default BlogList;
