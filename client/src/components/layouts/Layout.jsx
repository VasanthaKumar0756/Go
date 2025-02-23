import Navbar from './partials/Navbar';
import HomePage from '../../pages/Home/HomePage';
import Footer from './partials/Footer';
import Loader from './partials/Loader';

const Layout = () => {
    return (
        <>
            <Navbar />
            <HomePage />
            <Footer />
            <Loader />
        </>
    )
}

export default Layout