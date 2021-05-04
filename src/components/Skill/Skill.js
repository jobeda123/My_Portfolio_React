import React from 'react';
import './Skill.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdn, faGithubSquare, faLinkedinIn, faFacebookSquare, faMedium, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = () => {
    return (
        <section>
            <div className="row d-flex">
                <div style={{ paddingTop: "0px" }} className="col-md-4">
                    <h1 className="pb-4" style={{ color: "#2596be" }}>About Jobeda Nur</h1>
                    <p className="pb-2">I'm a life long learner. I'm a web developer and I like teaching people JavaScript . I'm a student I always like to learn new things and have experience with new stuff. I'm trying to be more creative and will come back soon with something unique</p>
                    <div className="aboutIcon pb-5">
                        <a className="" target="_blank" href="https://github.com/jobeda123"><FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/jobeda-nur/"><FontAwesomeIcon className="icon active-icon" icon={faLinkedinIn} /></a>
                        <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookSquare} /></a>
                        <a target="_blank" href="https://medium.com/"><FontAwesomeIcon className="icon active-icon" icon={faMedium} /></a>
                    </div>
                    <button className="buttonMainContact">Hire Me</button>
                </div>
                <div className="col-md-4 offset-md-1 skillButton">
                    <h3 style={{ color: "#2596be" }}>Technical Skills</h3>
                    <div className="pt-4">
                        <button>React.js</button>
                        <button>Javascript (ES6)</button>
                        <button>React‐Bootstrap</button>
                        <button>HTML</button>
                        <button>SCSS</button>
                        <button>CSS</button>
                        <button>Bootstrap</button>

                        <button>SCSS</button>
                        <button>Material UI</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>

                        <button>VS Code</button>
                        <button>Atom</button>
                        <button>Chrome Dev Tool</button>
                        <button>Jira</button>
                        <button>Trello</button>
                        <button>Github</button>
                        <button>Heroku</button>
                        <button>Firebase</button>
                        <button>Netlify</button>
                    </div>

                    {/* <div>
                        <h4>IDE, Tools And Deploy</h4>
                        <div>
                            <button>VS Code</button>
                            <button>Atom</button>
                            <button>Code Block</button>
                            <button>Pycharm</button>
                            <button>Chrome Dev Tool</button>
                            <button>Jira</button>
                            <button>Trello</button>
                            <button>Github</button>
                            <button>Heroku</button>
                            <button>Firebase</button>
                            <button>Netlify</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default Skill;