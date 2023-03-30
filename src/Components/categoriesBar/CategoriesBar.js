import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategories } from '../../redux/actions/actionVideos'
import './categoriesBar.scss'
const keywords =[
    'All',
    'React js',
    'Angular js','React Native', 'Use of API' , 'Redux',
    'Music','Algorithm Art','Guitar', 'Bengali Songs','Coding','Cricket','Football',
    'Real Madrid','Gatsby','Poor COder','Shwetabh',''
]
const CategoriesBar = () =>{
    const [activeElement,setActiveElement]=useState('All')
    
    const dispatch=useDispatch()
    const handleClick=value=>{
        setActiveElement(value)
        if(value==='All')
        dispatch(getVideosByCategories(value))
        else
        dispatch(getPopularVideos(value))
    } 
    return (<div className='categoriesBar'>
    {    keywords.map((value,i)=><span 
    className={activeElement===value?'active':''} onClick={()=>handleClick(value)} key={i}>{value}</span>)}
    </div>)
}
export default CategoriesBar