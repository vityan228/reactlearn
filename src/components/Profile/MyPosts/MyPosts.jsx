import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


export const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let onAddPosts = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

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
                    <button onClick={onAddPosts}>add</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}