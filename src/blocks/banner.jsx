import { MoveRightBtn } from "../components/button"

export const Banner = () => {
    return (
        <div className="bg-linear-to-br from-[#F1EDEA] from-40% via-[#E3DED8] via-50% to-[#D1CCC6] to-100%  mt-5
                        flex justify-around items-center ">
            <div className="mt-15 mb-15">
                <h2 className="text-lg">MOVE DIFFERENTLY</h2>

                <h1 className="text-8xl my-5"><b>Footwear <br />
                    for a Bolder <br />
                    Tommorow</b>
                </h1>
                <h2 className="text-lg mb-5">Modern sneakers designed for everyday comfort, <br />
                    perfomance and style</h2>
                <MoveRightBtn></MoveRightBtn>

            </div>
            <div className="mt-[-100px]">
                <img src="./banner.png" alt="" />
            </div>


        </div>
    )

}


