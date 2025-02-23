import { Link } from 'react-router-dom';
import { FaHeart, FaTwitter, FaFacebookF, FaInstagram, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const bg3 = "/images/bg_3.jpg";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* newsletter_area_start */}
            <div className="newsletter_area overlay" style={{ backgroundColor: "#040E27" }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="newsletter_text">
                                        <h4>Subscribe Our Newsletter</h4>
                                        <p>Subscribe newsletter to get offers and about new places to discover.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="mail_form">
                                        <div className="row no-gutters">
                                            <div className="col-lg-9 col-md-8">
                                                <div className="newsletter_field">
                                                    <input type="email" placeholder="Your mail" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <div className="newsletter_btn">
                                                    <button className="boxed-btn4" type="submit">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />


            {/* newsletter_area_end */}
            <footer className="ftco-footer bg-bottom ftco-no-pt" style={{ backgroundImage: `url(${bg3})` }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-left">
                                    <li className="ftco-animate"><Link to="#"><span><FaTwitter className='text-white align-middle' /></span></Link></li>
                                    <li className="ftco-animate"><Link to="#"><span><FaFacebookF /></span></Link></li>
                                    <li className="ftco-animate"><Link to="#"><span>< FaInstagram /></span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Infromation</h2>
                                <ul className="list-unstyled">
                                    <li><Link to="#" className="py-2 d-block">Online Enquiry</Link></li>
                                    <li><Link to="#" className="py-2 d-block">General Enquiries</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Booking Conditions</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Privacy and Policy</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Refund Policy</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Call Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Experience</h2>
                                <ul className="list-unstyled">
                                    <li><Link to="#" className="py-2 d-block">Adventure</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Hotel and Restaurant</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Beach</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Nature</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Camping</Link></li>
                                    <li><Link to="#" className="py-2 d-block">Party</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon"><FaMapMarkerAlt /></span>
                                            <span className="text"> Erode, TamilNadu, INDIA</span>
                                        </li>
                                        <li><Link to="#"><span className="icon"><FaPhoneAlt /></span>
                                            <span className="text">xxxxxxxxx</span>
                                        </Link></li>
                                        <li><Link to="#"><span className="icon"><FaPaperPlane /></span><span
                                            className="text">info@yourdomain.com</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright &copy; {currentYear} All rights reserved | This is made with &nbsp;
                                <FaHeart style={{ color: "red" }} aria-hidden="true" /> by
                                <Link to="/" style={{ fontWeight: 'bold' }}> Go Orb </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer