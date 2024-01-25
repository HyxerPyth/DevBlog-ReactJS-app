import React from 'react';
import style from './PostSelection.module.css'


const PostSelection = (props) => {
    return (
        <div>
            <button className={style.button}>
                New blog
            </button>
            <button className={style.button}>
                Existing blog
            </button>
        </div>
    );
}


export default PostSelection; 