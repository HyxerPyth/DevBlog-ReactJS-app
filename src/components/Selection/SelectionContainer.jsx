import React from 'react';
import Selection from './Selection';
import { selectBlogActionCreator } from '../../redux/posts-reducer';



const SelectionContainer = (props) => {

    let selectPost = () => {
        let action = selectBlogActionCreator();
        props.store.dispatch(action)
    }   

    return (
        <Selection selectPost={selectPost}/>
    );
}


export default SelectionContainer; 
