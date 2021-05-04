import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import jLogo from '../../images/logo1.png';
import './Navbar.css';

const Navbar = () => {
    return (
        // --------------------this one is previous 
        // <div className="container-fluid d-flex justify-content-around py-3 navbarArea fixed-top">
        //     <h2 className="brandTitle">Jobeda Nur Akhi</h2>

        //     <nav className="d-flex">
        //         <div>
        //             <Link className="ps-4 navbarLink" to="/home">Home</Link>
        //             <Link className="ps-4 navbarLink" to="#projects">Projects</Link>
        //             <Link className="ps-4 navbarLink" to="/about">About</Link>
        //             <Link className="ps-4 navbarLink" to="/blogs">Blogs</Link>
        //             <Link className="ps-4 navbarLink" to="/contact">Contact</Link>
        //         </div>

        //     </nav>
        // </div>

        // 


        <nav className="container navbar navbar-expand-lg navbar-light navArea" >
            <div className="container-fluid">
                <a class="navbar-brand" href="/"><img className='logoImg' src={jLogo} alt="" /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item navList">
                            <a className="nav-link mr-5 ms-5" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item navList">
                            <a className="nav-link mr-5 ms-5" aria-current="page" href="#project">Project</a>
                        </li>
                        <li className="nav-item navList">
                            <a className="nav-link mr-5 ms-5" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item navList">
                            <a className="nav-link mr-5 ms-5" aria-current="page" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item navList">
                            <a className="nav-link mr-5 ms-5" aria-current="page" href="#contact">Contact</a>
                        </li>

                        




                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;