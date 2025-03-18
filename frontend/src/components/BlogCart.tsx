import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface blogcart{
    id:string;
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}
function BlogCart({id,authorName, title, content, publishedDate}:blogcart) {
  return (
    
    <div className="flex justify-center">
        <Link to={`/${id}`}>
        <div className="w-[900px]">
        <div className="flex p-5 ">
            <div className="mr-5">
            <Avatar Name={authorName} size={25} />
            </div>
            
            <div className="mr-5">{authorName}  &#9679; </div>
            <div className="">{publishedDate}</div>
        </div>
        <div  className="flex justify-between">
            <div className="flex flex-col p-3">
                <div className="text-4xl font-bold">{title}</div>
                <div className="mt-5">{content.length>100?content.slice(0,100)+`....`:content}</div>
            </div>
            <div className="w-[70px] h-[50px]">demoimg</div>
        </div>
        
        <div className="ml-3">{`${Math.ceil(content.length/100)}+minutes`}</div>
        
        <div className="bg-slate-700 h-[2px] w-full mt-8"></div>
    </div>
    </Link>
    </div>
    
  )
}

export default BlogCart