import React from 'react';
import style from './Selection.module.css'
import { NavLink } from 'react-router-dom';


const Selection = (props) => {

    let onPostSelect = () => {
        props.selectPost();
    }


    return (
        <div className={style.contentWrapper}>
            <div className={style.buttonContainer}>
                <NavLink to="/newblog">
                    <button className={style.button}>
                        New blog
                    </button>
                </NavLink>
                <NavLink to="/existingblogs">
                    <button className={style.button} onClick={onPostSelect}>
                        Existing blog
                    </button>
                </NavLink>
            </div>
        </div>
    );
}


export default Selection; 