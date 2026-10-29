import { SearchBtn, UserBtn, CartBtn } from "./button"
import { useCart } from "../context/CartContext"

export const Navbar = () => {

    const { cartCounter, setModalCart } = useCart();

    return (
        <>
            <ul className="list-none flex items-center justify-between mx-15">
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
                    <li className="relative  ">
                        <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {cartCounter}
                        </span>
                        <CartBtn></CartBtn>


                    </li>
                </div>
            </ul>
        </>
    )

}


