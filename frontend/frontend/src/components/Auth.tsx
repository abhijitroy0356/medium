import { Link } from "react-router-dom"
import { useState } from "react"
import {SignupInput, SigninInput} from "@abhijit09988/medium-zods-v1"
import Inputbox from "./Inputbox"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>({
    name:"",
    email:"",
    password:""
})
return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="text-center">
                <div className="text-4xl font-bold text-left mt-4">Create an account</div>
                <div className="text-slate-400">
                    already have an account ? <Link className="pl-1 underline" to={"/signin"}>login</Link>
                </div>
            </div>
        <div  className="">
        <Inputbox label="username" type="text" placeholder="abhijtroy123" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
                name:c.target.value,
                email:c.target.value,
                password:c.target.value
            }))
        }}/>
        <div className="
        ">
        <Inputbox label="email" type="text" placeholder="abc@gamil.com" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
                name:c.target.value,
                email:c.target.value,
                password:c.target.value
            }))
        }}/>
        </div>  
        <Inputbox label="password" type={"password"} placeholder="put the password here" onChange={(c)=>{
            setPostInputs(e=>({
                ...e,
                name:c.target.value,
                email:c.target.value,
                password:c.target.value
            }))
        }}/>
            <button type="button" className="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{type==='signin'?'signin':'signup'}</button>
        </div>
        </div>
        </div>
    </div>
)
}