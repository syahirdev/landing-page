import "./Progress.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
    percentage: number
    text: string
}

export const Progress = ({percentage, text}: ProgressProps) => {
    return (
        <div className="progress">
            <div className="progressWrapper">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={2}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        textSize: "18px",
                        pathColor: "#00a99d",
                        textColor: "#f1f1f1"
                    })}
                />
            </div>
            <div className="progressText">{text.toUpperCase()}</div>
        </div>
    );
};
