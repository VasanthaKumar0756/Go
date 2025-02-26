import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"

const MemorableVideo = () => {
    return (
        <section className="ftco-section ftco-about img" style={{ backgroundImage: `url(${'/images/bg_4.jpg'})` }}>
            <div className="overlay"></div>
            <div className="container py-md-5">
                <div className="row py-md-5">
                    <div className="col-md d-flex align-items-center justify-content-center">
                        <Link className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
                            to="#"><span><FaPlay /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>)
}

export default MemorableVideo