import { Link } from "react-router-dom";

const image1 = '/images/image_1.jpg';
const image2 = '/images/image_2.jpg';
const image3 = '/images/image_3.jpg';


const Posts = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <span className="subheading">Our Blog</span>
                        <h2 className="mb-4">Recent Post</h2>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <Link to="/blog" className="block-20"
                                style={{ backgroundImage: `url(${image1})` }}>
                            </Link>
                            <div className="text">
                                <div className="d-flex align-items-center mb-4 topp">
                                    <div className="one">
                                        <span className="day">11</span>
                                    </div>
                                    <div className="two">
                                        <span className="yr">2020</span>
                                        <span className="mos">September</span>
                                    </div>
                                </div>
                                <h3 className="heading"><Link to="#" style={{ textDecoration: 'none' }}>Most Popular Place In This World</Link></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><Link to="#" className="btn btn-primary">Read more</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <Link to="blog-single.html" className="block-20"
                                style={{ backgroundImage: `url(${image2})` }}>
                            </Link>
                            <div className="text">
                                <div className="d-flex align-items-center mb-4 topp">
                                    <div className="one">
                                        <span className="day">11</span>
                                    </div>
                                    <div className="two">
                                        <span className="yr">2020</span>
                                        <span className="mos">September</span>
                                    </div>
                                </div>
                                <h3 className="heading"><Link to="#" style={{ textDecoration: 'none' }} >Most Popular Place In This World</Link></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><Link to="#" className="btn btn-primary">Read more</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry">
                            <Link to="blog-single.html" className="block-20"
                                style={{ backgroundImage: `url(${image3})` }}>
                            </Link>
                            <div className="text">
                                <div className="d-flex align-items-center mb-4 topp">
                                    <div className="one">
                                        <span className="day">11</span>
                                    </div>
                                    <div className="two">
                                        <span className="yr">2020</span>
                                        <span className="mos">September</span>
                                    </div>
                                </div>
                                <h3 className="heading"><Link to="#" style={{ textDecoration: 'none' }}>Most Popular Place In This World</Link></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p><Link to="#" className="btn btn-primary">Read more</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts