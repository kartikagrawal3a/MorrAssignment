import React from 'react';
import { RiClapperboardFill } from "react-icons/ri";
import HomeContentCSS from '../styles/HomeContent.module.css';

const HomeContentCard = (props) => {
    return(
        <>
            <div title="main">
                <div className={HomeContentCSS.card} title="card">
                    <RiClapperboardFill className={HomeContentCSS.bg} title="media" />
                    <p title="type">{props.type}</p>
                </div>
                <p className="info" title="typeName">{`Popular ${props.type}`}</p>
            </div>
        </>
    );
}

export default HomeContentCard;