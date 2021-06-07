import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
const Movies = () => {
    return(
        <>
            <Header category = "Movies" />
            <MainContent type="movie" />
            <Footer />
        </>
    )
}

export default Movies;