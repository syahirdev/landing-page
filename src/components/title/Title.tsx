import "./Title.scss";

interface TitleProps {
    title: string,
    titlePrimary?: string,
    subtitle: string,
    alternate?: boolean
}

export const Title = ({title, titlePrimary, subtitle, alternate}: TitleProps) => {
    return (
        <div className="title">
            <div className={`${alternate && "alternateTitleText"} titleText`}>
                {title} <span className="primaryText">{titlePrimary}</span>
            </div>
            <div className="subtitleText">
                {subtitle}
            </div>
        </div>
    );
};
