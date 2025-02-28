import AboutUs from "../About/AboutUs";
import Address from "./Address";
import ContactForm from "./ContactForm";

const ContactUsPage = () => {
    const page = {
        title: 'Contact us',
        image: '/images/image_1.jpg',
    };

    return (
        <>
            <AboutUs page={page} />
            <Address />
            <ContactForm />
        </>
    )
}

export default ContactUsPage