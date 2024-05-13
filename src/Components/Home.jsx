import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Resume from "../docs/Saral-Sainju-Resume.pdf";

export default function Home() {
  return (
    <>
      <div className="pt-10 tagname" id="home">
        <div>
          <p className="mt-10">
            <span className="hello">Hi,</span>
            <br />
            <span className="name">I am Saral Sainju</span>
            <br />
            <span className="text-4xl text-gray-300">Full Stack Developer</span>
          </p>
          <div className="links pt-10 flex-wrap">
            <FontAwesomeIcon
              icon={faFacebook}
              className="each-links"
              onClick={() => {
                window.open("https://www.facebook.com/saral.sainju/");
              }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="each-links"
              onClick={() => {
                window.open("https://github.com/prg6useless");
              }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="each-links"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saral-sainju-b24606288/"
                );
              }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="each-links"
              // onClick={() => {
              //   window.open(
              //     "https://instagram.com/saral_sainju?igshid=MjEwN2IyYWYwYw=="
              //   );
              // }}
            />
          </div>
        </div>
        <div className="resumeDiv">
          <div className="flex mt-10 text-xl flex-wrap justify-right">
            <a
              href={Resume}
              download="Saral_Sainju_Resume"
              target="_blank"
              rel="noreferrer"
            >
              Download my Resume
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="flex mt-10 text-xl flex-wrap justify-right">
            <a
              href="https://flowcv.com/resume/inf368993o"
              target="_blank"
              className="pr-1"
              rel="noreferrer"
            >
              View it Online
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="tagname">
        <p className="m-10 p-10 text-2xl text-gray-300 text-justify max-w-5xl">
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
