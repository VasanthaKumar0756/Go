import { FaGlobeAsia, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Address = () => {
    return (
        <section className="ftco-section ftco-no-pb contact-section mb-4">
            <div className="container">
                <div className="row d-flex contact-info">
                    <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span><FaMapMarkerAlt /></span>
                            </div>
                            <h3 className="mb-2">Address</h3>
                            <p>Erode, Tamilnadu, INDIA</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span><FaPhoneAlt /></span>
                            </div>
                            <h3 className="mb-2">Contact Number</h3>
                            <p><Link to="tel://1234567920">xxxxxxxxx</Link></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span><FaPaperPlane /></span>
                            </div>
                            <h3 className="mb-2">Email Address</h3>
                            <p><Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-globe"><FaGlobeAsia /></span>
                            </div>
                            <h3 className="mb-2">Website</h3>
                            <p><Link to="#">yoursite.com</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Address