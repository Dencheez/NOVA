import mensImg from "../assets/mensImg.png"
import { CartBtn } from "../components/button"
import { Star } from "lucide-react"

export const BestSellers = () => {
    const sellersCard = [
        { id: 1, name: "Nike", title: "Nike Sneakers", price: "$4 000", rate: "4.8", img: mensImg, },
        { id: 2, name: "Nike", title: "Nike Sneakers", price: "$4 000", rate: "4.8", img: mensImg, },
        { id: 3, name: "Nike", title: "Nike Sneakers", price: "$4 000", rate: "4.8", img: mensImg, },
        { id: 4, name: "Nike", title: "Nike Sneakers", price: "$4 000", rate: "4.8", img: mensImg, },
    ]
    return (
        <div className="mt-10 ">
            <div className="">
                <p className="text-gray-500">POPULAR RIGHT NOW</p>
                <h1 className="text-3xl"><strong>Best Sellers</strong></h1>
            </div>
            <div className=" flex mt-5 gap-5 justify-center">

                {sellersCard.map((sellersCard) =>
                (
                    <div className="flex flex-col p-7  " key={sellersCard.id}>
                        <img src={sellersCard.img} alt="1" className="bg-[#E7E4E1] p-5 rounded-lg" />

                        <div className="flex justify-between p-2 items-center">
                            <div className="">
                                <h1><b>{sellersCard.name}</b></h1>
                                <p className="text-gray-100">{sellersCard.title}</p>
                                <p><b>{sellersCard.price}</b></p>
                                <p className="flex gap-1"><Star className="text-yellow-500 w-5"></Star><strong>{sellersCard.rate}</strong></p>
                            </div>

                            <button className="text-white bg-black p-6 
                            w-5 h-5 rounded-lg flex justify-center items-center "><CartBtn></CartBtn></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}