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
];

let imgsrc = [
  "../assets//sirani.png",
  "../assets//ciao.png",
  "../assets//sentisurfer.png",
];

let wrap = document.getElementById("wpr");

let number = [1, 2, 3];

for (let i = 0; i < title.length; i++) {
  var codeBlock = `               <div class="Project-containers">
<div class="MessageInfo">${number[i]} / ${number.length}</div>
<div class="Carousel_img"><img src="${imgsrc[i]}" class="car-img"></div>
<div class="Project-Info">${title[i]}</div>
</div>`;

  wrap.innerHTML += codeBlock;
}
