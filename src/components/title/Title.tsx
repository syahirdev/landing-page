import "./Title.scss";
import { Diamond } from "./diamond/Diamond";

interface TitleProps {
    title: string,
    titlePrimary?: string,
    subtitle?: string,
    alternate?: string,
}

export const Title = ({title, titlePrimary, subtitle, alternate}: TitleProps) => {
    return (
        <div className="title">
            <div className="titleWrapper">
                <div className={`
                ${alternate == "first" && "alternateText1"} 
                ${alternate == "second" && "alternateText2"} 
                titleHeader`}>
                    <div className="diamondWrapper">
                        <Diamond position="position-1"/>
                        <Diamond position="position-2"/>
                        <Diamond position="position-3"/>
                    </div>
                    <div className="titleText">
                        {title}&nbsp;<span className={`${alternate == "first" && "alternateText1"} primaryText`}>{titlePrimary}</span>
                    </div>
                    <div className="diamondWrapper">
                        <Diamond position="position-3"/>
                        <Diamond position="position-2"/>
                        <Diamond position="position-1"/>
                    </div>
                </div>
                {subtitle && (
                    <div className="subtitleText">
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
};
