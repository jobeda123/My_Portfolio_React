import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import SideBar from '../SideBar/SideBar';
// import './Home.css';
import Projects from '../Projects/Projects';
import About from '../About/About';
import AllDetailProject from '../AllDetailProject/AllDetailProject';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        // <div>
        //     <div className="row col-md-12">
        //         <Navbar></Navbar>
        //     </div>
        //     <div className="row d-flex">
        //         <div className="col-md-1">
        //             <SideBar></SideBar>
        //         </div>
        //         <div className="col-md-11">
        //             <div className="headerMainBack">
        //                 <HeaderMain></HeaderMain>
        //             </div>
        //             <div className="headerMainBack">
        //                 <Projects></Projects>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Projects></Projects>
            <About></About>
            <Blog></Blog>
            <Contact></Contact>
            {/* <AllDetailProject></AllDetailProject> */}
        </div>
    );
};

export default Home;