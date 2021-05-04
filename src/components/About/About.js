import React from 'react';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import './About.css';

const About = () => {
    return (
        <section id="about" className="aboutArea bg-dark">
            <div className="row col-md-12 offset-md-1">
                {/* <h1 className="text-white">About</h1> */}
                <div className="text-white">
                    <Skill></Skill>
                    <Education></Education>
                </div>
            </div>
        </section>
    );
};

export default About;