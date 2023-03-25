const videoControl = document.querySelector('.video__file');
const videoTimeInfo = document.querySelector('.video__text');
let startStop = false;

function showVideoLenght() {
  videoTimeInfo.classList.add('video__text_active');
};

function hideVideoLenght() {
  videoTimeInfo.classList.remove('video__text_active');
};

function getTimeVideo() {
  document.getElementById("video__time").innerHTML = videoControl.currentTime.toFixed(2);
};

videoControl.onended = function () {
  videoControl.currentTime = 0;
  startStop = false;
};

//Проверка поддержки webp
function testWebP(callback) {
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
// Добавление класса _webp или _no-webp для HTML
testWebP(function (support) {
  const className = support === true ? 'webp' : 'no-webp';
  document.documentElement.classList.add(className);
});
/*
videoControl.addEventListener('click', function () {
  if (startStop == false) {
    videoControl.play();
    hideVideoLenght();
    startStop = true;
  } else {
    videoControl.pause();
    videoControl.ontimeupdate = function () { getTimeVideo() };
    showVideoLenght();
    startStop = false;
  }
});*/
