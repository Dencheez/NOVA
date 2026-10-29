import { Search, User, ShoppingCart, MoveRight, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "../context/CartContext" // подставьте свой путь к контексту

export const SearchBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex items-center">
            {!isOpen && (
                <button
                    className="cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <Search />
                </button>
            )}

            {isOpen && (
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="absolute z-0 right-0 top-[-5px] px-2 py-1 border rounded"
                        autoFocus
                    />
                    <button
                        className="absolute right-0.5 z-1 top-0 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <X />
                    </button>
                </div>
            )}
        </div>
    );
};

export const UserBtn = () => {
    return (
        <>
            <button className="cursor-pointer">
                <User></User>
            </button>
        </>
    )

}

export const MenBannerBtn = () => {
    return (
        <button className="flex bg-white p-2 px-7 rounded-[100px] aligt-center text-sm cursor-pointer">
            Shop Men's <MoveRight className="ml-1 mx-1 p-1"></MoveRight>

        </button>
    );
}
export const WomenBannerBtn = () => {
    return (
        <button className="flex bg-black text-white  p-3 px-7 rounded-[100px] aligt-center text-sm cursor-pointer">
            Shop Women's <MoveRight className="ml-1 mx-1 p-1"></MoveRight>
        </button>
    );
}


export const CartBtn = () => {
const { setModalCart } = useCart();

    return (
        <div className="static cursor-pointer">


            <button id="card" className="cursor-pointer" onClick={() => setModalCart(true)}>

                <ShoppingCart></ShoppingCart>
            </button>
        </div>
    )

}

export const MoveRightBtn = () => {
    return (
        <button className=" flex text-white bg-black p-3 px-5 rounded-[100px] aligt-center text-lg cursor-pointer
        ">
            Shop Collection <MoveRight className="ml-3 my-1 mx-1"></MoveRight>
        </button>
    )
}