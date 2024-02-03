import React from "react";
import style from "./Post.module.css"



const Post = (props) => {
    return (
        <div className={style.post}>
            <div>
                { props.message }
                { props.aboutus }
            </div>
        </div>
    );
}


export default Post;