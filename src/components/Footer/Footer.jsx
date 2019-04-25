import React, { useState } from 'react';
import './Footer.css';



const Footer = () => {
    const [socialIcons] = useState([
        "fab fa-facebook-square",
        "fab fa-instagram",
        "fab fa-twitter-square"

    ]);

    const displaySocialIcons = socialIcons.map( icon => (
        <i key={icon} className={icon}></i>
    ))

    return (
        <div className="Footer">
             <div className="Footer-contact">
                <p className="footer-connect">CONTACT</p>
                <div className="footer-contact">
                    <ul className="contact-list">
                       <li> <i className="fas fa-phone"></i>(123) 456-7891</li>
                        <li><i className="far fa-envelope"></i>help@tortugadelivery.com</li>
                        <li></li>
                    </ul>
                </div>
             </div>
             <div className="Footer-social">
             <p className="footer-connect">CONNECT</p>
               <div className="social-icons">   
               { displaySocialIcons }
               </div>
             </div>
        </div>
    )
}

export default Footer;