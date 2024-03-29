// Action types
// const ADD_POST_TO_BLOG = "ADD-POST-TO-BLOG";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";
const SELECT_BLOG = "SELECT-BLOG";

const UPDATE_TEMP_POST_TEXT = 'UPDATE_TEMP_POST_TEXT';
const ADD_POST_TO_BLOG = 'ADD_POST_TO_BLOG';

//Initial state

let initialState = {
    blogData: [
        {id: 1, title: "ParkMe", posts: [
            {id: 1, header: "About us", message: "Hey there! We're two students from Florida International University, diving into the worlds of computer science and business analytics. We share a big love for coding and a big problem at our university - parking!"},
            {id: 2, header: "", message: "Now, if you've ever tried to park at FIU during the busy hours, you know the struggle. The university is massive, with a whopping 55,000 students. And get this, around 70% of undergrads and 45% of grad students are commuters. That's a lot of people hunting for parking spaces!"},
            {id: 3, header: "", message: "On average, it takes about 20 minutes to find a parking spot on campus. Imagine doing that three times a week for four years. That's a whopping 144 hours lost just searching for a parking space. Crazy, right?"},
            {id: 4, header: "", message: "So, here's the deal. We're on a mission to make parking a breeze with our app, ParkMe. Picture this - you arrive on campus, and boom, we've already found a parking spot for you. Zero wasted minutes."},
            {id:5, header: "Day 1 - 11/01/2023", message: "We kicked off our journey by building a simple website using React.js for the front end and Python for the back end. We snapped four pictures of the parking lot from different angles. Our magical LLM (that's our super smart system) processed them, telling us how many cars were in each picture. It's like parking wizardry!"},
            {id:6, header: "Update Day 2 - 11/05/2023", message: "We're getting fancy! Now, you can upload multiple pictures from different angles, and our system is smart enough to process each side of the parking lot separately. It's like giving each side its own set of eyes to spot those parking spots better."},
            {id:7, header: "Update Day 3 - 11/10/2023", message: "Reality check! We noticed our four cameras cover only a portion of the parking spots. We need to check out every nook and cranny of the parking garages and lots to understand the camera setups better. We're also planning to meet with the camera whiz to figure out how those cameras work."}
        ]},
        {id: 2, title: "Blog 2", posts: [
            {id: 1, header: "Week 1: Exploring Long-Distance Relationships", message: "In our inaugural week, we delved deep into the world of Long-Distance Relationships (LDRs), engaging with industry experts and individuals alike to map out the landscape. Our focus sharpened on identifying a niche within the market that not only demonstrated a willingness to invest but also harbored significant pain points. By uncovering critical challenges faced by those in LDRs and studying competitors, we gleaned invaluable insights to inform our approach. Armed with this knowledge, we're poised to dive deeper into targeted conversations, employing strategic questions to unravel the journey that led individuals to their current predicaments. As we move forward, our mission remains clear: to innovate and offer solutions that alleviate the burdens of love across distances, shaping a transformative journey for all involved. Stay tuned for more insights as we navigate this exciting terrain together."},
            {id: 2, header: "Week 2: Unveiling the Heart of Long-Distance Relationships", message: "In Week 2, our exploration of Long-Distance Relationships (LDRs) intensified as we engaged in targeted interviews with friends, TikTok users, and individuals on campus, refining our focus on international students in LDRs. We unearthed three primary challenges—physical distance, shared experiences, and intimacy—and proposed solutions including virtual activities and communication strategies. Venturing into the technological realm, we explored companies like Eleven Labs and Retell AI, aiming to synthesize voices and create AI avatars to bridge the gap between distant partners. With clear goals set for further research and prototype development, we're committed to revolutionizing the LDR experience, fostering deeper connections regardless of physical separation."}
        ]}
    ],
    aboutUs: [
            {id: 1, message: "Hey there! We're two students from Florida International University, diving into the worlds of computer science and business analytics. We share a big love for coding and a big problem at our university - parking!"},
            {id: 2, message: "Now, if you've ever tried to park at FIU during the busy hours, you know the struggle. The university is massive, with a whopping 55,000 students. And get this, around 70% of undergrads and 45% of grad students are commuters. That's a lot of people hunting for parking spaces!"},
            {id: 3, message: "On average, it takes about 20 minutes to find a parking spot on campus. Imagine doing that three times a week for four years. That's a whopping 144 hours lost just searching for a parking space. Crazy, right?"},
            {id: 4, message: "So, here's the deal. We're on a mission to make parking a breeze with our app, ParkMe. Picture this - you arrive on campus, and boom, we've already found a parking spot for you. Zero wasted minutes."},
    ],
    updatePostArea: "",
    tempPostText: ""
};

//Reducer

const postsReducer = (state = initialState, action) => { 
    switch(action.type) {
        case UPDATE_TEMP_POST_TEXT:
            return {
                ...state,
                tempPostText: action.payload
            };
        case ADD_POST_TO_BLOG:
            const { blogId, post } = action.payload;
            const updatedBlogData = state.blogData.map(blog => {
                if (blog.id === blogId) {
                    return {
                        ...blog,
                        posts: [...blog.posts, post]
                    };
                }
                return blog;
            });
            return {
                ...state,
                blogData: updatedBlogData
            };
        case UPDATE_POST_AREA:
            return {
                ...state,
                updatePostArea: action.body
              };
        default:
            return state;
        }
};

//Action creators

// export const addPostToBlogActionCreator = (blogId, text) => ({type: ADD_POST_TO_BLOG, blogId, text});
export const selectBlogActionCreator = (blogId) => ({type: SELECT_BLOG, blogId});
export const updatePostAreaActionCreator = (body) => ({type: UPDATE_POST_AREA, body: body});
export const updateTempPostTextActionCreator = (text) => ({type: UPDATE_TEMP_POST_TEXT, payload: text});
export const addPostToBlogActionCreator = (blogId, post) => ({type: ADD_POST_TO_BLOG, payload: { blogId, post }});

export default postsReducer;