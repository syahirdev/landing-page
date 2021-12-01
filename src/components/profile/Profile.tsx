import "./Profile.scss";
import { Email, Phone } from "@mui/icons-material";

interface ProfileProps {
    name: string,
    title: string,
    email: string,
    phone: string,
    image: string
}

export const Profile = ({name, title, email, phone, image}: ProfileProps) => {
    return (
        <div className="profile">
            <div className="topProfile">
                <img src={`./assets/images/${image}`} alt="" className="profileImg"/>
            </div>
            <div className="profileName">
                {name.toUpperCase()}
            </div>
            <div className="bottomProfile">
                <div className="profileTitle">
                    {title}
                </div>
                <hr/>
                <div className="profileContact">
                    <Email className="icon"/>
                    <span>{email}</span>
                </div>
                <div className="profileContact">
                    <Phone className="icon"/>
                    <span>{phone}</span>
                </div>
            </div>
        </div>
    );
};
