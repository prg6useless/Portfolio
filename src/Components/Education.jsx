import "../styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const cardData = {
  card1: {
    img: "../../src/assets/kws.jpg",
    title: "Kahtmandu World School",
    major: "+2 Science",
    Year: "2018-2020",
    CGPA: "3.5",
  },
  card2: {
    img: "../../src/assets/ku.jpg",
    title: "Kahtmandu University",
    major: "B. Sc. in Computer Science",
    Year: "2021-Current",
    CGPA: "Still Studying",
  },
};

const Card = ({ content }) => {
  const { img, title, major, CGPA, Year } = content;
  return (
    <div className="card">
      <img src={img} className="card_image" />
      <div className="card_content">
        <h2 className="card_title">{title}</h2>
        <p className="card_text">{major}</p>
        <p className="card_text">{Year}</p>
        <p className="card_text">{CGPA}</p>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <div id="education" className="mt-20">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="icon pr-4 text-xl" />
        <p className="text-4xl">My Education</p>
      </div>
      <div className="education_div p-10 flex-wrap">
        <Card content={cardData.card1} />
        <Card content={cardData.card2} />
      </div>
    </div>
  );
}
