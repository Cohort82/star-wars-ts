import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import {defaultHero} from "../utils/constants.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero || defaultHero}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;