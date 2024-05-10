type TitlePropsType = {
    textProps: string
}

export const Title = ({textProps}: TitlePropsType) => {

    return(
        <>
            <h2 className="titleUi">
                {textProps}
            </h2>
        </>
    )
}