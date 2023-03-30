import React from 'react'
import './watchScreens.scss'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../../Components/videoHorizontal/VideoHarizontal'
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData'
import Comments from '../../Components/comments/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVideosByCategories,getVideosById } from '../../redux/actions/actionVideos'
const WatchScreens = () =>{
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(getVideosById(id))
    }, [dispatch,id])
    
const {videos,loading} = useSelector(state=>state.selectedVideos)
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}`} style={{border:'0px'}} allowFullScreen width='100%' height='100%' title={videos?.snippet?.title}>
                    </iframe>

                </div>
                {!loading ?
                <VideoMetaData video={videos} videoId={id}/>:<h1>Loading...</h1>
                }<Comments/>
            </Col>
            <Col lg={4}>
{[...Array(10)].map(()=><VideoHorizontal/>)}
            </Col>
        </Row>
    )
}
export default WatchScreens;