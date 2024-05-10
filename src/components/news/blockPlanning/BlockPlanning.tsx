import { ReactNode } from "react";

type BlockPlanningPropsType = {
    planningProps?: string;
    colorProps?: string;
    monthProps: string;
    children?: ReactNode
}

export const BlockPlanning = ({planningProps, colorProps, monthProps, children}: BlockPlanningPropsType) => {


    return (
        <>
            <div className="blockPlanningContainer">
                <div className="planningPropsContainer">
                        <div className="planningTagColor" style={{backgroundColor: colorProps}}></div>
                        <span>{planningProps}</span>
                        <span className="planningDateProps">{monthProps}</span>
                </div>
                <div className="planningDescr">
                    {children}
                </div>
            </div>
        </>
    )
}