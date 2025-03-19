import { Link } from "react-router-dom"
import Avatar from "./Avatar"


function AppBar() {
  
  return (
    <div className=" bg-black border-b text-white flex justify-between px-10 py-6 items-center ">
        <Link to={'/blogs'}>
        <div className=" border border-white p-4 md:text-3xl font-extrabold">Medium</div>
        </Link>
        <Link to={'/publish'}>
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">add new blog</button>
        </Link>
        <div className="border border-white cursor-pointer rounded">

            <Avatar Name={"ab"} size={30}/>
        </div>
    </div>
  )
}

export default AppBar