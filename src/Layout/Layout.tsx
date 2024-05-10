import { ReactNode } from "react"
import { BurgerMenu } from "../components/burgerMenu/BurgerMenu"

type LayoutPropsType = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutPropsType) => {

    return (
        <>
            <BurgerMenu />
            {children}
        </>
    )
}