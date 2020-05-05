let container = document.querySelector("#quizContainer");
let answerBox = document.querySelector("#answer");
let numSpan = document.querySelector(".questionNumValue");
let totalSpan = document.querySelector(".total");
let question = document.querySelector(".question");
let firstOption = document.querySelector(".first");
let secondOption = document.querySelector(".second");
let thirdOption = document.querySelector(".third");
let fourthOption = document.querySelector(".fourth");
let nextButton = document.querySelector(".btn");
let op1 = document.querySelector("#one");
let op2 = document.querySelector("#two");
let op3 = document.querySelector("#three");
let op4 = document.querySelector("#four");
let scoreValue = document.querySelector("#scoreValue");
let questionIndex = 0;
let index = 0;
let currentScore = 0;

//set question, options and answers
totalSpan.innerText = questions.length;
function load() {
  numSpan.innerText = index + 1;
  question.innerText = questions[questionIndex].q;
  firstOption.innerText = questions[questionIndex].answers.a;
  secondOption.innerText = questions[questionIndex].answers.b;
  thirdOption.innerText = questions[questionIndex].answers.c;
  fourthOption.innerText = questions[questionIndex].answers.d;
}

function verify(element) {
  let options = [...document.getElementsByClassName("options")];
  for (let option of options) {
    if (option.innerHTML === questions[questionIndex].correctAnswer) {
      option.style.backgroundColor = "green";
      option.style.color = "white";
    }
  }
  if (element.innerText === questions[questionIndex].correctAnswer) {
    element.style.backgroundColor = "green";
    element.style.color = "white";
    scoreValue.innerText = currentScore += 1;
  } else {
    element.style.backgroundColor = "red";
    element.style.color = "white";
  }

  op1.setAttribute("onclick", "");
  op2.setAttribute("onclick", "");
  op3.setAttribute("onclick", "");
  op4.setAttribute("onclick", "");
  nextButton.removeAttribute("disabled");
}

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  nextButton.setAttribute("disabled", "disabled");

  next();
});

function next() {
  op1.setAttribute("onclick", "verify(this)");
  op2.setAttribute("onclick", "verify(this)");
  op3.setAttribute("onclick", "verify(this)");
  op4.setAttribute("onclick", "verify(this)");
  let options = [...document.getElementsByClassName("options")];
  for (let option of options) {
    option.style.color = "";
    option.style.backgroundColor = "";
  }
  questionIndex++;
  index++;

  if (questionIndex === questions.length) {
    container.style.opacity = "0";

    alert(
      `You Answered ${
        questions.length
      } question(s). You got ${currentScore} right. You missed ${
        questions.length - currentScore
      }`
    );

    questionIndex = 0;
    index = 0;
    currentScore = 0;
    currentScore++;
  }
  load();
}

window.onload = function () {
  load();
};



