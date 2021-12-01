import "./Topbar.scss";
import { Button } from "../button/Button";
import { Search } from "@mui/icons-material";

export const Topbar = ({menu, setMenu}: any) => {
    return (
        <div className="topbar">
            <div className="leftBar">
                logo
            </div>
            <div className="rightBar">
                <Button name="HOME" link="header"/>
                <Button name="PORTFOLIO" link='offer'/>
                <Button name="SKILLS" link='skill'/>
                <Button name="FEATURES" link='features'/>
                <Button name="ORGANIZATION" link='organization'/>
                <Button name="CONTACT" link='contact'/>
                <Button name="REVIEW" link='review'/>
                <Search className="icon"/>
            </div>
            <div className="rightBarBurger">
                <div className="hamburger" onClick={() => {
                    console.log(menu);
                    setMenu(!menu);
                }}>
                    <span className="line1"/>
                    <span className="line1"/>
                    <span className="line1"/>
                </div>
                <Search className="icon"/>
            </div>
        </div>
    );
};
