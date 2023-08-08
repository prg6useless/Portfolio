function navMenu() {
  var x = document.getElementById("nav_links");
  var y = document.getElementById("resp_bar");
  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

let title = [
  "Sirani - Your Therapy Buddy",
  "CIAO - Web App for Generative Art",
  "Senti-Sufer - Chrome Extension for Sentiment Analysis of Youtube Comments",
  "Rock Paper Scissors - A simple Rock Paper Scissors Game",
  "E-Commerce Website - Dummy E-Commerce Website",
  "E-Commerce Website (React) - E-Commerce Website made using React Commerce.js and Stripe",
];

let imgsrc = [
  "../assets//sirani.png",
  "../assets//ciao.png",
  "../assets//sentisurfer.png",
  "../assets//Game_SS.png",
  "../assets//e-comm.png",
  "../assets//e-comm-react.png",
];

let wrap = document.getElementById("wpr");

let number = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < title.length; i++) {
  var codeBlock = `               <div class="Project-containers">
<div class="MessageInfo">${number[i]} / ${number.length}</div>
<div class="Carousel_img"><img src="${imgsrc[i]}" class="car-img"></div>
<div class="Project-Info">${title[i]}</div>
</div>`;

  wrap.innerHTML += codeBlock;
}

let activeSlide = document.getElementById("active_slide");
let slideNumber = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < slideNumber.length; i++) {
  var slideCode = ` <span class="dots" onclick="currentSlide(${slideNumber[i]})"></span>`;
  activeSlide.innerHTML += slideCode;
}

let eduCard = document.getElementById("edu_cardDiv");

let eduImg = ["../assets//kws.jpg", "../assets//ku.jpg"];
let eduName = ["Kahtmandu World School", "Kathmandu University"];
let eduDetails = [
  "Education : +2 Science",
  "Education : B. Sc. in Computer Science",
];
let batch = ["Batch : 2018-2020", "Batch : 2020-"];
let cgpa = ["CGPA : 3.57", "Pursuing"];

for (let i = 0; i < eduName.length; i++) {
  var eduCode = `       
<div class="card">
                <img src="${eduImg[i]}" class="edu-img">
                <div class="HS">
                    <h2 class="edu-details">${eduName[i]}</h2>
                    <h3 class="edu-details">${eduDetails[i]}</h3>
                    <h4 class="edu-details">${batch[i]}</h4>
                    <h4 class="edu-details">${cgpa[i]}</h4>
                </div>
            </div>`;
  eduCard.innerHTML += eduCode;
}

let skillsDiv = document.getElementById("skillsDiv");

skillsImg = [
  "../assets//html.png",
  "../assets//css.png",
  "../assets//js.png",
  "../assets//react.png",
  "../assets//c++.png",
  "../assets//python.png",
];

for (let i = 0; i < skillsImg.length; i++) {
  var skillsCode = `            
  <div class="skills-img"><img src="${skillsImg[i]}"></div>
  `;
  skillsDiv.innerHTML += skillsCode;
}
