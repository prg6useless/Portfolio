import { useState } from "react";
import "../styles/Skills.css";
import { allProjects } from "./data";

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
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center">
        Projects I Have Worked On
      </h1>
      <div className="cardDiv px-20 py-10 flex flex-wrap justify-evenly">
        {allProjects.map((project) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}
