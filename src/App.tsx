import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Skill } from "./components/skill/Skill";
import { Features } from "./components/features/Features";
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
            <Features/>
            <Organization/>
            <Message/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default App;
