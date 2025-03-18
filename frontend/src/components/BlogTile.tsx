interface blog{
    title:string;
    content:string;
    author:{
        name:string
    }
}

function BlogTile({title, content, author}:blog) {
    
  return (
<div>
    <div>
        <div>{title}</div>
            <div>
                <div>date:2/02/2013</div>
                <div>{content}</div>
            </div>
        </div>
        <div>
            <div>Author{author.name}</div>
            <div>
                <div>Jokester</div>
                <div>master of node.js in couple of days</div>
            </div>
        </div>
</div>
  )
}

export default BlogTile