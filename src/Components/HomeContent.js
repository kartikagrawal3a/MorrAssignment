import React from 'react';
import HomeContentCard from './HomeContentCard';
import HomeContentCSS from '../styles/HomeContent.module.css';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return(
        <>
            <div className="row">
                <Link to="/series" className={HomeContentCSS.link1}>
                    <HomeContentCard type="Series" />
                </Link>
                <Link to="/movies" className={HomeContentCSS.link1}>
                    <HomeContentCard type="Movies" />
                </Link>
            </div>
        </>
    );
}

export default HomeContent;