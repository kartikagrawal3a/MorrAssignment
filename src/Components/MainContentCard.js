import React from 'react';
import MainContentCSS from '../styles/MainContent.module.css';

const MainContentCard = (props) => {
    return(
        <>  <div title="main">
                <div className={MainContentCSS.card} title="card">
                    <img src={props.url} alt="content_pic" title="cardImg" />
                </div>
                <p className="info" title="title">{props.title}</p>
            </div>
        </>
    );
}

export default MainContentCard;