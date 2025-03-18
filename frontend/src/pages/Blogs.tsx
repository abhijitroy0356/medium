import AppBar from "../components/AppBar";
import BlogCart from "../components/BlogCart";
import { useBlogs } from "../hooks";

interface Blog  {
  id: string;
  title: string;
  content: string;
  published?: string; // Optional in case it's missing
  author: {
    name?: string; // Optional in case `name` is missing
  };
};
function Blogs() {
  const { loading, blogs } = useBlogs() as {loading :boolean , blogs :Blog[]}

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div className="sticky top-0 z-50">
        <AppBar />
      </div>
      {blogs.map((c) => (
        <BlogCart
          key={c.id}
          id={c.id}
          authorName={c.author?.name || "Unknown Author"}
          title={c.title}
          content={c.content}
          publishedDate={c.published || "No date available"}
        />
      ))}
    </div>
  );
}

export default Blogs;
