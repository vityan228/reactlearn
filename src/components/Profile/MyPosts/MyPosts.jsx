import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";


export const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let action = updateNewPostActionCreator(newPostElement.current.value)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPosts}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}