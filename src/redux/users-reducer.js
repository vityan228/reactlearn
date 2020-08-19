const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
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
        case SET_USERS: {

            return {...state, users: [...action.users]}
        }
        case SET_TOTAL_COUNT: {

            return {...state, totalUsersCount: action.total}
        }
        case SET_CURRENT_PAGE:
            //debugger
            return {...state, currentPage: action.pageNumber}

        default:
            return state;
    }

}

export const followAc = (userId) => ({type: FOLLOW, userId})
export const unfollowAc = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
export const setTotalUsersCountAc = (total) => ({type: SET_TOTAL_COUNT, total})
export const setCurrentPageAc = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
