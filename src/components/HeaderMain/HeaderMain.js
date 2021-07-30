import React from "react";
import "./HeaderMain.css";
import developerPic from "../../images/developer.jpg";
import Particles from "react-particles-js";
import { motion } from "framer-motion";

const HeaderMain = () => {
  return (
    <main id="home">
      <div className="bg-dark text-white">
        {/* <Particles className="back"> */}
        <div className="front row headerMainArea d-flex align-items-center ">
          <div className="col-md-4 offset-md-1 textArea back">
            <h3>Hello,</h3>
            {/* <motion.h1
                            whileHover={{ scale: .7 }} transition={{ type: 'spring', damping: 3, stiffness: 100 }} style={{ display: 'inline-block' }}>I
                        </motion.h1> */}
            <h1 style={{ fontSize: "70px" }}>
              I'm <span style={{ color: "#2596be" }}>Jobeda</span>
            </h1>
            <h4>Front-End Developer</h4>
            <p className="pt-4">
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local and multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.
            </p>
            <div className="pt-4 pb-4">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1t_Xfk2-hJCW7IXA1qxjUIUYOSmAdQHN7/view"
              >
                <button className="buttonMainResume">View Resume</button>
              </a>

              <button className="buttonMainContact">Contact Me</button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              style={{ backgroundColor: "#212529" }}
              src={developerPic}
              width="500px;"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        {/* </Particles> */}
      </div>
    </main>
  );
};

export default HeaderMain;
