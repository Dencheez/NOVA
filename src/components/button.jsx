import { Search, User, ShoppingCart, MoveRight } from "lucide-react"
import { useEffect, useState } from "react"

export const SearchBtn = () => {
    return (
        <>
            <button className="cursor-pointer">
                <Search></Search>
            </button>
        </>
    )

}

export const UserBtn = () => {
    return (
        <>
            <button className="cursor-pointer">
                <User></User>
            </button>
        </>
    )

}


export const CartBtn = () => {


    return (
        <div className="static cursor-pointer">


            <button id="card" className="cursor-pointer">

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