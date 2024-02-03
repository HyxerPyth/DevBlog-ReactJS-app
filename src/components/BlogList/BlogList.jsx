import React from "react";
import { NavLink } from "react-router-dom";


const BlogList = (props) => {
    return (
        <div>
            <NavLink to={"/blog1"}>
                <button>
                    Blog 1
                </button>
            </NavLink>
        </div>
    );
}


export default BlogList;
