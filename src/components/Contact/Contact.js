import React from 'react';
import AllLink from '../AllLink/AllLink';
import Email from '../Email/Email';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contactArea bg-dark text-white">
            <div className="row col-md-12 offset-md-1">
                <h1 className="pb-3">Contact</h1>
                <div className="row d-flex">
                    <AllLink></AllLink>
                    <Email></Email>
                </div>
            </div>
        </section>
    );
};

export default Contact;