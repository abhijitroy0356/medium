interface avatar{
    Name:string;
    size:number;
}

function Avatar({Name,size}:avatar) {
    return (
        <div className="font-bold border text-center items-center border-black rounded rounded-1xl bg-black " style={{width:size,height:size}}>
            <div className="text-white">
                {Name.split(" ").slice(0, 1).map(word => word.slice(0, 2)).join("")}
            </div>
        </div>
    )
}

export default Avatar