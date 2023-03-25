const buttonCreate = document.querySelector('.squares__btn-create');
const buttonClear = document.querySelector('.squares__btn-clear');
const squaresParent = document.querySelector('.squares__display');
let randomSquaresGet = 0;
let randomSquaresCount = 0;

function random(min, max) {
  return Math.round(min + Math.random() * (max - min));
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function printSquare() {
  randomSquaresGet = random(10, 100);
  for (let i = 0; i < randomSquaresGet; i++) {
    let square = document.createElement('div');
    square.setAttribute('style', `background-color: ${getRandomColor()};`);
    square.className = 'squares__field-card';
    squaresParent.appendChild(square);
  }
}

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
