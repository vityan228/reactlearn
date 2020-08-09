import profileReducer from "./profile-reducer";

const UPDATEMESS = 'UPDATE-NEW-MESSAGE_BODY'
const SEND_MESS = 'SEND_MESS'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATEMESS:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESS:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body})
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESS})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATEMESS, body: body})

export default dialogsReducer;