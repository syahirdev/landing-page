import "./Footer.scss";
import { Company } from "./company/Company";
import { Apple, ArrowLeft, ArrowRight, Facebook, Google, LinkedIn } from "@mui/icons-material";

export const Footer = () => {
    return (
        <div className="footer">
            <ArrowLeft className="arrowIcon leftArrow"/>
            <div className="companyWrapper">
                <Company icon={<Apple className="companyIcon"/>} name="Apple"/>
                <Company icon={<Facebook className="companyIcon"/>} name="Facebook"/>
                <Company icon={<Google className="companyIcon"/>} name="Google"/>
                <Company icon={<LinkedIn className="companyIcon"/>} name="LinkedIn"/>
            </div>
            <ArrowRight className="arrowIcon rightArrow"/>
        </div>
    );
};
