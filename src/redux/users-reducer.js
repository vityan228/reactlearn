const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://cs6.pikabu.ru/post_img/2015/06/19/11/1434739887_1710191108.jpg',
        //     followed: false,
        //     fullName: 'Jora',
        //     status: 'salam',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://cs6.pikabu.ru/post_img/2015/06/19/11/1434739887_1710191108.jpg',
        //     followed: true,
        //     fullName: 'kolya',
        //     status: 'rttt',
        //     location: {city: 'Russia', country: 'Rostov'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://cs6.pikabu.ru/post_img/2015/06/19/11/1434739887_1710191108.jpg',
        //     followed: true,
        //     fullName: 'masha',
        //     status: 'salagdgdgm',
        //     location: {city: 'China', country: 'Pekin'}
        // },
    ],


};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),

            }
        case SET_USERS:
            //debugger
            return {...state, users: [ ...state.users, ...action.users]}

        default:
            return state;
    }

}

export const followAc = (userId) => ({type: FOLLOW, userId})
export const unfollowAc = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
