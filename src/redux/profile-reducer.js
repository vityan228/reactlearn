const ADD_POST = 'ADD-POST'
const UPDATE = 'UPDATE-NEW-POST_TEXT'

let initialState = {
    postData: [
        {id: 1, message: 'vierewrwerewrtyan', likesCount: 12},
        {id: 2, message: 'kolwerwerweryan', likesCount: 555}

    ],
    newPostText: ''

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            }
        }
        case UPDATE:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE, newText: text})
export default profileReducer;