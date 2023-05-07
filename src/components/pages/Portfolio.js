import React from 'react';
import Card from '../Card';
import '../../styles/cards.css';
const cardInfo = [
  {
      key: 1,
      projName: "Simple Landing Page",
      projRepo: "https://github.com/TVML24/landing-page-clone",
      projDeploy: "https://tvml24.github.io/landing-page-clone/",
      projImg: "landing-clone.png"
  },
  {
      key: 2,
      projName: "Hospital Management System",
      projRepo: "https://github.com/TVML24/Patient-Managment-System",
      projDeploy: "https://hospitalmanagementsystem.herokuapp.com/",
      projImg: "hospital-management-system.jpg"
  },
  {
      key: 3,
      projName: "Fetch Event",
      projRepo: "https://github.com/TVML24/chilly-mandrills-project-one",
      projDeploy: "https://lilyhargreaves.github.io/chilly-mandrills-project-one/",
      projImg: "fetch-event.jpg"
  },
  {
      key: 4,
      projName: "Javascript Dynamic Quiz Application",
      projRepo: "https://github.com/TVML24/timed-knowledge-quiz-challenge",
      projDeploy: "https://tvml24.github.io/timed-knowledge-quiz-challenge/",
      projImg: "quiz-application.jpg"
  },
  {
      key: 5,
      projName: "Weather Dashboard",
      projRepo: "https://github.com/TVML24/dynamic-fiveday-weather-app",
      projDeploy: "https://tvml24.github.io/dynamic-fiveday-weather-app/",
      projImg: "weather-dashboard.jpg"
  },
  {
      key: 6,
      projName: "Mobile Responsive Portfolio",
      projRepo: "https://github.com/TVML24/portfolio-showcase-TVML24",
      projDeploy: "https://tvml24.github.io/portfolio-showcase-TVML24/",
      projImg: "portfolio-original.jpg"
  },
]

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {cardInfo.map(project => (
            <Card key={project.key} name={project.projName} repo={project.projRepo} deploy={project.projDeploy} img={project.projImg}/>
            ))}
      </div>
    </div>
  );
}
