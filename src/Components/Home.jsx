import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "./data";

import Resume from "../docs/Saral-Sainju-Resume.pdf";

export default function Home() {
  return (
    <>
      <div className="pt-10 tagname" id="aboutme">
        <div>
          <p className="mt-10">
            <span className="hello">Hi,</span>
            <br />
            <span className="name">I am Saral Sainju</span>
            <br />
            <span className="text-4xl text-gray-300">Full Stack Developer</span>
          </p>
          <div className="links pt-10 flex-wrap">
            {Icons.map((items, key) => {
              return (
                <FontAwesomeIcon
                  icon={items.icon}
                  key={key}
                  className="each-links"
                  onClick={() => {
                    window.open(items.iconLink);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="resumeDiv">
          <div className="mt-10 text-xl">
            <a
              href={Resume}
              download="Saral_Sainju_Resume"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              Download my Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#66fcf1"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
            </a>
          </div>
          <div className="mt-10 text-xl">
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              View it Online
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#66fcf1"
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="tagname">
        <p className="scrollable-paragraph p-2 text-2xl text-gray-300 text-justify max-w-6xl">
          I am a dedicated full stack developer with a solid technical
          background. My goal is to design user-centered webexperiences that are
          fascinating, engaging, and enjoyable to explore. I am committed to
          providing easy-to-use,visually appealing interfaces with a keen eye
          for design and a solid basis in programming. By staying currentwith
          the latest web technologies, I am able to develop dynamic, responsive
          websites that engage users across awide range of devices. With
          experience in JavaScript and modern frontend frameworks such as React,
          Nodejs, Express, and MongoDB, I succeed in collaborative environments.
        </p>
      </div>
    </>
  );
}
