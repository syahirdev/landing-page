import "./FeatureDetails.scss";
import { Computer } from "@mui/icons-material";

interface FeatureDetailsProps {
    icon: any,
    title: string,
    subtitle: string,
    description: string,
}

export const FeatureDetails = ({icon, title, subtitle, description}: FeatureDetailsProps) => {
    return (
        <div className="feature">
            {/*Logo*/}
            <div className="leftFeature">
                <div className="icon">{icon}</div>
                <div className="triangleContainer">
                    <div className="triangle"/>
                    <div className="square"/>
                    <div className="triangle double"/>
                </div>
            </div>

            {/*Description*/}
            <div className="rightFeature">
                <div className="featureTitle">{title.toUpperCase()}</div>
                <div className="featureSubtitle">{subtitle}</div>
                <div className="featureDescription">{description}</div>
            </div>
        </div>
    );
};
