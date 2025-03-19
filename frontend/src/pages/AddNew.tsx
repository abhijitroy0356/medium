import { ChangeEvent, useState } from "react"
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

interface infoBlog{
    title:string;
    content:string;
}
export const AddNew = () => {
    const [info,setInfo]=useState<infoBlog>({
        title:"",
        content:""
    }) 
    const navigate= useNavigate()
    const onchangehandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInfo((e1)=>({
            ...e1,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <div>
        <AppBar/>
    <div className="flex justify-center ">
        
    <div className="flex flex-col w-[900px] mt-[100px] bg-slate-900 p-10 rounded ">
    <p className="text-white mb-5 font-bold text-3xl ">Enter Blog info</p>
        <input onChange={onchangehandler} name="title" value={info.title} type="text" className="h-[30px] p-4" placeholder="add a tite"/>
        <input onChange={onchangehandler} name="content" value ={info.content}className="p-4 mt-10" type="text" placeholder="add the content"/>
        <button type="submit" onClick={async ()=>{
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title:info.title,
                content:info.content,
            },{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            }
        )
            console.log(response.data.blog.id)
            navigate(`/${response.data.blog.id}`)
        }}className="bg-white mt-10 p-3 w-[110px] rounded text-xl">submit</button>
    </div>
    </div>
    </div>
  )
}
