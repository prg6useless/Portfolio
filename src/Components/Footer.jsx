import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "./data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Full Stack Developer</h3>
        <p className="text-gray-300">
          Contact me via social media for collaborative works and projects
        </p>
        <ul className="socials-footer">
          {Icons.map((items, key) => {
            return (
              <li key={key}>
                <FontAwesomeIcon
                  icon={items.icon}
                  className="each-links"
                  onClick={() => {
                    window.open(items.iconLink);
                  }}
                />
              </li>
            );
          })}
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
