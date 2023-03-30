import axios from 'axios'
const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyBaY7UjCzofjXf9ji8i64AP1lBKg5oJCjQ'
    }
})
export default request;