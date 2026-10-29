import{MoveRight} from "lucide-react";

export const InfoBlock = () => {

    return (
        <div className="flex justify-center relative mb-10">
             <div className="absolute top-[100px] left-[150px] ">
                <div className="text-white flex flex-col ">
                    <h2 className="text-white/50 uppercase text-lg mt-[-50px] ">    
                    
                    our technology</h2>
                    <h1 className="text-7xl my-5">Engineered <br />for All-Day Comfort</h1>
                    <p>Advanced cushioning, breathable materials <br />
                    and lightweight design - so you can go go further <br />
                    in every step.</p>
                </div>
            <button className="flex bg-white text-black rounded-full py-3 px-8 hover:bg-gray-200 cursor-pointer mt-10">Learn more <MoveRight className="ml-1 mx-1  my-0.5 p-1" />    </button>
        </div>
            <img src="./bigbanner.png" alt="" className=" h-[500px] w-[1360px]" />
        </div>
    );
}