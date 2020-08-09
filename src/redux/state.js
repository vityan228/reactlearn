const ADD_POST = 'ADD-POST'
const UPDATE = 'UPDATE-NEW-POST_TEXT'

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'vierewrwerewrtyan', likesCount: 12},
                {id: 2, message: 'kolwerwerweryan', likesCount: 555}

            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'vityan'},
                {id: 2, name: 'kolyan'},
                {id: 3, name: 'semen'},
                {id: 4, name: 'petr'}
            ],
            messages: [
                {id: 1, message: 'vierewrwerewrtyan'},
                {id: 2, message: 'kolwerwerweryan'},
                {id: 3, message: 'sdfdsfwewer'},
                {id: 4, message: 'pedsfdsfdsftr'}
            ]
        }

    },
    _calSubscriber() {
        console.log('123')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._calSubscriber = observer
    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._calSubscriber(this._state)
        } else if (action.type === UPDATE) {
            this._state.profilePage.newPostText = action.newText
            this._calSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE, newText: text})

export default store