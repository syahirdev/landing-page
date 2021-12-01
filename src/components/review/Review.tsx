import "./Review.scss";
import { ArrowLeft, ArrowRight, FormatQuote } from "@mui/icons-material";

export const Review = () => {
    return (
        <div className="review">
            <div className="reviewCard">
                <span className="reviewerName">ALEXIS SIMPSON</span>
                <span className="reviewerTitle"> - CEO & Developer</span>
            </div>

            <div className="reviewQuotes">
                <FormatQuote className='invertedQuote'/>
                Lorem ipsum dolor sit amet, laudantium, totam rem.
                Morbi sagittis, sem quis lacinia faucibus,
                orci ipsum gravida tortor,
                vel interdum mi sapien ut justo consequat magna,
                id molestie ipsum volutpat quis.
                <FormatQuote/>
            </div>

            <div className="reviewArrow">
                <ArrowLeft className="leftArrow"/>
                <ArrowRight className="rightArrow"/>
            </div>
        </div>
    );
};
