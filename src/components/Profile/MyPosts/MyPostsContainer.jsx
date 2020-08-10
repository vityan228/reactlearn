import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPosts = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPosts}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}
        />
    )
}