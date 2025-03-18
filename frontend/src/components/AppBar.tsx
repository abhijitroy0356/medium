import Avatar from "./Avatar"
import { Link } from "react-router-dom"

function AppBar() {
  return (
    <div className=" bg-black border-b text-white flex justify-between px-10 py-6 items-center ">
        <Link to={'/blogs'}>
        <div className=" border border-white p-4 md:text-3xl font-extrabold">Medium</div>
        </Link>
        <div className="border border-white cursor-pointer rounded">
            <Avatar Name={"ab"} size={30}/>
        </div>
    </div>
  )
}

export default AppBar