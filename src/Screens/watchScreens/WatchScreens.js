import React from 'react'
import './watchScreens.scss'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../../Components/videoHorizontal/VideoHarizontal'
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData'
import Comments from '../../Components/comments/Comments'
const WatchScreens = () =>{
    const {id}=useParams()
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}`} style={{border:'0px'}} allowFullScreen width='100%' height='100%' title="id">
                    </iframe>

                </div>
                <VideoMetaData/>
                <Comments/>
            </Col>
            <Col lg={4}>
{[...Array(10)].map(()=><VideoHorizontal/>)}
            </Col>
        </Row>
    )
}
export default WatchScreens;