import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    useEffect(() => {
        const navbar = document.getElementById("ftco-navbar");
        if (!navbar) return;

        const handleScroll = () => {
            navbar.classList.toggle("scrolled", window.scrollY > 400);
            navbar.classList.toggle("awake", window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">Go Orb<span>Travel Blog</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav navbar-nav-scroll ms-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="categories" className="nav-link">Categories</Link></li>
                        <li className="nav-item"><Link to="/destinations" className="nav-link">Destinations</Link></li>
                        <li className="nav-item"><Link to="/blogs" className="nav-link">Blogs</Link></li>
                        <li className="nav-item"><Link to="hotel') }}" className="nav-link">Hotels</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar