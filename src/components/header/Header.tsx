import "./Header.scss";
import { KeyboardArrowDown } from "@mui/icons-material";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="smallText">WHAT ARE YOU WAITING FOR?</div>
                <div className="bigText">LET'S BE CREATIVE !</div>
                <div className="containerText">LOREM IPSUM DOLOR SI AMET</div>
                <div className="mottoText">
                    <span className="primaryText">START</span> DOING THAT
                </div>
                <KeyboardArrowDown className="icon"/>
            </div>
        </div>
    );
};
