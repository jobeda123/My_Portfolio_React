import React from 'react';
import './AllDetailProject.css';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';
import helpingHand from '../../images/helpingHand.PNG';
import bakersLab from '../../images/bakersLab.PNG';
import letsGo from '../../images/letsGo.PNG';
import cookingMaster from '../../images/cookingMaster.PNG';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllDetailInfo from '../AllDetailInfo/AllDetailInfo';


const projectData = [
    {
        name: "Helping Hand",
        type: "A Service Based Website",
        description: ["To take any service, user have to sign in with your google account which is verified by firebase.",
            "User can select one service at a time and also see his previous services.",
            "Admin and user have different activities."],

        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Stripe.js", "Firebase", "Heroku"],
        liveLink: "https://complete-website-client-123.firebaseapp.com/",
        github: "",
        picture: helpingHand
    },
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "",
        picture: bakersLab
    }
    ,
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "",
        picture: bakersLab
    }
    ,
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "",
        picture: bakersLab
    },
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "",
        picture: bakersLab
    },
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "",
        picture: bakersLab
    }
]



const AllDetailProject = () => {
    const d = projectData[0];
    console.log(d);
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
                    <div className="headerMainBack textProject">
                        <h1 style={{ marginLeft: "100px", marginBottom: "50px" }} className="text-white pt-5">My Project {projectData.length}</h1>
                        <div className="d-flex row">
                            {
                                projectData.map(data => <AllDetailInfo data={data}></AllDetailInfo>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDetailProject;