import { FaStar } from "react-icons/fa";

const bg1 = '/images/bg_1.jpg';
const person1 = '/images/person_1.jpg';
const person2 = '/images/person_2.jpg';
const person3 = '/images/person_3.jpg';

const Feedback = () => {
    return (
        <section className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-4">Tourist Feedback</h2>
                    </div>
                </div>
                <div className="row ftco-animate">
                    <div className="col-md-12">
                        <div className="carousel-testimony slick-carousel">
                            <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="text">
                                        <p className="star">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </p>
                                        <p className="mb-4">
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: `url(${person1})` }}>
                                            </div>
                                            <div className="ps-3">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="text">
                                        <p className="star">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </p>
                                        <p className="mb-4">
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: `url(${person2})` }}></div>
                                            <div className="ps-3">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="text">
                                        <p className="star">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </p>
                                        <p className="mb-4">
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: `url(${person3})` }}></div>
                                            <div className="ps-3">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="text">
                                        <p className="star">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </p>
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.</p>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: `url(${person1})` }}>
                                            </div>
                                            <div className="pl-3">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimony-wrap py-4">
                                    <div className="text">
                                        <p className="star">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </p>
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                            Vokalia and Consonantia, there live the blind texts.</p>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img" style={{ backgroundImage: `url(${person2})` }}>
                                            </div>
                                            <div className="pl-3">
                                                <p className="name">Roger Scott</p>
                                                <span className="position">Marketing Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback