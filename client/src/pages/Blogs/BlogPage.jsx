import AboutUs from "../About/AboutUs"
import Pagination from "../Destination/Pagination";
import Posts from "../Home/Posts";


const BlogPage = () => {
    const page = {
        title: 'Blog',
        image: '/images/image_4.jpg',
    };

    return (
        <>
            <AboutUs page={page} />
            <Posts />
            <section className="pb-5"><Pagination /> </section>
        </>
    )
}

export default BlogPage