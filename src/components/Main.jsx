import Activites from "./Activites";
import AskQuestions from "./AskQuestions";
import Breath from "./Breath";
import DailyQuotes from "./DailyQuotes";
import Footer from "./Footer";
import Hero from "./Hero";
import MoodTracker from "./MoodTracker";


export default function Main () {
    return (
        <div className="overflow-y-auto overflow-x-hidden h-screen mb-10">
            <Hero/>
            {/* <Breath/> */}
            {/* <MoodTracker/> */}
            {/* <DailyQuotes/> */}
            {/* <Activites/> */}
            {/* <AskQuestions/> */}
            {/* <Footer/> */}
        </div>
    )
}