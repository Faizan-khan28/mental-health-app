import Activites from "./Activites";
import AskQuestions from "./AskQuestions";
import Breath from "./Breath";
import Cards from "./Cards";
import DailyQuotes from "./DailyQuotes";
import Footer from "./Footer";
import Hero from "./Hero";
import MoodTracker from "../pages/MoodTracker";
import TrackMood from "./TrackMood";
import Breathing from "./Breathing";
import Play from "./play";
import Consultant from "./Consultant";


export default function Main () {
    return (
        <div className="overflow-y-scroll overflow-x-hidden h-screen mb-10">
            <Hero/>
            <Cards/>
            <TrackMood/>
            <Breathing/>
            <Play/>
            <Activites/>
            <DailyQuotes/>
            <Consultant/>
            {/* <AskQuestions/> */}
            {/* <Footer/> */}
        </div>
    )
}