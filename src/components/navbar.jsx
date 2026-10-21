import { SearchBtn, UserBtn, CartBtn } from "./button"
import { useEffect } from "react"

export const Navbar = () => {


    return (
        <>
            <ul className="list-none flex items-center justify-between">
                <li>
                    <b>  <a href="#" className="text-2xl">NOVA</a></b>
                </li>
                <div className=" flex gap-7">
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">New Arrivals</a>
                    </li>
                    <li>
                        <a href="#">Best Sellers</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </div>

                <div className="flex gap-5">

                    <li>
                        <a href="#">
                            <SearchBtn></SearchBtn>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <UserBtn></UserBtn>
                        </a>
                    </li>
                    <li>
                        <a href="#"></a>
                        <CartBtn></CartBtn>
                    </li>
                </div>
            </ul>
        </>
    )

}


