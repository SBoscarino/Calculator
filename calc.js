'use strict';

const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const typeLine = document.querySelector('#typeLine');
const buttons = document.querySelectorAll('div.button2');
let lhs = '';
let rhs = '';
let operator = '';

const eventHandler = function(event) {
  const entry = event.target.textContent;

  if (!operator) {
    lhs += entry;
  } else if (!operator && is_operator(entry)) {
    // Is operator
    operator = entry;
    lhs = parseInt(lhs);
  } else if(is_operator(entry)) {
    lhs = operate(operator, lhs, rhs)
    rhs = '';
    operator = entry;
  } else {
    rhs += entry;
  }

  typeLine.textContent = [ lhs, operator, rhs ].join(' ');
};

const isOperator = function(entry) {
  return entry === '+' || entry === '-' || entry === 'X' || entry === '/';
};

const operate = function(operator, lhs, rhs) {
  lhs = parseInt(lhs);
  rhs = parseInt(rhs);
  if (operator === '+') {
    return lhs + rhs;
  } else if (operator === '-') {
    return lhs - rhs;
  } else if (operator === 'X') {
    return lhs * rhs;
  } else if (operator === '/') {
    return lhs / rhs;
  } else {
    throw new Error('YOU FUCKED UP!!!')
  }
};

clear.addEventListener('click', function(event) {
  lhs = '';
  rhs = '';
  operator = '';
  typeLine.textContent = '';
});

equals.addEventListener('click', eventHandler);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', eventHandler);
}





































// let listen = document.querySelector('.calcBody');
// let typeLine = document.querySelector('#typeLine');
// let holder = [];
// let answerBox = document.querySelector('#typeLine');
// let meow = document.querySelector('.calcBody');
// let plus = document.querySelector('#plus')
// // let answerBox = document.querySelector('#typeLine');
//
// let symbols = document.querySelector('.lightgreen');
//
//
// //loops over divs in calcbody to assign event listeners.
// // function bodyLoop () {
// // for (let i = 0; i < calcBody.length; i++) {
// //
// // }
// //
// // }
// //
//
//
//
//
//












// //turns strings into numbers // stores in holder
// listen.addEventListener('click', function(evt) {
//   console.log("hi", typeof evt.target.textContent);
//   let numberCrunch = parseInt(evt.target.textContent);
//   holder.push(numberCrunch);
//   console.log(holder);
// });

//function that loops through holder array and posts it to the typeLine.
// plus.addEventListener('click', function() {
//   function looper (loop) {
//   for (let i = 0; i < holder.length; i++) {
//     typeLine.textContent = result;
//   }
//   }
// });

// answerBox.innerHTML = numberCrunch;

//turns NaN symbols into math things. // stores in answerBox
// symbols.addEventListener('click', function(evt) {
//   // let symbolCrunch = parseInt(evt.target.textContent);
//   let symbolCrunch = evt.target.innerHTML;
//   console.log(typeof evt.target.innerHTML);
//   // console.log(typeof numberCrunch,  evt.target.textContent);
//   if (symbolCrunch === "X") {
//       answerBox *= symbolCrunch;
//   } else if {
//     (symbolCrunch === "/") {
//       answerBox /= symbolCrunch;
//     }
//   }
//   console.log(answerBox);
// });
//





//Sound
// meow.addEventListener('click', function(evt) {
//   const audio = new Audio('./Sad-cat.mp3')
//   audio.play();
// });



//listener on whole calc
// able to click and return a value on each number on console.
//return that value to the screen on typeLine.
//pushing
//able to click math buttons and return basic math to screen.
//able to DO the math and return the answer of the math.
//clear math from screen.
// evt.target.innerHTML
//http://www.baconsizzling.com/
