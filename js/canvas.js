const canvas = document.getElementById('canvas__figures');
const squareInfo = {
  width: 200,
  height: 200,
  x: 1,
  y: 399,
};
const rectangleInfo = {
  width: 100,
  height: 200,
  x: 699,
  y: 399,
};
const circleInfo = {
  x: 105,
  y: 105,
}
canvas.width = 800;
canvas.height = 600;

function createTrilangle() {
  const triangleСtx = canvas.getContext('2d');
  triangleСtx.strokeStyle = 'red';
  triangleСtx.lineWidth = 15;
  triangleСtx.beginPath();
  triangleСtx.moveTo(700, 30);
  triangleСtx.lineTo(625, 200);
  triangleСtx.lineTo(775, 200);
  triangleСtx.closePath();
  triangleСtx.stroke();
}

function animationSquare() {
  const squareСtx = canvas.getContext('2d');
  squareСtx.fillStyle = 'green';
  if (squareInfo.x <= canvas.width - squareInfo.width - rectangleInfo.width) {
    squareСtx.clearRect(squareInfo.x - 1, squareInfo.y, squareInfo.width, squareInfo.height);
    squareСtx.fillRect(squareInfo.x, squareInfo.y, squareInfo.width, squareInfo.height);
    squareInfo.x++;
  } else if (squareInfo.x >= canvas.width - squareInfo.width - rectangleInfo.width) {
    squareСtx.clearRect(squareInfo.x - 1, squareInfo.y, squareInfo.width, squareInfo.height);
    squareInfo.x = 1;
  }
  window.requestAnimationFrame(animationSquare);
};

function animationRectangle() {
  const rectangleСtx = canvas.getContext('2d');
  rectangleСtx.fillStyle = 'orange';
  if (rectangleInfo.y > canvas.height / 2.5) {
    rectangleСtx.clearRect(rectangleInfo.x, rectangleInfo.y + 1, rectangleInfo.width, rectangleInfo.height);
    rectangleСtx.fillRect(rectangleInfo.x, rectangleInfo.y, rectangleInfo.width, rectangleInfo.height);
    rectangleInfo.y--;
  } else if (rectangleInfo.y <= canvas.height / 2.5) {
    rectangleСtx.clearRect(rectangleInfo.x, rectangleInfo.y + 1, rectangleInfo.width, rectangleInfo.height);
    rectangleInfo.y = 399;
  }
  window.requestAnimationFrame(animationRectangle);
}

function createCircle() {
  const circleСtx = canvas.getContext('2d');
  circleСtx.fillStyle = 'yellow';
  circleСtx.arc(circleInfo.x, circleInfo.y, 100, 0, 2 * Math.PI);
  circleСtx.fill();
};

//конфликтует с функцией createTrilangle()
//с методом beginPath()

/*
function animationCircle() {
  const circleСtx = canvas.getContext('2d');
  circleСtx.fillStyle = 'yellow';
  if (circleInfo.y < canvas.height - circleInfo.y) {
    circleСtx.clearRect(0, 0, canvas.width, canvas.height);
    circleСtx.beginPath();
    circleСtx.arc(circleInfo.x, circleInfo.y, 100, 0, 2 * Math.PI);
    circleСtx.fill();
    circleСtx.closePath();
    circleInfo.y++;
  } else if (circleInfo.y >= canvas.height - circleInfo.y) {
    circleСtx.clearRect(0, 0, canvas.width, canvas.height);
    circleInfo.y = 101;
  }
  window.requestAnimationFrame(animationCircle);
}*/






