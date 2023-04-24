import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as solidEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactIcons = [
    {key: 0, icon: faLinkedin, url: "https://www.linkedin.com/in/caitlin-omalley1/"},
    {key: 1, icon: solidEnvelope, url: "mailto:caitlin.omalley25@gmail.com"},
    {key: 2, icon: faSquareGithub, url: "https://github.com/caitlinoma11ey"},
];

function Footer (){
    return (
        <div className="footer"> 
            <div className="footer__content">
                <h3>Let&apos;s connect </h3>
                <p>Feel free to reach out to connect or say a friendly hello</p>
                <strong>caitlin.omalley25@gmail.com</strong>
                <div className="footer__icons__container">
                    {contactIcons.map((link) => (
                        <a href={link.url} target="_blank" key={link.key} className="footer__icons"> 
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;