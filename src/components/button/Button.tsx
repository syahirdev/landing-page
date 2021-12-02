import "./Button.scss";
// @ts-ignore
import { animateScroll as scroll, Link } from "react-scroll";

interface ButtonProps {
    name: string,
    border?: boolean,
    link?: string,
}

export const Button = ({name, link, border}: ButtonProps) => {
    return (
        <>
            {link ? (
                <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={`${border && "border"} button`}>
                        {name}
                    </div>
                </Link>
            ) : (
                <div className={`${border && "border"} button`}>
                    {name}
                </div>
            )}
        </>
    );
};
