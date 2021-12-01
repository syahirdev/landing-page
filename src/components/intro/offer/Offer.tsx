import "./Offer.scss";
import { Computer } from "@mui/icons-material";
import { Button } from "../../button/Button";

export const Offer = () => {
    return (
        <div className="offer">
            <Computer className="icon"/>
            <div className="title">EASY CUSTOMIZATION</div>
            <div className="subtitle">
                Proin in magna a ipsum vivuverria
                Proin in magna a ipsum vivuverria
                Proin in magna a ipsum vivuverria
            </div>
            <Button name="READ MORE" border/>
        </div>
    );
};
