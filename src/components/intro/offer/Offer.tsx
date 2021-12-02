import "./Offer.scss";
import { Computer } from "@mui/icons-material";
import { Button } from "../../button/Button";

interface OfferProps {
    icon: any,
    title: string,
    subtitle: string
}

export const Offer = ({icon, title, subtitle}: OfferProps) => {
    return (
        <div className="offer">
            {icon}
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <Button name="READ MORE" border/>
        </div>
    );
};
