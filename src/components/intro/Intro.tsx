import "./Intro.scss";
import { Offer } from "./offer/Offer";

export const Intro = () => {
    return (
        <div className="intro">
            <div className="introTitle">
                WHAT WE <span className="primaryText">OFFER</span>
            </div>
            <div className="introSubtitle">
                We offer our customers the best services &
                solutions, his is our main services list
            </div>
            <div className="offerContainer">
                <Offer/>
                <Offer/>
                <Offer/>
            </div>
        </div>
    );
};
