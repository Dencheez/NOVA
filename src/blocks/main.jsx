import { UnderBanner } from "./underBanner"
import { BestSellers } from "./BestSellers"
import { UnderSell } from "./underSell"
import { InfoBlock } from "./info"
import { CommentsBlock } from "./Comments"
import { InstagramBlock } from "./instagram"
import {Email} from "./email"
export const Main = () => {
    return (
        <div>
            <UnderBanner></UnderBanner>
            <BestSellers></BestSellers>
            <UnderSell></UnderSell>
            <InfoBlock></InfoBlock>
            <CommentsBlock></CommentsBlock>
            <InstagramBlock></InstagramBlock>
            <Email></Email>
        </div>
    )

}


