import "./Skill.scss";
import { Title } from "../title/Title";
import { Progress } from "../progress/Progress";

export const Skill = () => {
    return (
        <div className="skill">
            <Title
                title="OUR POWERFUL"
                titlePrimary="SKILLS"
                subtitle="We're good and experienced at
                different things and areas and
                we promise about quality of our works"
                alternate
            />
            <div className="progressContainer">
                <Progress percentage={75} text='web design'/>
                <Progress percentage={92} text='web development'/>
                <Progress percentage={68} text='speed optimization'/>
                <Progress percentage={100} text='customer support'/>
                <Progress percentage={83} text='marketing'/>
                <Progress percentage={50} text='advertisement'/>
            </div>
        </div>
    );
};
