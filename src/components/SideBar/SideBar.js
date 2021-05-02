import React from 'react';
import './SideBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdn, faGithubSquare, faLinkedinIn, faFacebookSquare, faMedium, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
    return (
        <div>
            <div className="sideBack d-flex flex-column">
                <a target="_blank" href="https://github.com/jobeda123"><FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jobeda-nur/"><FontAwesomeIcon className="icon active-icon" icon={faLinkedinIn} /></a>
                <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookSquare} /></a>
                <a target="_blank" href="https://medium.com/"><FontAwesomeIcon className="icon active-icon" icon={faMedium} /></a>
            </div>
        </div>
    );
};

export default SideBar;