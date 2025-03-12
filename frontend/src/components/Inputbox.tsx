import { ChangeEvent } from "react"

interface InboxType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?: string
}
function Inputbox({label,type,placeholder,onChange}:InboxType) {
    return (
      
            <div className="pt-5 flex flex-col">
                <label className="text-md font-bold">{label}</label>
                <input className="mt-2 pt-4 bg-blue-200 rounded-md" type={type || "text"} placeholder={placeholder} onChange={onChange} />
            </div>
    
    )
}

export default Inputbox