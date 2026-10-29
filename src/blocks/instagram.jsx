import {MoveRight} from "lucide-react"


export const InstagramBlock = () => {
    const images = [
        { id: 1, src: "../public/inst1.jpg", link:"https://www.instagram.com/p/DeyhVHOE_OG/?img_index=1" },
        { id: 2, src: "../public/inst2.jpg", link:"https://www.instagram.com/p/DeyhVHOE_OG/?img_index=1" },
        { id: 3, src: "../public/inst3.jpg", link:"https://www.instagram.com/p/DeyhVHOE_OG/?img_index=1" },
        { id: 4, src: "../public/inst4.jpg", link:"https://www.instagram.com/p/DeyhVHOE_OG/?img_index=1" },
        { id: 5, src: "../public/inst5.jpg", link:"https://www.instagram.com/p/DeyhVHOE_OG/?img_index=1" },
    ]
    return (
        <div className=" mb-10 mx-25">
            <div className="flex justify-between items-center ">
            <div className="mx-25">
<p className="uppercase text-gray-500/50">#novamoves</p>    
    <h1 className="font-bold text-4xl">Tag us @novasneakers</h1>
</div>
<button className="border border-gray-300 rounded-3xl px-4 py-2 flex items-center mr-25 cursor-pointer">View on Instagram <MoveRight className="w-4 h-4 ml-2" /></button>
</div>
<div className="">
    <div className="flex justify-center gap-2 mt-5">
        {images.map((images) =>(
            <div key={images.id} className=" mr-1 cursor-pointer">
                <a href={images.link} target="_blank" rel="noopener noreferrer">
                    <img src={images.src} alt="" className="w-60 h-55" />
                </a>
            </div>
        ))}
    </div>
    <div className=""></div>
</div>
            </div>
    )
}