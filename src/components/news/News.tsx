import { BlockPlanning } from "./blockPlanning/BlockPlanning"
import { Cta } from "../ui/cta/Cta"
import { Title } from "../ui/title/Title"
import { BigNews } from "./bigNews/BigNews"


export const News = () => {

    const thisTitle = "actualités"
    const thisCta = "Découvrir l'agenda"

    const bigNewsImage = "https://d32gva8s8jjsl4.cloudfront.net/img/m/6820-avatar_large.jpg?time=1675262772"
    const bigNewsImage2 = "https://www.lepublicsystemecinema.fr/wp-content/uploads/2015/06/Jury_RedCarpet6_Ouverture-@OlivierVigerie.jpg"

    return (
        <>
            <section className="newsContainer">
                <div className="titleAndBtnContainer">
                    <Title textProps={thisTitle} />
                    <div className="CtaContainer">
                        <Cta textProps={thisCta} />
                    </div>
                </div>
                <div className="planningContainer">
                    <BigNews imageProps={bigNewsImage} planningProps={"interview"} tagColorProps={"#d81653dd"} colorProps={"#CF3E01"} monthProps={"juin 2021"} light={true}>
                        <p>Dans la confidence de Costa Gavras</p>
                    </BigNews>
                    <BlockPlanning planningProps={"festival"} colorProps={"green"} monthProps={"mai 2021"}>
                        <p>Le calcoa 2019 dévoile son palmarès</p>
                    </BlockPlanning>
                    <BlockPlanning monthProps={"mai 2021"} />
                    <BlockPlanning planningProps={"rencontres"} colorProps={"#FF8B0F"} monthProps={"mai 2021"}>
                        <p>27eme édition des rencontres cinématographiques de Dijon</p>
                    </BlockPlanning>
                    <BlockPlanning monthProps={"avril 2021"} />
                    <BigNews imageProps={bigNewsImage2} planningProps={"festival"} colorProps={"green"} monthProps={"mars 2021"} light={false}>
                        <p>Deauville : le 45eme Festival du cinéma américain</p>
                    </BigNews>
                    <BlockPlanning planningProps={"rencontres"} colorProps={"#FF8B0F"} monthProps={"mai 2021"}>
                        <p>27eme édition des rencontres cinématographiques de Dijon</p>
                    </BlockPlanning>
                    <BlockPlanning planningProps={"festival"} colorProps={"green"} monthProps={"avril 2021"}>
                        <p>Le calcoa 2018 dévoile la programmation</p>
                    </BlockPlanning>
                    <BlockPlanning monthProps={"mars 2021"} />
                    <BlockPlanning monthProps={"février 2021"} />
                    <BlockPlanning monthProps={"janvier 2021"} />
                    <BlockPlanning planningProps={"film"} colorProps={"#CF3E01"} monthProps={"décembre 2021"}>
                        <p>Le calcoa 2018 dévoile la programmation</p>
                    </BlockPlanning>
                    <BlockPlanning monthProps={"novembre 2020"} />
                    <BlockPlanning monthProps={"octobre 2020"} />
                </div>
            </section>
        </>
    )
}