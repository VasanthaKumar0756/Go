import AboutUs from "./AboutUs"
import Memorable from "./Memorable"
import MemorableVideo from "./MemorableVideo"
import Welcome from "./Welcome"
import Feedback from "../Home/Feedback";


const AboutPage = () => {
    const page = {
        title: 'About us',
        image: '/images/bg_1.jpg',
    };

    return (
        <>
            <AboutUs page={page} />
            <Welcome />
            <MemorableVideo />
            <Memorable />
            <Feedback />
        </>
    )
}

export default AboutPage