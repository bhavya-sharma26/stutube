import React from 'react'
import './Comments.scss'
import Comment from '../comment/Comment'
const Comments = () =>{
    const handleComment =()=>{

    }
    return
    <div className='comments'>
        <p>1234 comments</p>
        <div className='comments__form d-flex w-100 my-2'>
            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"  className="rounded-circle mr-3" alt=""/>
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                <input className='flex-grow-1' type='text' placeholder='Write a comment...'/>
                <button className='border-0 p-2'>Comments</button>
                </form>         
        </div>
        <div className='comments__list'>
            {[...Array(15)].map(()=><Comment/>)}
        </div>
    </div>
}
export default Comments
