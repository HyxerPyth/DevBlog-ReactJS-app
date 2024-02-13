// Action types
const ADD_POST = "ADD-POST";
const ADD_POST_TO_BLOG = "ADD-POST-TO-BLOG";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";
const SELECT_BLOG = "SELECT-BLOG";

//Initial state

let initialState = {
    blogData: [
        {id: 1, title: "Blog 1", posts: [
            {id: 1, header: "Post 1", message: "This is the first post in blog 1."},
            {id: 2, header: "Post 2", message: "This is the second post in blog 1."},
        ]},
        {id: 2, title: "Blog 2", posts: [
            {id: 1, header: "Post 1", message: "This is the third post in blog 1."}
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
        case ADD_POST: 
            return {
                ...state,
                updatePostArea: action.text // store the post text in the updatePostArea 
            }
        case ADD_POST_TO_BLOG:
            const blogIndex = state.blogData.findIndex((blog) => blog.id === action.blogId);
            if (blogIndex !== -1) {
                let newPost = {
                    id: state.blogData[blogIndex].posts.length + 1,
                    header: "EXAMPLE NEW POST'S HEADER",
                    message: state.updatePostArea
                };
                let updatedPosts = [...state.blogData[blogIndex].posts, newPost];
                let updatedBlogData = [...state.blogData];
                // add the post from updatePostArea to the selected blog
                updatedBlogData[blogIndex] = { ...state.blogData[blogIndex], posts: updatedPosts };
            }
            return {
                ...state,
                updatePostArea: "" // clear the updatePostArea after adding the post
            };
        case SELECT_BLOG:
            return {
                ...state,
                tempPostText: action.blogId
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

export const addPostActionCreator = (text) => ({type: ADD_POST, text});
export const addPostToBlogActionCreator = (blogId) => ({type: ADD_POST_TO_BLOG, blogId});
export const selectBlogActionCreator = (blogId) => ({type: SELECT_BLOG, blogId});
export const updatePostAreaActionCreator = (body) => ({type: UPDATE_POST_AREA, body: body});

export default postsReducer;