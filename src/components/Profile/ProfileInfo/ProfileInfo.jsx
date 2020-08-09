import React from 'react'
import s from './ProfileInfo.module.css'


export const ProfileInfo= () =>{
    return(
        <div >

            <div>
                <img src="https://miro.medium.com/max/3420/0*F4QDsIFbJyaJZzJH.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+disc

            </div>


        </div>
    )
}