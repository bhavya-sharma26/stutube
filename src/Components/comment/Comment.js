import React from 'react'
import moment from 'moment'
import './comment.scss'
const Comment = () =>{
    return(
<div className='p-2 comment d-flex'>
    <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
     alt='' className='rounded-circle mr-3'/>
     <div className='comment__body'>
<p className='comment__header mb-1'>Bhavya Sharma • {moment("2023-03-29").fromNow()}</p>
<p className='mb-0'>Nice Video Dude!!</p>
     </div>
</div>
    )
}
export default Comment