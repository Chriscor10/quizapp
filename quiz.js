const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];

  const gameScreen = document.querySelector(".game")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answerContainer = document.querySelector(".answers")
  const submit = document.querySelector(".submit")
  const play = document.querySelector(".play")

  let qIndex = 0
  let correctCount = 0
  let wrongCount = 0
  let total = 0
  let selectedAnswer;

  const showResult = () =>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"
  }

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `
        <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
    </div>

        `
    ).join("");

    selectAnswer()
};


// the select answer function is checking if my
// selected answer is false of true using target.value.

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click", (e)=> {
            selectedAnswer = e.target.value;
        })
    })
}


// the submit answer function is taking the value of the imput and 
//if its true increasing the count of correctcount and if not increasing the count of wrongcount and giving an alert is no answer is selected.

const submitAnswer = () =>{
    submit.addEventListener('click', ()=>{
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex);
        } else alert("Select an answer!");
    })
}

showQuestion(qIndex)
submitAnswer()