import React from 'react';
import style from './PostSelection.module.css'
import { NavLink } from 'react-router-dom';


const PostSelection = (props) => {

    return (
        <div className={style.contentWrapper}>
            <div className={style.buttonContainer}>
                <NavLink to="/newblog">
                    <button className={style.button}>
                        New blog
                    </button>
                </NavLink>
                <NavLink to="/existingblogs">
                    <button className={style.button}>
                        Existing blog
                    </button>
                </NavLink>
            </div>
        </div>
    );
}


export default PostSelection; 