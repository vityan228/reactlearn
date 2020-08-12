import profileReducer from "./profile-reducer";

const UPDATEMESS = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESS = 'SEND_MESS'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATEMESS:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESS:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESS})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATEMESS, body: body})

export default dialogsReducer;