const ADD_POST = "ADD-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";

let store = {

    _state: {

        content: {
            
            postData: [
                {id: 1, header: "Day 1 - 11/01/2023", message: "We kicked off our journey by building a simple website using React.js for the front end and Python for the back end. We snapped four pictures of the parking lot from different angles. Our magical LLM (that's our super smart system) processed them, telling us how many cars were in each picture. It's like parking wizardry!"},
                {id: 2, header: "Update Day 2 - 11/05/2023", message: "We're getting fancy! Now, you can upload multiple pictures from different angles, and our system is smart enough to process each side of the parking lot separately. It's like giving each side its own set of eyes to spot those parking spots better."},
                {id: 3, header: "Update Day 3 - 11/10/2023", message: "Reality check! We noticed our four cameras cover only a portion of the parking spots. We need to check out every nook and cranny of the parking garages and lots to understand the camera setups better. We're also planning to meet with the camera whiz to figure out how those cameras work."}
            ],

            aboutUs: [
                {id: 1, message: "Hey there! We're two students from Florida International University, diving into the worlds of computer science and business analytics. We share a big love for coding and a big problem at our university - parking!"},
                {id: 2, message: "Now, if you've ever tried to park at FIU during the busy hours, you know the struggle. The university is massive, with a whopping 55,000 students. And get this, around 70% of undergrads and 45% of grad students are commuters. That's a lot of people hunting for parking spaces!"},
                {id: 3, message: "On average, it takes about 20 minutes to find a parking spot on campus. Imagine doing that three times a week for four years. That's a whopping 144 hours lost just searching for a parking space. Crazy, right?"},
                {id: 4, message: "So, here's the deal. We're on a mission to make parking a breeze with our app, ParkMe. Picture this - you arrive on campus, and boom, we've already found a parking spot for you. Zero wasted minutes."},
            ],

            updatePostArea: ""

        },

        _callSubscriber() {
            console.log("State changed!")
        }

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._state._callSubscriber = observer;
    },

    dispatch(action) { 
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                header: "",
                message: this._state.content.postData.updatePostArea
            }
            this._state.content.postData.push(newPost);
            this._state._callSubscriber(this._state);

        } else if (action.type === "UPDATE-POST-AREA") {
            this._state.content.updatePostArea = action.newText
            this._state._callSubscriber(this._state)
        };
    }
};


export const updatePostAreaActionCreator = (text) => ( {type: UPDATE_POST_AREA, newText: text} );

export default store;
window.store = store;