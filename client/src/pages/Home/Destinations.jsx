const destination1 = '/images/destination-1.jpg';
const destination2 = '/images/destination-2.jpg';
const destination3 = '/images/destination-3.jpg';
const destination4 = '/images/destination-4.jpg';
const destination5 = '/images/destination-5.jpg';
const destination6 = '/images/destination-6.jpg';

const Destinations = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <span className="subheading">Destination</span>
                        <h2 className="mb-4">Best Tour Destination</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination1})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">8 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-mountains"></span>Near Mountain</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination2})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">10 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination3})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">7 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination4})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">8 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination5})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">10 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="project-wrap">
                            <a href="#" className="img destination-img"
                                style={{ backgroundImage: `url(${destination6})` }}>
                                <span className="price">$550/person</span>
                            </a>
                            <div className="text p-4">
                                <span className="days">7 Days Tour</span>
                                <h3><a href="#">Banaue Rice Terraces</a></h3>
                                <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                <ul>
                                    <li><span className="flaticon-shower"></span>2</li>
                                    <li><span className="flaticon-king-size"></span>3</li>
                                    <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destinations