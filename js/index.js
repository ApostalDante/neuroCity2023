//Получение JSON данных с помощью HTTP
const requestURL = 'https://reqres.in/api/users';

function sendRequest(metod, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(metod, url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      };
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
};

/* или */
async function doAsyncTask() {
  const result = await fetch('https://reqres.in/api/users')
    .then(response => response.json());
  console.log(result);
};

//block
const blockParentStyle = document.querySelector('.block__parent-js');
const blockChildStyle = document.querySelector('.block__child-js');

blockParentStyle.style.width = '400px';
blockParentStyle.style.height = '300px';
blockParentStyle.style.border = '1px solid black';
blockParentStyle.style.display = 'flex';
blockParentStyle.style['flex-direction'] = 'column';
blockParentStyle.style['align-items'] = 'center';
blockParentStyle.style.margin = '0 auto 10px';

blockChildStyle.style.width = '200px';
blockChildStyle.style.height = '150px';
blockChildStyle.style.border = '1px solid black';
blockChildStyle.style.position = 'relative';
blockChildStyle.style.margin = 'auto';

//3 elements
const elementArticleLeft = document.querySelector('.article__left');
const elementArticleRight = document.querySelector('.article__right');
const elementArticleTop = document.querySelector('.article__top');
const buttomShowElements = document.querySelector('.element__buttom');

function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
};

function toggleElementArticle() {
  elementArticleLeft.classList.toggle('article__left_active');
  elementArticleRight.classList.toggle('article__right_active');
  elementArticleTop.classList.toggle('article__top_active');
};
toggleElementArticle = debounce(toggleElementArticle, 2000);

//WebSocket
if (!window.WebSocket) {
  document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// создать подключение
const socket = new WebSocket("ws://localhost:8081");

document.forms.publish.onsubmit = function () {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  socket.send(JSON.stringify({
    name, message
  }));
  return false;
};

// обработчик входящих сообщений
socket.onmessage = function (event) {
  let incomingMessage = event.data;
  showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
  let messageElem = document.createElement('div');
  messageElem.appendChild(document.createTextNode(message));
  let json = JSON.parse(message);
  console.log(json);
  document.getElementById('subscribe').appendChild(messageElem);
}

//canvans
animationSquare();
animationRectangle();
createTrilangle();
createCircle();
//JSON
doAsyncTask();
sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

//video
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
});
//3 elements  
buttomShowElements.addEventListener('click', toggleElementArticle);
//squares
buttonCreate.addEventListener('click', function () {
  printSquare();
  randomSquaresCount += randomSquaresGet;
});
buttonClear.addEventListener('click', function () {
  for (let i = 0; i < randomSquaresCount; i++) {
    let squaresCard = document.querySelector('.squares__field-card');
    squaresCard.remove();
  }
  randomSquaresCount = 0;
});
