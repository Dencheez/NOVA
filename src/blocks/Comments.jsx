import {Star} from "lucide-react"

export const CommentsBlock = () => {
    const comments = [
        { id: 1, name: "John Doe", title:"Verified Buyer", comment: "Super comfortable and stylish, I wear them everywhere!", img: "../public/comm1.png" },
        { id: 2, name: "Jane Smith",  title:"Verified Buyer",comment: "Beast sneakers I've owned. The quality is amazing.", img: "../public/comm2.png" },
        { id: 3, name: "Mike Johnson", title:"Verified Buyer", comment: "Great fit and looks premium, Highly recommended!", img: "../public/comm3.png" },
    ]
    
    return(
        <div className="mb-10 mx-25">
            <p className="uppercase text-gray-500/50">real people, real stories.</p>
            <h1 className="text-4xl font-bold">Loved by Our Community</h1>
            <div className="flex justify-center mt-5">
                {comments.map((comment) => (
                    <div key={comment.id} className=" border border-gray-300 p-6 mr-4">
                        <p className="text-lg">"{comment.comment}"</p>
                        <div className="flex justify-between mt-2">
                            <div className="flex">
                            <img src={comment.img} alt={comment.name} className="w-10 h-10 rounded-full mr-2" />
                            <div className="ml-2">
                                <p className="font-bold">{comment.name}</p>
                                <p className="text-gray-500">{comment.title}</p>
                                </div>
                            </div>
                             <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}