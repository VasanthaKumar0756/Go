import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

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

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/destinations", label: "Destinations" },
        { to: "/blogs", label: "Blogs" },
        // { to: "/hotels", label: "Hotels" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Go Orb<span>Travel Blog</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            {navLinks.map(({ to, label }) => (
                                <li className="nav-item" key={to}>
                                    <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav >
        </header>
    )
}

export default Navbar