const  quizDB=[
    {
        question:" Q1: Which of the following is used to read an HTML page and render it?",
        a:"Web server",
        b:"Web network",
        c:"Web browser",
        d:"Web matrix",
        ans:"ans3"
    },
    {
        question:" Q2: Which element is used for styling HTML5 layout?",
        a:"CSS",
        b:"jQuery",
        c:"JavaScript",
        d:"PHP",
        ans:"ans1"
    },
    {
        question:" Q3: Which HTML tag is used to insert an image?",
        a:"<img url=”htmllogo.jpg” />",
        b:"<img alt=”htmllogo.jpg” />",
        c:"<img src=”htmllogo.jpg” />",
        d:" <img link=”htmllogo.jpg” />",
        ans:"ans3"
    },

    {
        question:" Q4: Which of the following extension is used to save an HTML file?",
        a:".hl",
        b:".h",
        c:".htl",
        d:".html",
        ans:"ans4"
    },

    {
        question:" Q5: Which tag is used to create a blank line in HTML?",
        a:"<b>",
        b:"<br>",
        c:"<em>",
        d:" <a>",
        ans:"ans2"
    }

];



const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerText = quizDB[questionCount].question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = ()=>{
    let answer;

    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer = currAnsElem.id;
        } 
    });

    return answer;
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    const deselectAll=()=>{
        answers.forEach((currAnsElem)=> currAnsElem.checked=false);
    }

    if(questionCount < quizDB.length){
        loadQuestion();
        deselectAll();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}  ✌</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('ScoreArea');
    }
});
