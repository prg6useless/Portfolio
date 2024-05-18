import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skillImages } from "./data";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div id="skills">
      <div className="flex justify-center items-center mt-20">
        <FontAwesomeIcon icon={faCode} className="pr-4 text-xl" />
        <p className="text-4xl">My Skills</p>
      </div>
      <div className="imagesDiv m-20">
        {skillImages.map((image, index) => {
          return (
            <div key={index} className="skillimagesDiv">
              <img
                src={image}
                alt="skill"
                //   style={skillimages}
                className="skillimages"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
