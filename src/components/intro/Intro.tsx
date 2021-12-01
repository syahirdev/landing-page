import "./Intro.scss";
import { Offer } from "./offer/Offer";
import { Title } from "../title/Title";

export const Intro = () => {
    return (
        <div className="intro">
            <Title
                title="WHAT WE"
                titlePrimary="OFFER"
                subtitle="We offer our customers
                the best services & solutions,
                this is our main services list"
            />
            <div className="offerContainer">
                <Offer/>
                <Offer/>
                <Offer/>
            </div>
        </div>
    );
};
