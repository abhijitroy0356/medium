import BlogCart from "../components/BlogCart"

function Blogs() {
  return (
   
        <div className="">
           {blogData.map((c)=>{
            return(
                <BlogCart authorName={c.authorName} title={c.title} content={c.content} publishedDate={c.publishedDate}/>
            )
           }) }
        </div>
  )
}

export default Blogs
const blogData = [
    {
      authorName: "Abhijit",
      title: "The Power of React",
      content: "React is a powerful JavaScript library for building user interfaces",
      publishedDate: "12/03/2024",
    },
    {
      authorName: "John Doe",
      title: "Understanding Tailwind CSS",
      content: "Tailwind CSS provides utility-first classes to style components quickly",
      publishedDate: "10/02/2024",
    },
    {
      authorName: "Jane Smith",
      title: "Why TypeScript?",
      content: "TypeScript adds static typing to JavaScript, making it more robust",
      publishedDate: "08/15/2024",
    },
    {
      authorName: "Emily Johnson",
      title: "State Management in React",
      content: "Managing state in React can be done using hooks like useState, useReducer",
      publishedDate: "06/28/2024",
    },
    {
      authorName: "Michael Brown",
      title: "Introduction to Next.js",
      content: "Next.js is a React framework that enables server-side rendering",
      publishedDate: "05/12/2024",
    },
    {
      authorName: "Sophia Wilson",
      title: "Building REST APIs with Node.js",
      content: "Node.js with Express makes building REST APIs straightforward",
      publishedDate: "04/20/2024",
    },
    {
      authorName: "David Martinez",
      title: "Optimizing Performance in React",
      content: "React provides various techniques like memoization to optimize performance",
      publishedDate: "03/30/2024",
    },
    {
      authorName: "Olivia Taylor",
      title: "Getting Started with MongoDB",
      content: "MongoDB is a NoSQL database that stores data in JSON-like documents",
      publishedDate: "02/18/2024",
    },
    {
      authorName: "James Anderson",
      title: "The Importance of UI/UX Design",
      content: "Good UI/UX design improves user satisfaction and engagement",
      publishedDate: "01/05/2024",
    },
    {
      authorName: "Charlotte White",
      title: "Deploying Applications with Vercel",
      content: "Vercel simplifies the deployment of React and Next.js applications",
      publishedDate: "12/20/2023",
    },
  ];
  
  