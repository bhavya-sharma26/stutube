import React from 'react'
import './VideoHorizontal.scss'
import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import moment from 'moment/moment'
import numeral from 'numeral'
import  LazyLoadImage  from 'react-lazy-load-image-component'
import { Row,Col } from 'react-bootstrap'
const VideoHorizontal = () =>{
    const seconds=moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds*1000).format("mm:ss")
    return 
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
        <Col className='videoHorizontal__left' xs={6} md={4} >
        <LazyLoadImage src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" effect='blur' className="videoHorizontal__thumbnail" wrapperClassName = "videoHorizontal__thumbnail-wrapper" />
                <span className='video__top__duration'>{_duration}</span>
        </Col>
        <Col xs={6} md={8} className='videoHorizontal__right p-0'>
<p className="videoHorizontal__title mb-1">
    Be a full stack developer in 1 month
</p>
<div className="videoHorizontal__details">
<span><AiFillEye/>{numeral(10000000).format("0.a")} views •  
{moment('2023-03-30').fromNow()}</span>
</div>
<div className='videoHorizontal__channel d-flex align-items-center my-1' >
<p>Bhavya Sharma</p>
</div>
        </Col>
    </Row>
}
export default VideoHorizontal