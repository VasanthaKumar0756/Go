import { Link } from "react-router-dom"


const Welcome = () => {
    return (
        <section className="ftco-section services-section">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 order-md-last heading-section ps-md-5 ftco-animate d-flex align-items-center">
                        <div className="w-100">
                            <span className="subheading">Welcome to Go-Orb</span>
                            <h2 className="mb-4">It&apos;s time to start your Adventure</h2>
                            <h5>
                                <blockquote>
                                    “ The world is a book and those who do not travel read only one page ” ~ Saint Augustine
                                </blockquote>
                            </h5>
                            <p> We all need to fall off the radar and escape reality every once in a while. Travel allows us to
                                enjoy complete anonymity in new and unexplored territories. It gives us absolute freedom to
                                live
                                in the moment and it allows us to be anyone, to go anywhere and to do anything. The best part
                                of
                                my six-month trip around the world, way back when, was the freedom of being able to just wake
                                up
                                and pick a spot anywhere on the map and find a way to get there. Travel enables us to be
                                spontaneous and seek new experiences...
                            </p>

                            <p> Our lives are time-starved and technology-driven and, let’s be honest, it’s not often that we
                                actually take the necessary time to de-stress and truly switch off. Travel allows us to escape
                                life’s daily demands, dramas and deadlines and enables us to clear our minds. It encourages us
                                to recharge our batteries and to truly disconnect (from our phones, Wi-Fi, emails, laptops,
                                social media, etc.) in order to reconnect (with ourselves, each other and the natural
                                environment)...
                            </p>
                            <p>
                                <Link to="/destinations" className="btn btn-primary py-3 px-4">Search Destination</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                <div className="services services-1 color-1 d-block img"
                                    style={{ backgroundImage: `url(${'/images/services-1.jpg'})` }}>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fi fi-rr-wind"></span>
                                        {/* <span className="flaticon-paragliding"></span> */}
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Activities</h3>
                                        <p> Hard Adventure activities are climbing, mounting biking, watersports, or strenuous
                                            physical activities...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                <div className="services services-1 color-2 d-block img"
                                    style={{ backgroundImage: `url(${'/images/services-2.jpg'})` }}>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        {/* <span className="flaticon-route"></span> */}
                                        <span className="fi fi-rr-route"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Travel Arrangements</h3>
                                        <p>The primary factors of the preparation include booking tickets, accommodation, and
                                            making the necessary arrangements for travel and food...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                <div className="services services-1 color-3 d-block img"
                                    style={{ backgroundImage: `url(${'/images/services-3.jpg'})` }}>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fi fi-rr-user"></span>
                                        {/* <span className="flaticon-tour-guide"></span> */}
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Private Guide</h3>
                                        <p> Provides assistance, information on cultural, historical and
                                            contemporary heritage to people on organized sightseeing ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                <div className="services services-1 color-4 d-block img"
                                    style={{ backgroundImage: `url(${'/images/services-4.jpg'})` }}>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        {/* <span className="flaticon-map"></span> */}
                                        <span className="fi fi-rr-map"></span>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Location Manager</h3>
                                        <p> Find the right location for a Occasion, show and coordinate many practical and
                                            logistical elements for a project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome