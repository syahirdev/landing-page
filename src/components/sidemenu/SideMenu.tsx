import "./SideMenu.scss";
import { MenuLink } from "../menuLink/MenuLink";


export const SideMenu = ({menu, setMenu}: any) => {
    return (
        <div className={`menu ${menu && `active`}`}>
            <ul>
                <MenuLink name="HOME" link="header" setMenu={setMenu}/>
                <MenuLink name="PORTFOLIO" link="offer" setMenu={setMenu}/>
                <MenuLink name="SKILLS" link="skill" setMenu={setMenu}/>
                <MenuLink name="FEATURES" link="features" setMenu={setMenu}/>
                <MenuLink name="ORGANIZATION" link="organization" setMenu={setMenu}/>
                <MenuLink name="CONTACT" link="contact" setMenu={setMenu}/>
                <MenuLink name="REVIEW" link="review" setMenu={setMenu}/>
            </ul>
        </div>
    );
};
