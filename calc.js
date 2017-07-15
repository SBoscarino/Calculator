
let listen = document.querySelector('.calcBody');
let typeLine = document.querySelector('#typeLine');
let holder = [];
let meow = document.querySelector('.calcBody');
let answerBox = document.querySelector('#typeLine');



//turns strings into numbers // stores in answerBox
listen.addEventListener('click', function(evt) {
  let numberCrunch = parseInt(evt.target.textContent);
  console.log(typeof numberCrunch,  evt.target.textContent);
  answerBox += numberCrunch;
  console.log(answerBox);
});


//Sound
meow.addEventListener('click', function(evt) {
  const audio = new Audio('./Sad-cat.mp3')
  audio.play();
});



//listener on whole calc :)
// able to click and return a value on each number on console.
//return that value to the screen on typeLine.
//pushing
//able to click math buttons and return basic math to screen.
//able to DO the math and return the answer of the math.
//clear math from screen.
// evt.target.innerHTML
