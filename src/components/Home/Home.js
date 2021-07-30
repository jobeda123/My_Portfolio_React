import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderMain from "../HeaderMain/HeaderMain";
import SideBar from "../SideBar/SideBar";
// import './Home.css';
import Projects from "../Projects/Projects";
import About from "../About/About";
import AllDetailProject from "../AllDetailProject/AllDetailProject";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
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
