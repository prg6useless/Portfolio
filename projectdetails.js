let projectsAll = document.getElementById("prj_all");

let title_img = [
  "../assets/sirani.png",
  "../assets/ciao.png",
  "../assets/sentisurfer.png",
  "../assets/Game_SS.png",
  "../assets/e-comm.png",
  "../assets/e-comm-react.png",
];
let title = [
  "Sirani",
  "CIAO",
  "Senti-Sufer",
  "Rock Paper Scissors",
  "E-Commerce Website",
  "E-Commerce Website (React)",
];
let title_desc = [
  "Your Therapy Buddy",
  "Web App for Generative Art",
  "Chrome Extension for Sentiment Analysis of Youtube Comments",
  "A simple Rock Paper Scissors Game",
  "Dummy E-Commerce Website",
  "E-Commerce Website made using React Commerce.js and Stripe",
];
let project_desc = [
  "A simple app that tracks your daily emotions and moods. This app also tracks your sleep routine.",
  "CIAO is a web app that generates art based on the user's input. The user can choose the type of art, the color palette, and the number of iterations. The user can also download the generated art.",
  "Senti-Surfer is a chrome extension that performs sentiment analysis of Youtube comments. It uses the Transformer to perform sentiment analysis.",
  "A simple Rock Paper Scissors Game made using JavaScript, HTML and CSS.",
  "A dummy E-Commerce Website made using HTML, CSS, and JavaScript.",
  "An E-Commerce Website made using React, Commerce.js, and Stripe with dummy payment gateway. All of the backend is handled by Commerce.js and Stripe.",
];

let project_code = [
  "https://github.com/prg6useless/sirani.git",
  "https://github.com/prg6useless/ciao.git",
  "https://github.com/prg6useless/Senti-Surfer-Extension.git",
  "https://github.com/prg6useless/Rock_Paper_Scissors_JS.git",
  "https://github.com/prg6useless/E-commerce-website.git",
  "https://github.com/prg6useless/E-Commerce_React.git",
];
let project_doc = [
  "../docs/Sirani_Report.pdf",
  "../docs/CIAO_Report.pdf",
  "../docs/Senti-Surfer_Report.pdf",
  "https://github.com/prg6useless/Rock_Paper_Scissors_JS.git",
  "https://github.com/prg6useless/E-commerce-website.git",
  "https://github.com/prg6useless/E-Commerce_React.git",
];

let onClick_code = [
  "sirani_code()",
  "ciao_code()",
  "sentsurf_code()",
  "rps_code()",
  "eComm_code()",
  "eComm_React_code()",
];
let onClick_doc = [
  "sirani_doc()",
  "ciao_doc()",
  "sentsurf_doc()",
  "rps_doc()",
  "eComm_doc()",
  "eComm_React_doc()",
];

for (let i = 0; i < title.length; i++) {
  let code = `        <div class="project_card">
<img src="${title_img[i]}" class="prj_card_img"/>
<h2>${title[i]}</h2>
<h3>${title_desc[i]}</h3>
<p>${project_desc[i]}</p>
<div class="project_link">
    <div class="sc"><button class="fas fa-code code_icon" onclick="${onClick_code[i]}"></button><a
            href="${project_code[i]}" target="_blank">Source
            Code</a></div>
    <div class="doc"><button class="far fa-file-pdf doc_icon" onclick="${onClick_doc[i]}"></button><a
            href="${project_doc[i]}" target="_blank">Documentation</a></div>
</div>
</div>`;

  projectsAll.innerHTML += code;
}

function sirani_code() {
  window.open("https://github.com/prg6useless/sirani.git", "_blank");
}

function sirani_doc() {
  window.open("../docs/Sirani_Report.pdf", "_blank");
}

function ciao_code() {
  window.open("https://github.com/prg6useless/ciao.git", "_blank");
}

function ciao_doc() {
  window.open("../docs/CIAO_Report.pdf", "_blank");
}

function sentsurf_code() {
  window.open(
    "https://github.com/prg6useless/Senti-Surfer-Extension.git",
    "_blank"
  );
}

function sentsurf_doc() {
  window.open("../docs/Senti-Surfer_Report.pdf", "_blank");
}

function rps_code() {
  window.open(
    "https://github.com/prg6useless/Rock_Paper_Scissors_JS.git",
    "_blank"
  );
}

function rps_doc() {
  window.open(
    "https://github.com/prg6useless/Rock_Paper_Scissors_JS.git",
    "_blank"
  );
}

function eComm_code() {
  window.open(
    "https://github.com/prg6useless/E-commerce-website.git",
    "_blank"
  );
}

function eComm_doc() {
  window.open(
    "https://github.com/prg6useless/E-commerce-website.git",
    "_blank"
  );
}

function eComm_React_code() {
  window.open("https://github.com/prg6useless/E-Commerce_React.git", "_blank");
}

function eComm_React_doc() {
  window.open("https://github.com/prg6useless/E-Commerce_React.git", "_blank");
}
