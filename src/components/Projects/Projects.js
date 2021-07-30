import React from "react";
import "./Projects.css";
import eShop from "../../images/eShop.gif";
import helpingHand from "../../images/helpingHand.gif";
import bakersLab from "../../images/bakersLab.gif";
import letsGo from "../../images/letsGo.gif";
import cookingMaster from "../../images/cookingMonster.gif";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const projectData = [
  {
    name: "eShop",
    type: "E-commerce Based Website",
    description: [
      "User can buy products, see his order status, previous orders history, see each order details individually, see his profile details and can change his password",
      "To any products, user has to log in with email and password which is verified by firebase and pay the bill via card",
      "User can search products by search field, by category drawer and also shop by category",
      "Admin can add products, add new admin, update order status pending to delivered and also see all orders of all users",
    ],

    stack: [
      "React.js",
      "Bootstrap",
      "React-Bootstrap",
      "React-router",
      "Context API",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Stripe.js",
      "Firebase",
      "Firebase",
    ],
    liveLink: "https://e-shop-40f88.web.app/",
    github: "https://github.com/jobeda123/e-shop",
    picture: eShop,
  },
  {
    name: "Helping Hand",
    type: "A Service Based Website",
    description: [
      "To take any service, user have to sign in with your google account which is verified by firebase.",
      "User can select one service at a time and also see his previous services.",
      "Admin and user have different activities.",
    ],

    stack: [
      "React.js",
      "React‐router",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Stripe.js",
      "Firebase",
      "Heroku",
    ],
    liveLink: "https://complete-website-client-123.firebaseapp.com/",
    github: "https://github.com/jobeda123/Helping_hand",
    picture: helpingHand,
  },
  {
    name: "Baker's Lab",
    type: "An Online Cake Shop",
    description: [
      "To buy a cake, you have to sign in with your google account",
      "You can select one cake to buy and also you can see your previous orders",
      "User have to log in and then he/she can buy a cake",
    ],
    stack: [
      "React.js",
      "React‐router",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Heroku",
    ],
    liveLink: "https://full-stack-client-jobeda123.web.app/",
    github: "https://github.com/jobeda123/Bakers-Lab",
    picture: bakersLab,
  },
  {
    name: "Let's Go",
    type: "An Online Transport System",
    description: [
      "This is an online transport system, where user can get booked vehical throught online",
      "User can select one of transport system among Bike, Bus, Car, Train.",
    ],
    stack: [
      "React.js",
      "React‐router",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Heroku",
    ],
    liveLink: "https://react-auth-jobeda123.web.app",
    github: "https://github.com/jobeda123/Lets_Go",
    picture: letsGo,
  },
//   {
//     name: "Cooking Monster",
//     type: "Searching Food Ingredient Easily Using API",
//     description: [
//       "Searching a food by its name and showing the results",
//       "Clicking a specific food item, showing all the ingredients of that food item",
//     ],
//     stack: ["HTML", "CSS", "Bootstrap", "Javascript", "RestAPI"],
//     liveLink: "https://jobeda123.github.io/cooking-monster/index.html",
//     github: "https://github.com/jobeda123/cooking-monster",
//     picture: cookingMaster,
//   },
];

const Projects = () => {
  return (
    <section id="project" className="projectArea bg-dark">
      <div className="row col-md-12 offset-md-1">
        <h1 className="text-white">My Latest Project</h1>
        <div className="row d-flex">
          {projectData.map((project) => (
            <ProjectDetail key={project.name} project={project}></ProjectDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
