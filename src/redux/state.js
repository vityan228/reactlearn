import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: ""
        },
        sidebar: {},

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._calSubscriber(this._state)

    }
}




export default store