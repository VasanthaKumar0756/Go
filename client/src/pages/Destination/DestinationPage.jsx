import AboutUs from "../About/AboutUs"
import SearchSection from "../Home/SearchSection";
import Destinations from "../Home/Destinations";
import Pagination from "./Pagination";


const DestinationPage = () => {
    const page = {
        title: 'Tours list',
        image: '/images/bg_5.jpg',
    };
    
    return (
        <>
            <section className="pb-5"><AboutUs page={page} /></section>
            <section className="pt-2"><SearchSection /></section>
            <section className="ftco-section">
                <div className="container">
                    <Destinations />
                    <Pagination />
                </div>
            </section>
        </>
    )
}

export default DestinationPage