import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import FooterCSS from '../styles/Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import apple from '../Assets/images/apple.png';
import playstore from '../Assets/images/playstore.png';
import microsoft from '../Assets/images/microsoft.png';

const Footer = () => {
    return(
        <>
            <div className={FooterCSS.footer} title="footerContainer">
                <div className="container" title="fixedContainer">
                    <Router>
                        <div className={FooterCSS.part1} title="footerContent1">
                            <p className={FooterCSS.para11} title="footerContent11">
                                <Link to="/" className={FooterCSS.link} title="home">Home</Link>
                                <span title="span">|</span>
                                <Link to="/" className={FooterCSS.link} title="terms">Terms and Conditions</Link>
                                <span title="span">|</span>
                                <Link to="/" className={FooterCSS.link} title="privacy">Privacy Policy</Link>
                                <span title="span">|</span>
                            </p>
                            <p className={FooterCSS.para12} title="footerContent12">
                                <Link to="/" className={FooterCSS.link} title="collection">Collection Statement</Link>
                                <span title="span">|</span>
                                <Link to="/" className={FooterCSS.link} title="help">Help</Link>
                                <span title="span">|</span>
                                <Link to="/" className={FooterCSS.link} title="manage">Manage Account</Link>
                            </p>
                        </div>
                    </Router>
                    <p className={FooterCSS.para2} title="footerContent2">Copyright &copy; 2016 Demo Streaming. All Rights Reserved.</p>
                    <div className={FooterCSS.social} title="footerContent3">
                        <div className={FooterCSS.social1} title="footerContent31">
                            <FaFacebookF className={FooterCSS.fb} title="fb" />
                            <FaTwitter className={FooterCSS.twitter} title="twitter" />
                            <FaInstagram className={FooterCSS.insta} title="insta" />
                        </div>
                        <div className={FooterCSS.social2} title="footerContent32">
                            <div className={FooterCSS.apple} title="apple">
                                <img src={apple} alt="apple_logo" title="appleImg" />
                                <div className={FooterCSS.appleContent} title="appleContent">
                                    <p title="appleContent1">Download on the</p>
                                    <p title="appleContent2">App Store</p>
                                </div>
                            </div>
                            <div className={FooterCSS.playstore} title="playstore">
                            <img src={playstore} alt="playstore_logo" title="playstoreImg" />
                                <div className={FooterCSS.playstoreContent} title="playstoreContent">
                                    <p title="playstoreContent1">GET IT ON</p>
                                    <p title="playstoreContent2">Google Play</p>
                                </div>
                            </div>
                            <div className={FooterCSS.microsoft} title="microsoft">
                            <img src={microsoft} alt="microsoft_logo" title="microsoftImg" />
                                <div className={FooterCSS.microsoftContent} title="microsoftContent">
                                    <p title="microsoftContent1">Get it from</p>
                                    <p title="microsoftContent2">Microsoft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;