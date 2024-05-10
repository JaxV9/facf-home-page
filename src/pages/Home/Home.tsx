import { Hero } from "../../components/hero/Hero"
import { News } from "../../components/news/News"
import { Separator } from "../../components/ui/separator/Separator"


export const Home = () => {

    return(
        <>
            <Hero />
            <Separator />
            <News />
        </>
    )
}