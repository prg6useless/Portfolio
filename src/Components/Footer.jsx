import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Full Stack Developer</h3>
        <p className="text-gray-300">
          Contact me via social media for collaborative works and projects
        </p>
        <ul className="socials-footer">
          <li>
            <FontAwesomeIcon
              icon={faFacebook}
              className="each-links"
              onClick={() => {
                window.open("https://www.facebook.com/saral.sainju/");
              }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              className="each-links"
              onClick={() => {
                window.open("https://github.com/prg6useless");
              }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="each-links"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saral-sainju-b24606288/"
                );
              }}
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="each-links" />
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;2023 <a href="#">Saral Sainju</a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
