import "./MenuLink.scss";
// @ts-ignore
import { animateScroll as scroll, Link } from "react-scroll";

interface MenuLinkProps {
    link: string,
    name: string,
    setMenu: any
}

export const MenuLink = ({link, name, setMenu}: MenuLinkProps) => {
    return (
        <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
        >
            <li onClick={() => setMenu(false)}>{name}</li>
        </Link>
    );
};
