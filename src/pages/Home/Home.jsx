import React from "react";
import PostFormContainer from "../../components/PostForm/PostFormContainer";


const Home = (props) => {
    return (
        <div>
            <PostFormContainer store={props.store} />
        </div>
    );
}


export default Home;