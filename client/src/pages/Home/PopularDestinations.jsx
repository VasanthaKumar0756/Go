import { Link } from "react-router-dom";
import Slider from 'react-slick';
import Card from "../Utils/Card";


const bgImage = "/images/bg_3.jpg";
const place1 = "/images/place-1.jpg";
const place2 = "/images/place-2.jpg";
const place3 = "/images/place-3.jpg";
const place4 = "/images/place-4.jpg";
// const place5 = "/images/place-5.jpg";

const PopularDestinations = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section
            className="ftco-section img ftco-select-destination" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <span className="subheading">Browse our Destinations</span>
                        <h2 className="mb-4">Popular Destinations by Countries</h2>
                    </div>
                </div>
            </div>
            <div className="container container-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="slick-carousel ftco-animate">
                            <Slider {...settings}>
                                <Card>
                                    <div className="project-destination">
                                        <Link to="#" className="img" style={{ backgroundImage: `url(${place1})` }}>
                                            <div className="text">
                                                <h3>Philippines</h3><span>8 Tours</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="project-destination">
                                        <Link to="#" className="img" style={{ backgroundImage: `url(${place2})` }}>
                                            <div className="text">
                                                <h3>Canada</h3><span>2 Tours</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="project-destination">
                                        <Link to="#" className="img" style={{ backgroundImage: `url(${place3})` }}>
                                            <div className="text">
                                                <h3>Thailand</h3><span>5 Tours</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="project-destination">
                                        <Link to="#" className="img" style={{ backgroundImage: `url(${place4})` }}>
                                            <div className="text">
                                                <h3>Australia</h3><span>5 Tours</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                                {/* <div className="item destination-card destination-card-x">
                                    <div className="project-destination">
                                        <Link to="#" className="img" style={{ backgroundImage: `url(${place5})` }}>
                                            <div className="text">
                                                <h3>Greece</h3><span>7 Tours</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations;
