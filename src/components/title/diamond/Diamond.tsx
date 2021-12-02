import "./Diamond.scss";

interface DiamondProps {
    position: string
}
export const Diamond = ({position}: DiamondProps) => {
    return (
        <section className="shape-section">
            <div className={`diamond-shape ${position}`}/>
        </section>
    );
};
