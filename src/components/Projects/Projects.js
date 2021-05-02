import React from 'react';
import './Projects.css';
import helpingHand from '../../images/helpingHand.PNG';
import bakersLab from '../../images/bakersLab.PNG';
import letsGo from '../../images/letsGo.PNG';
import cookingMaster from '../../images/cookingMaster.PNG';
import ProjectDetail from '../ProjectDetail/ProjectDetail';


const projectData = [
    {
        name: "Helping Hand",
        type: "A Service Based Website",
        description: ["To take any service, user have to sign in with your google account which is verified by firebase.",
            "User can select one service at a time and also see his previous services.",
            "Admin and user have different activities."],

        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Stripe.js", "Firebase", "Heroku"],
        liveLink: "https://complete-website-client-123.firebaseapp.com/",
        picture: helpingHand
    },
    {
        name: "Baker's Lab",
        type: "An Online Cake Shop",
        description: ["To buy a cake, you have to sign in with your google account", "You can select one cake to buy and also you can see your previous orders", "User have to log in and then he/she can buy a cake"],
        stack: ["React.js", "React‐router", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Heroku"],
        liveLink: "https://full-stack-client-jobeda123.web.app/",
        picture: bakersLab
    }
]


const Projects = () => {
    console.log(projectData);
    return (
        <div>
            <h1 style={{ textAlign: 'left', marginLeft:"100px"}} className="text-white">Latest Project {projectData.length}</h1>
            <div className="row d-flex">
                {
                    projectData.map(project =><ProjectDetail key={project.name} project={project}></ProjectDetail>)
                }
            </div>
        </div>
    );
};

export default Projects;