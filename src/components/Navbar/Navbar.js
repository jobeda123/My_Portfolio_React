import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid d-flex justify-content-around py-3 navbarArea fixed-top">
            <h2 className="brandTitle">Jobeda Nur Akhi</h2>

            <nav className="d-flex ">
                <div>
                    <Link className="ps-4 navbarLink" to="/home">Home</Link>
                    <Link className="ps-4 navbarLink" to="/about">Projects</Link>
                    <Link className="ps-4 navbarLink" to="/blogs">Blogs</Link>
                    <Link className="ps-4 navbarLink" to="/digitalResume">Digital Resume</Link>
                    <Link className="ps-4 navbarLink" to="/contact">Contact</Link>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;