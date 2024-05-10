type CtaPropsType = {
    textProps: string
}


export const Cta = ({textProps}: CtaPropsType) => {

    return(
        <>
            <button className="ctaUi">
                {textProps}
            </button>
        </>
    )
}