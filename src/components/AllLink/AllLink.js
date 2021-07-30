import React from "react";
import {
  faGithubSquare,
  faLinkedinIn,
  faFacebookSquare,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllLink = () => {
  return (
    <div className="col-md-4 pt-4">
      <h3 style={{ color: "#2596be", overflow: "hidden" }}>Where To Find Me?</h3>
      <p>
        Do you have an interesting project I can help with? Feel free to reach
        out to me by using one of the following:
      </p>

      <p>
        <FontAwesomeIcon
          style={{ color: "#2596be" }}
          className="icon active-icon"
          icon={faMapMarkerAlt}
        />{" "}
        Address: 40/41, C, Zindabahar 1st lane, Dhaka-1100
      </p>
      <p>
        <FontAwesomeIcon
          style={{ color: "#2596be" }}
          className="icon active-icon"
          icon={faPhoneAlt}
        />{" "}
        Mobile: 01989980906
      </p>
      <p>
        <FontAwesomeIcon
          style={{ color: "#2596be" }}
          className="icon active-icon"
          icon={faEnvelope}
        />{" "}
        Email: jakhi161265@bscse.uiu.ac.bd
      </p>

      <div className="aboutIcon py-3">
        <a target="_blank" href="https://github.com/jobeda123">
          <FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jobeda-nur/">
          <FontAwesomeIcon className="icon active-icon" icon={faLinkedinIn} />
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <FontAwesomeIcon
            className="icon active-icon"
            icon={faFacebookSquare}
          />
        </a>
        <a target="_blank" href="https://jakhi161265.medium.com/">
          <FontAwesomeIcon className="icon active-icon" icon={faMedium} />
        </a>
      </div>
      <p>You can also use the contact form on this page</p>
    </div>
  );
};

export default AllLink;
