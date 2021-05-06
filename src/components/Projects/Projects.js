import React from 'react';
import './Projects.css';
import helpingHand from '../../images/helpingHand.gif';
import bakersLab from '../../images/bakersLab.gif';
import letsGo from '../../images/letsGo.gif';
import cookingMaster from '../../images/cookingMonster.gif';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const projectData = [
//     {
//         name: "Helping Hand",
//         type: "A Service Based Website",
//         description: ["To take any service, user have to sign in with your google account which is verified by firebase.",
//             "User can select one service at a time and also see his previous services.",
//             "Admin and user have different activities."],

//         stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Stripe.js", "Firebase", "Heroku"],
//         liveLink: "https://complete-website-client-123.firebaseapp.com/",
//         github: "",
//         picture: helpingHand
//     },
//     {
//         name: "Baker's Lab",
//         type: "An Online Cake Shop",
//         description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
//         stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
//         liveLink: "https://full-stack-client-jobeda123.web.app/",
//         github: "",
//         picture: bakersLab
//     }
// ]

const projectData = [
    {
        name: "Helping Hand",
        type: "A Service Based Website",
        description: ["To take any service, user have to sign in with your google account which is verified by firebase.",
            "User can select one service at a time and also see his previous services.",
            "Admin and user have different activities."],

        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Stripe.js", "Firebase", "Heroku"],
        liveLink: "https://complete-website-client-123.firebaseapp.com/",
        github: "https://github.com/jobeda123/Helping_hand",
        picture: helpingHand
    },
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        github: "https://github.com/jobeda123/Bakers-Lab",
        picture: bakersLab
    }
    ,
    {
        name: "Let's Go",
        type: "An Online Transport System",
        description: ["This is an online transport system, where user can get booked vehical throught online", "User can select one of transport system among Bike, Bus, Car, Train."],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://react-auth-jobeda123.web.app",
        github: "https://github.com/jobeda123/Lets_Go",
        picture: letsGo
    }
    ,
    {
        name: "Cooking Monster",
        type: "Searching Food Ingredient Easily Using API",
        description: ["Searching a food by its name and showing the results", "Clicking a specific food item, showing all the ingredients of that food item"],
        stack: ["HTML", "CSS", "Bootstrap", "Javascript", "RestAPI"],
        liveLink: "https://jobeda123.github.io/cooking-monster/index.html",
        github: "https://github.com/jobeda123/cooking-monster",
        picture: cookingMaster
    }
]


const Projects = () => {
    return (
        // <section>
        //     <div>
        //         <h1 style={{ textAlign: 'left', marginLeft: "100px" }} className="text-white">Latest Project {projectData.length}</h1>
        //         <button id="projects" className="brandButton">View All <FontAwesomeIcon className="icon active-icon" icon={faArrowRight} /></button>
        //         <div className="row d-flex">
        //             {
        //                 projectData.map(project => <ProjectDetail key={project.name} project={project}></ProjectDetail>)
        //             }
        //         </div>
        //     </div>
        // </section>

        <section id="project" className="projectArea bg-dark">
            <div className="row col-md-12 offset-md-1">
                <h1 className="text-white">My Latest Project</h1>
                <div className="row d-flex">
                    {
                        projectData.map(project => <ProjectDetail key={project.name} project={project}></ProjectDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;