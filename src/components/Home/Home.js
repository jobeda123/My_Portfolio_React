import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import SideBar from '../SideBar/SideBar';
import './Home.css';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <div className="row col-md-12">
                <Navbar></Navbar>
            </div>
            <div className="row d-flex">
                <div className="col-md-1">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-11">
                    <div className="headerMainBack">
                        <HeaderMain></HeaderMain>
                    </div>
                    <div className="headerMainBack">
                        <Projects></Projects>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;