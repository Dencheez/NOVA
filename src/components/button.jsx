import { Search, User, ShoppingCart, MoveRight } from "lucide-react"
import { useEffect, useState } from "react"

export const SearchBtn = () => {
    return (
        <>
            <button>
                <Search></Search>
            </button>
        </>
    )

}

export const UserBtn = () => {
    return (
        <>
            <button>
                <User></User>
            </button>
        </>
    )

}


export const CartBtn = () => {


    return (
        <>
            <button id="card">
                <ShoppingCart></ShoppingCart>
            </button>
        </>
    )

}

export const MoveRightBtn = () => {
    return (
        <button className=" flex text-white bg-black p-3 px-5 rounded-[100px] aligt-center text-lg
        ">
            Shop Collection <MoveRight className="ml-3 my-1 mx-1"></MoveRight>
        </button>
    )
}