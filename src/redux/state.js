const ADD_POST = "ADD-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";

let store = {

    _state: {

        Content: {
            
            PostData: {
                id: 1, message: "Text"
            },

            updatePostArea: ""

        },

        _callSubscriber() {
            console.log("State changed!")
        },

        _rerenderEntireTree() {

        }

    },

    getState() {
        return this._state;
    },

    dispatch(action) { //: ADD-POST} 
        if (action.type === ADD_POST) {
            let newPost = () => {}
        } else if (action.type === UPDATE_POST_AREA) {

        };
    }
};


export let updatePostAreaActionCreator = () => {

};

export default store;