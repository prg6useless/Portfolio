import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/Skills.css";

const images = [
  "../../src/assets/js.png",
  "../../src/assets/react.png",
  "../../src/assets/nodejs.png",
  "../../src/assets/mongodb.png",
  "../../src/assets/python.png",
  "../../src/assets/git.png",
  "../../src/assets/github.png",
];

export default function Skills() {
  return (
    <div id="skills">
      <div className="flex justify-center items-center mt-20">
        <FontAwesomeIcon icon={faCode} className="pr-4 text-xl" />
        <p className="text-4xl">My Skills</p>
      </div>
      <div className="imagesDiv m-20">
        {images.map((image, index) => {
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
