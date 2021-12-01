import './App.scss'
import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Skill } from "./components/skill/Skill";
import { Features } from "./components/features/Features";
import { Organization } from "./components/organization/Organization";
import { Message } from "./components/message/Message";
import { Review } from "./components/review/Review";
import { Footer } from "./components/footer/Footer";
import { Topbar } from "./components/topbar/Topbar";
import { Copyright } from "./components/copyright/Copyright";
import { useState } from "react";
import { SideMenu } from "./components/sidemenu/SideMenu";

const App = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="App">
            <Header/>
            <Topbar menu={menu} setMenu={setMenu}/>
            <SideMenu menu={menu} setMenu={setMenu}/>
            <Intro/>
            <Skill/>
            <Features/>
            <Organization/>
            <Message/>
            <Review/>
            <Footer/>
            <Copyright/>
        </div>
    );
};

export default App;
