import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const AboutUs = ({ page }) => {
    return (
        <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${page.image})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                    <div className="col-md-9 ftco-animate pb-5 text-center">
                        <p className="breadcrumbs">
                            <span className="me-2"><Link to="/">Home <FaChevronRight /></Link></span>
                            <span>{page.title} <FaChevronRight /></span>
                        </p>
                        <h1 className="mb-0 bread">{page.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

AboutUs.propTypes = { page: PropTypes.object.isRequired };

// AboutUs.propTypes = {
//     page: PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default AboutUs