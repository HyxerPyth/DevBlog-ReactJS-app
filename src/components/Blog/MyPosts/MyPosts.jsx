import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";


let aboutUs = [
    {id: 1, message: "Hey there! We're two students from Florida International University, diving into the worlds of computer science and business analytics. We share a big love for coding and a big problem at our university - parking!"},
    {id: 2, message: "Now, if you've ever tried to park at FIU during the busy hours, you know the struggle. The university is massive, with a whopping 55,000 students. And get this, around 70% of undergrads and 45% of grad students are commuters. That's a lot of people hunting for parking spaces!"},
    {id: 3, message: "On average, it takes about 20 minutes to find a parking spot on campus. Imagine doing that three times a week for four years. That's a whopping 144 hours lost just searching for a parking space. Crazy, right?"},
    {id: 4, message: "So, here's the deal. We're on a mission to make parking a breeze with our app, ParkMe. Picture this - you arrive on campus, and boom, we've already found a parking spot for you. Zero wasted minutes."},
]

let postsData = [
    {id: 1, header: "Day 1 - 11/01/2023", message: "We kicked off our journey by building a simple website using React.js for the front end and Python for the back end. We snapped four pictures of the parking lot from different angles. Our magical LLM (that's our super smart system) processed them, telling us how many cars were in each picture. It's like parking wizardry!"},
    {id: 2, header: "Update Day 2 - 11/05/2023", message: "We're getting fancy! Now, you can upload multiple pictures from different angles, and our system is smart enough to process each side of the parking lot separately. It's like giving each side its own set of eyes to spot those parking spots better."},
    {id: 3, header: "Update Day 3 - 11/10/2023", message: "Reality check! We noticed our four cameras cover only a portion of the parking spots. We need to check out every nook and cranny of the parking garages and lots to understand the camera setups better. We're also planning to meet with the camera whiz to figure out how those cameras work."}
]

let postsElements = postsData.map( p => (
    <div> 
        <p><b>{p.header}</b></p>
        <Post message={p.message} />
    </div>));

let aboutUsElement = aboutUs.map( m => <Post aboutus={m.message} />);


const MyPosts = (props) => {
    return (
        <div className={style.posts}>
            <p><b>About Us</b></p>
                {aboutUsElement}
            <p><b>Devblog</b></p>
                 {postsElements}
        </div>
    );
}


export default MyPosts;