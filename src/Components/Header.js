import React from 'react';
import HeaderCSS from '../styles/Header.module.css';
const Header = (props) => {
    return(
        <>
            <div className={HeaderCSS.header1} title="header1Container">
                <div className="container" title="fixedContainer1">
                    <div className={HeaderCSS.header1Content} title="header1Content">
                        <p title="header1ContentPart1">DEMO Streaming</p>
                        <div className={HeaderCSS.header1ContentPart} title="header1ContentPart">
                            <a href = '/' title="loginLink">Log in</a>
                            <button title="btn">Start your free trail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={HeaderCSS.header2} title="header2Container">
                <div className="container" title="fixedContainer2">
                    <div className={HeaderCSS.header2Content} title="header2Content">
                        <p title="header2ContentPart">{`Popular ${props.category}`}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;