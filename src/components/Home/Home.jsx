import React from 'react';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Form from '../ContactForm/Form';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Banner/>
            <Products/>
            <Form/>
            <Footer/>
        </>
    );
}

export default Home;
