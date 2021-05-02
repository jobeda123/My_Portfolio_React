import React from 'react';
import './HeaderMain.css';
import headerPic from '../../images/circle-cropped.png';


const HeaderMain = () => {
    return (
        <section className="row d-flex">
            <div className="col-md-6 text-area">
                <h5 className="pb-3 brandColor">Hello, I'm</h5>
                <h1 className="text-white">Jobeda Nur Akhi</h1>
                <h5 className="brandColor">Frontend Developer</h5>
                <p className="pt-4 text-white">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                <div className="pt-3">
                    <a target="_blank" href="https://drive.google.com/file/d/1t_Xfk2-hJCW7IXA1qxjUIUYOSmAdQHN7/view">
                        <button className="brandButton">My Resume</button></a>

                    <button className="brandButton">Get In Touch</button>
                </div>
            </div>
            <div className="col-md-5">
                <div className="picArea pt-5">
                    <img src={headerPic} width="400px" alt="Not Found" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;