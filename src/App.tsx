import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Skill } from "./components/skill/Skill";
import { Benefit } from "./components/benefit/Benefit";
import { Organization } from "./components/organization/Organization";
import { Message } from "./components/message/Message";
import { Review } from "./components/review/Review";
import { Footer } from "./components/footer/Footer";
import { Topbar } from "./components/topbar/Topbar";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Topbar/>
            <Intro/>
            <Skill/>
            <Benefit/>
            <Organization/>
            <Message/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default App;
