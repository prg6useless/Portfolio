import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { projectDetails } from "./data";
import "../styles/Skills.css";
import { Link } from "react-router-dom";

export default function Projects() {
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
              Source Code
            </button>
          </div>
        )}
        <button
          className="bg-gray-700 hover:bg-black font-bold py-2 px-4 rounded duration-700 mt-4 button_on_660"
          onClick={() => {
            window.open(project.sourceCode, "_blank");
          }}
        >
          Source Code
        </button>
      </div>
    );
  };

  return (
    <div id="projects">
      <div className="flex justify-center items-center mt-20">
        <FontAwesomeIcon icon={faProjectDiagram} className="pr-4 text-xl" />
        <p className="text-4xl">My Projects</p>
      </div>
      <div className="cardDiv px-20 py-10 flex flex-wrap justify-evenly">
        {projectDetails.map((project, index) => {
          return <Card project={project} key={index} />;
        })}
      </div>
      <div className="flex justify-center items-center m-4">
        <Link
          to="/allprojects"
          className="border border-teal-300 text-white hover:bg-teal-600 py-2 px-4 rounded duration-700"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}
