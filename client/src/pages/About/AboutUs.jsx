import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const bg1 = '/images/bg_1.jpg';


const AboutUs = () => {
    return (
        <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${bg1})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                    <div className="col-md-9 ftco-animate pb-5 text-center">
                        <p className="breadcrumbs">
                            <span className="me-2"><Link to="/">Home <FaChevronRight /></Link></span>
                            <span>About us <FaChevronRight /></span>
                        </p>
                        <h1 className="mb-0 bread">About Us</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs