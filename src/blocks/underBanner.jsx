import { MoveRight } from "lucide-react"
import mensImg from "../assets/mensImg.png";


export const UnderBanner = () => {
    const cards = [
        { id: 1, name: "Men's Sneakers", btn: "Explore", img: mensImg },
        { id: 2, name: "Women's Sneakers", btn: "Explore", img: mensImg },
        { id: 3, name: "Running Shoes", btn: "Explore", img: mensImg },
        { id: 4, name: "Lifestyle", btn: "Explore", img: mensImg }
    ];
    return (
        <div className="mt-5 flex justify-center">
            <div className="flex gap-5 ">
                {cards.map((cards) => (
                    <div className=" flex flex-col justify-start bg-[#E7E4E1] p-5 rounded-lg cursor-pointer" key={cards.id}>
                        <h1 className="text-lg mb-1"><b>{cards.name}</b></h1>
                        <button className="flex rounded-2xl">{cards.btn} <MoveRight className="w-5 h-4 my-1.5 mx-1"></MoveRight> </button>
                        <img src={cards.img} alt="card.name" className="w-65" />
                    </div>
                ))}
            </div>
        </div>
    )
}