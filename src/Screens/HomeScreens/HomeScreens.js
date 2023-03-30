import React,{useEffect} from 'react'
import { Col , Container , Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import CategoriesBar from '../../Components/categoriesBar/CategoriesBar'
import Video from '../../Components/Video/Video'
import { getPopularVideos, getVideosByCategories } from '../../redux/actions/actionVideos'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideos from '../../skeletons/SkeletonVideos'
const HomeScreens = ()=>{
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getPopularVideos())
    }, [dispatch])
    const {videos,activeCategory,loading} = useSelector(state=>state.homeVideos)

    const {fetchData} = ()=>{
        if(activeCategory==='All')
        dispatch(getPopularVideos())
        else
        dispatch(getVideosByCategories(activeCategory))
    }
return (
    <Container>
        <CategoriesBar/>
        <Row>
<InfiniteScroll dataLength={videos.length} next={fetchData} hasMore={true} 
loader={
    <div className="spinner-loader text-danger d-block mg-auto"> 

    </div>
}
>
{!loading? (videos.map((video)=>(
    <Col lg={3} md={4} key={video.id}>
    <Video video={video}>

    </Video>
    </Col>
))
):(
    [...Array(20)].map(()=><Col lg={3} md={4}><SkeletonVideos/></Col>)
)
}
</InfiniteScroll>
        </Row>
    </Container>
)
}
export default HomeScreens