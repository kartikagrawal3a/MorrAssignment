import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
const Series = () => {
    return(
        <>
            <Header category = "Series" />
            <MainContent type="series" />
            <Footer />
        </>
    )
}

export default Series;