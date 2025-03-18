
import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
interface Blog{
    "content":string;
    "title":string;
    "id":string;
    "author":{
        "name":string
    }
}
export const useBlogs = () =>{
    const [loading, setLoading]=useState(true)
    const [blogs,setBlogs] = useState([])
    
    useEffect(()=>{
       axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem('token')
        }}
       )
       .then(response =>{
        setBlogs(response.data.allBlogs)
        console.log(response.data.allBlogs)
        setLoading(false)
        //console.log(localStorage.getItem('token'))
       })

    },[])
    return {
        loading,
        blogs
    }
}
export const useBlog=({id}:{id:string})=>{

    const [loading, setLoading]=useState(true)
    const [blog,setBlog] = useState<Blog>()
    
    useEffect(()=>{
       axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token')
        }}
       )
       .then(response =>{
        setBlog(response.data.blog)
        console.log(response.data.blog)
        setLoading(false)
        //console.log(localStorage.getItem('token'))
       })

    },[id])
    return {
        loading,
        blog
    }
}