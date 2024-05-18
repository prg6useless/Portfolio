import "../styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { educationData } from "./data";

export default function Education() {
  return (
    <div id="education" className="mt-20">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="icon pr-4 text-xl" />
        <p className="text-4xl">My Education</p>
      </div>
      <div className="education_div p-10 flex-wrap">
        {educationData.map((items, key) => {
          return (
            <div className="card" key={key}>
              <img src={items.img} className="card_image" />
              <div className="card_content">
                <h2 className="card_title">{items.title}</h2>
                <p className="card_text">{items.major}</p>
                <p className="card_text">{items.Year}</p>
                <p className="card_text">{items.CGPA}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
