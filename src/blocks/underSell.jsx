import { MenBannerBtn, WomenBannerBtn } from "../components/button"


export const UnderSell = () => {
    return (
        <div className="flex justify-center gap-4 mb-15">
            <div className="w-[668px] relative">
                <div className="z-1 absolute top-15 left-5">
                    <h2 className="uppercase text-5xl text-white"> <b>Build for <br /> real life</b></h2>
                    <p className="my-5  text-white">From city streets to weekend escapes, <br />
                        our sneakers move with you.</p>
                    <MenBannerBtn></MenBannerBtn>
                </div>
                <img src="./banner1.png" alt="" />
            </div>
            <div className="w-[668px] relative">
                <div className="z-1 absolute top-5 left-5">
                    <h2 className="uppercase text-5xl"> <b>style <br /> in every <br />step</b></h2>
                    <p className="my-4">Designed for comfort, <br />
                        made for your everyday.</p>
                    <WomenBannerBtn></WomenBannerBtn>
                </div>
                <img src="./banner2.png" alt="" />
            </div>
        </div>
    )
}