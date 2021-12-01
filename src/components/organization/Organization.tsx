import "./Organization.scss";
import { Profile } from "../profile/Profile";

export const Organization = () => {
    return (
        <div className="organization">
            <div className="profileWrapper">
                <Profile
                    name="Mira Filzah"
                    title="Hiring Manager"
                    email="mira.filzah@gmail.com"
                    phone="+60-12-345-6789"
                    image="profile-1.jpg"
                />
                <Profile
                    name="Can't See Me"
                    title="No Where To Be Found"
                    email="invisible@gmail.com"
                    phone="+60-12-345-6789"
                    image="profile-2.jpg"
                />
                <Profile
                    name="Siti Lisa"
                    title="Singer"
                    email="lisa.berhijrah@gmail.com"
                    phone="+60-12-345-6789"
                    image="profile-3.jpg"
                />
                <Profile
                    name="Pewdiepie"
                    title="Entertainer"
                    email="plz.subscribe@gmail.com"
                    phone="+60-12-345-6789"
                    image="profile-4.png"
                />
            </div>
            <div className="button">VIEW ALL WORKS</div>
        </div>
    );
};
