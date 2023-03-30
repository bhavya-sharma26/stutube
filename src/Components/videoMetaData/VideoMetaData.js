import React from 'react'
import './VideoMetaData.scss'
import numeral  from 'numeral'
import moment from 'moment'
import { MdThumbDown,MdThumbUp } from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'
const VideoMetaData = () =>{
    return
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>
                    Video Title
                </h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                <span>{numeral(1000).format("0.a")} views • 
                {moment('2020-05-06').fromNow()}</span>
                </div>
                <div>
                    <span className='mr-3'>
                     <MdThumbUp size={26}/>{numeral(1000).format("0.a")}
                    </span>
                    <span className='mr-3'>
                     <MdThumbDown size={26}/>{numeral(1000).format("0.a")}
                    </span>
                </div>
            </div>
            <div className="videoMetaData__channel d-flex align-items-center justify-content-between my-2 py-3   ">
                <div className='d-flex'>
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                    className="rounder-circle mr-3" alt=""/>
                    <div className='d-flex flex-column'>
                        <span>
                            Bhavya Sharma
                        </span>
                        <span>{numeral(1000).format("0.a")} Subscribers</span>
                    </div>
                </div>
                <button className='btn border-0 p-2 m-2'>
                  Subscribe
                </button>
            </div>
            <div className='videoMataData__description'>
                <ReactShowMoreText
                lines={3}
                more="SHOW MORE"
                less="SHOW LESS"
                anchorLess ="showMoreText"
                expanded={false}
                >
                Lightrun Answers was designed to reduce the constant googling that comes with debugging
            3rd party libraries. It collects links to all the places you might be looking at while
            hunting down a tough bug.And, if you’re still stuck at the end, we’re happy to hop on 
            call to see how we can help out.
                </ReactShowMoreText>
            </div>
        </div>
}
export default VideoMetaData