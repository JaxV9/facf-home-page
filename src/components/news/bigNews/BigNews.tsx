import { ReactNode } from "react";

type BigNewsPropsType = {
    planningProps?: string;
    colorProps?: string;
    tagColorProps?: string
    monthProps: string;
    children?: ReactNode;
    light: boolean,
    imageProps: string
}


export const BigNews = ({ planningProps, colorProps, tagColorProps, monthProps, children, light, imageProps}: BigNewsPropsType) => {

    return(
        <>
            <div className="bigNews" style={light ? {backgroundColor:"#FFFFFF"} : {backgroundColor:"#FFFFFF00"}}>
                <div className="bigNewsImage" style={{backgroundImage:"url("+imageProps+")"}}>
                    {tagColorProps ? <div className="colorTagBigNews" style={{backgroundColor:tagColorProps}}></div>: null}
                </div>
                <div className={light ? "planningPropsContainerLight":"planningPropsContainer"}>
                        <div className="planningTagColor" style={{backgroundColor: colorProps}}></div>
                        <span>{planningProps}</span>
                        <span className="planningDateProps">{monthProps}</span>
                </div>
                <div className={light ? "planningDescrLight" : "planningDescr"}>
                    {children}
                </div>
            </div>
        </>
    )
}