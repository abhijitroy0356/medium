import { useParams } from "react-router-dom";
import BlogTile from "../components/BlogTile";
import { useBlog } from "../hooks"
interface Blog  {
  id: string;
  title: string;
  content: string;
  published?: string; // Optional in case it's missing
  author: {
    name: string; // Optional in case `name` is missing
  };
};

export const Blog = () => {
  const {id}= useParams()
  const {blog, loading}= useBlog({
      id:id||""
  }) as {blog: Blog, loading:boolean}
  if(loading){
    return (
      <div>
        loading....
      </div>
    )
  }
  return (
    <div>
       {blog ? (
        <BlogTile title={blog.title} content={blog.content} author={blog.author} />
      ) : (
        <div>No blog found.</div>
      )}
    </div>
  )
}
