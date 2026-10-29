import {MoveRight} from "lucide-react";
export const Email = ()=>{
    return(
        <div className="bg-[#F1EDEA]
        py-10  mx-25 ">
            <div className="mx-25">
            <p className="uppercase text-md text-gray-500/50">Stay in the loop</p>
            <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl capitalize ">get exclusive drops & offers</h1>
           
            <div className="">
                <input type="email" placeholder="Enter your email" className="bg-white rounded-2xl w-90 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-gray-500/50" />
                <input type="submit"  value="Subscribe" className="bg-black text-white rounded-3xl px-5 py-2 ml-2 cursor-pointer hover:bg-gray-800" /> 
            </div>
            </div>
            <p className="text-md text-gray-500/50"> Be the first to know about new arrivals, special offers and more.</p>
             </div>
        </div>
    )
}