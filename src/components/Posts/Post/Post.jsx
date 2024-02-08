import React from "react";


const Post = (props) => {


    return (
        <div>
            <div>
                {props.header}
            </div>
            <div>
                {props.postMessage}
            </div>
        </div>
    );
}

export default Post;

