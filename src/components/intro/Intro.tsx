import "./Intro.scss";
import { Offer } from "./offer/Offer";
import { Title } from "../title/Title";
import { Computer, Extension, Support } from "@mui/icons-material";

export const Intro = () => {
    const subtitle = "Proin in magna a ipsum viverra scelerisq enec turp. Nunc " +
        "vestibulum fringilla accumsan ornare quis.";

    return (
        <div className="intro" id="offer">
            <Title
                title="WHAT WE"
                titlePrimary="OFFER"
                subtitle="We offer our customers
                the best services & solutions,
                this is our main services list"
            />
            <div className="offerContainer">
                <Offer
                    icon={<Computer className="icon"/>}
                    title="Responsive & Multipurpose"
                    subtitle={subtitle}/>
                <Offer
                    icon={<Extension className="icon"/>}
                    title="Easy Customization"
                    subtitle={subtitle}/>
                <Offer
                    icon={<Support className="icon"/>}
                    title="Awesome Friendly Support"
                    subtitle={subtitle}/>
            </div>
        </div>
    );
};
