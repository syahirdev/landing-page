import "./Topbar.scss";
import { Button } from "../button/Button";
import { Search } from "@mui/icons-material";

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="leftBar">
                logo
            </div>
            <div className="rightBar">
                <Button name="HOME"/>
                <Button name="PORTFOLIO"/>
                <Button name="BLOG"/>
                <Button name="PAGES"/>
                <Button name="FEATURES"/>
                <Button name="MEGA MENU"/>
                <Button name="CONTACT"/>
                <Search className="icon"/>
            </div>
        </div>
    );
};
