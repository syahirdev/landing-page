import "./Header.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Title } from "../title/Title";

export const Header = () => {
    return (
        <div className="header" id="header">
            <div className="wrapper">
                <div className="smallText">WHAT ARE YOU WAITING FOR?</div>
                <div className="bigText">LET'S BE CREATIVE !</div>
                <div className="containerText">LOREM IPSUM DOLOR SI AMET</div>
                <div className="mottoText">
                    <Title
                        title="START"
                        titlePrimary="DOING THAT"
                        alternate="first"
                    />
                </div>
                <KeyboardArrowDown className="icon"/>
            </div>
        </div>
    );
};
