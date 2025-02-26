import { Outlet } from 'react-router-dom';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Loader from './partials/Loader';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet /></main>
            <Footer />
            <Loader />
        </>
    )
}

export default Layout