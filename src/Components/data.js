import project_one from "../../src/assets/projects/e-comm-react.png";
import project_two from "../../src/assets/projects/sentisurfer.png";
import project_three from "../../src/assets/projects/ciao.png";
// import project_four from "../../src/assets/projects/solarsystem.png";
import project_four from "../../src/assets/projects/MovieMate.png";
import project_five from "../../src/assets/projects/sirani.png";
import project_six from "../../src/assets/projects/sentryhome.png";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import KWSImg from "../assets/kws.jpg";
import KUImg from "../assets//ku.jpg";
import jsImg from "../assets/languages/js.png";
import reactImg from "../assets/languages/react.png";
import nodejsImg from "../assets/languages/nodejs.png";
import mongodbImg from "../assets/languages/mongodb.png";
import pythonImg from "../assets/languages/python.png";
import gitImg from "../assets/languages/git.png";
import cImg from "../assets/languages/c++.png";
import githubImg from "../assets/languages/github.png";
import expressImg from "../assets/languages/express.png";
import figmaImg from "../assets/languages/figma.png";

export const projectDetails = [
  {
    projectName: "E-Commerce Web-Shop",
    projectImg: project_one,
    id: 1,
    projectDescription:
      "An E-Commerce Web-Shop built with React, CommerceJS and Stripe.",
    sourceCode: "https://github.com/prg6useless/E-Commerce_React.git",
  },
  {
    projectName: "Senti-Surfer",
    projectImg: project_two,
    id: 2,
    projectDescription:
      " A chrome extension that provides the sentiment of youtube comments.",
    sourceCode: "https://github.com/prg6useless/Senti-Surfer-Extension.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
];

export const allProjects = [
  {
    projectName: "E-Commerce Web-Shop",
    projectImg: project_one,
    id: 1,
    projectDescription:
      "An E-Commerce Web-Shop built with React, CommerceJS and Stripe.",
    sourceCode: "https://github.com/prg6useless/E-Commerce_React.git",
  },
  {
    projectName: "Senti-Surfer",
    projectImg: project_two,
    id: 2,
    projectDescription:
      "A chrome extension that provides the sentiment of youtube comments; built with React-typescript and python",
    sourceCode: "https://github.com/prg6useless/Senti-Surfer-Extension.git",
  },
  {
    projectName: "CIAO - Code In Art Out",
    projectImg: project_three,
    id: 3,
    projectDescription:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",
    sourceCode: "https://github.com/prg6useless/ciao.git",
  },
  // {
  //   projectName: "Solar System Simulation",
  //   projectImg: project_four,
  //   id: 4,
  //   projectDescription:
  //     "A simulation of Solar System made with python and OpenGL",
  //   sourceCode: "https://github.com/prg6useless/Solar-System.git",
  // },
  {
    projectName: "MovieMate",
    projectImg: project_four,
    id: 4,
    projectDescription:
      "A movie-based web application to buy movie tickets; built using MERN Stack",
    sourceCode: "https://github.com/prg6useless/MovieMate.git",
  },

  {
    projectName: "Sirani",
    projectImg: project_five,
    id: 5,
    projectDescription:
      "A mental health app that tracks user's daily mood and sleep developed using Qt, a C++ framework",
    sourceCode: "https://github.com/prg6useless/sirani.git",
  },
  {
    projectName: "SentryHome",
    projectImg: project_six,
    id: 6,
    projectDescription:
      "SentryHome is a comprehensive surveillance system mobile application built using flutter for frontend, python for backend and firebase as a database.",
    sourceCode: "https://github.com/prg6useless/SentryHome.git",
  },
];

export const Icons = [
  {
    icon: faFacebook,
    iconLink: "https://github.com/prg6useless",
  },
  {
    icon: faGithub,
    iconLink: "https://github.com/prg6useless",
  },
  {
    icon: faLinkedin,
    iconLink: "https://www.linkedin.com/in/saral-sainju-b24606288/",
  },
  {
    icon: faTwitter,
    iconLink: "https://github.com/prg6useless",
  },
];

export const educationData = [
  {
    img: KWSImg,
    title: "Kathmandu World School",
    major: "+2 Science",
    Year: "2018 - 2020",
    CGPA: "CGPA : 3.5",
  },
  {
    img: KUImg,
    title: "Kathmandu University",
    major: "B. Sc. in Computer Science",
    Year: "2021 - 2025",
    CGPA: "Pursuing",
  },
];

export const skillImages = [
  jsImg,
  reactImg,
  nodejsImg,
  mongodbImg,
  expressImg,
  pythonImg,
  cImg,
  figmaImg,
  gitImg,
  githubImg,
];
