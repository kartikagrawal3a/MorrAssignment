import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HomeContent from './HomeContent';
const Home = () => {
    return(
        <>
            <Header category = "Titles" />
            <HomeContent />
            <Footer />
        </>
    )
}

export default Home;