import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {SignupInput} from "@abhijit09988/medium-zods-v1"
import Inputbox from "./Inputbox"
import axios from "axios"
import { BACKEND_URL } from "../config"
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
const [postInputs, setPostInputs] = useState<SignupInput>({
    name:"",
    email:"",
    password:""
})
const navigate = useNavigate()
async function sendRequest(){ 
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/auth/${type === 'signin' ? 'signin' : 'signup'}`, 
            {email: postInputs.email, name: postInputs.name, password: postInputs.password }
        );
        const jwt = response.data
        localStorage.setItem("token",jwt)
        navigate("/blogs")
    }catch(err){
        console.log(err)
        alert("error while signup")
    }
   

}
return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="text-center">
                <div className="text-4xl font-bold text-left mt-4">Create an account</div>
                <div className="text-slate-400">
                    {type==='signup'? "already have an account ?":"don't have an account?"} <Link to={type==="signup"?"/signin":"/signup"} className="pl-1 underline">{type==='signin'?
                    'signup':'signin'}</Link>
                </div>
            </div>
        <div  className="">
        {type==='signup'?<Inputbox label="username" type="text" placeholder="abhijtroy123" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
                name:c.target.value,
            }))
        }}/>:null}
        <div className="
        ">
       <Inputbox label="email" type="text" placeholder="abc@gamil.com" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
               email:c.target.value
            }))
        }}/>
        </div>  
        <Inputbox label="password" type={"password"} placeholder="put the password here" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
                password:c.target.value
            }))
        }}/>
            <button type="button" onClick={sendRequest}className="w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{type==="signin"?"signin":"signup"}</button>
        </div>
        </div>
        </div>
    </div>
)
}