import React, { useState } from "react";
import project_one from "../../src/assets/e-comm-react.png";
import project_two from "../../src/assets/Game_SS.png";
import project_three from "../../src/assets/ciao.png";
import "../styles/Skills.css";

let projectDetails = [
  {
    projectName: "E-Commerce Web-Shop",
    projectImg: project_one,
    id: 1,
    projectDescription:
      "An E-Commerce Web-Shop built with React, CommerceJS and Stripe.",
    sourceCode: "https://github.com/prg6useless/E-Commerce_React.git",
  },
  {
    projectName: "Rock Paper Scissors",
    projectImg: project_two,
    id: 2,
    projectDescription:
      " A simple Rock Paper Scissors game built with HTML, CSS and Javascript.",
    sourceCode: "https://github.com/prg6useless/Rock_Paper_Scissors_JS.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
];

export default function AllProjects() {
  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };
  const Card = ({ project }) => {
    const { projectName, projectImg, projectDescription } = project;
    return (
      <div className="projectCardDiv">
        <img
          src={projectImg}
          alt="project"
          className="projectCardImg"
          onMouseOver={showOverlay}
          onMouseLeave={hideOverlay}
        />
        {show && (
          <div className="overlay">
            <h1>{projectName}</h1>
            <p>{projectDescription}</p>
            <button
              className="bg-gray-700 hover:bg-black font-bold py-2 px-4 rounded duration-700 mt-4"
              onClick={() => {
                window.open(project.sourceCode, "_blank");
              }}
            >
              Project Source Code
            </button>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center">
        All of the Projects I've worked on
      </h1>
      <div className="cardDiv px-20 py-10 flex flex-wrap justify-evenly">
        {projectDetails.map((project) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}
