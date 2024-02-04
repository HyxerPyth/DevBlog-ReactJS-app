import React from "react";
import { NavLink } from "react-router-dom";
import Blog from "../Blog/Blog";


const BlogList = (props) => {

    let blogElement = props.state.blogData.map(blog => <Blog id={blog.id} title={blog.title} posts={blog.posts} />);

    return (
        <div>
            <NavLink to={"/blog" + props.state.blogData.id}>
                <button>
                    {blogElement}
                </button>
            </NavLink>
        </div>
    );
}


export default BlogList;
