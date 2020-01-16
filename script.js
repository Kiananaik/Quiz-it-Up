(function() {
    function buildQuiz() {
        var build = [];
        questions.forEach((currentQ, qNum) => { // refer to each question.
            var answers = []; // store answer choices in an array.
            for (letter in currentQ.answers) { // refers to each answer option.
                answers.push( // took this idea for an HTML radio button from internet.
                    `<label>
                        <input type="radio" name="question${qNum}" value="${letter}">
                        ${letter} :
                        ${currentQ.answers[letter]}
                    </label>`
                );
            }
            // this will prob get deletd once i add in a caroursel feature.
            build.push(
                `<div class="question"> ${currentQ.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
            );
        });
        // make build list & place on page as a string.
        quiz.innerHTML = build.join("");
    }

    function displayResults() {
        var answerBoxes = quiz.querySelectorAll(".answers"); // need answers from quiz.
        var keepScore = 0; // keep score.
        questions.forEach((currentQ, qNum) => {
            // identify which answer was actually chosen.
            var answerBox = answerBoxes[qNum];
            var choice = `input[name=question${qNum}]:checked`;
            var userChoice = (answerBox.querySelector(choice) || {}).value;
            if (userChoice === currentQ.correctAnswer) {
                keepScore++;
                // color the answers green?
                // answerBoxes[qNum].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank color the answers red?
                // answerBoxes[qNum].style.color = "red";
            }
        });
        // display score.
        resultBox.innerHTML = `${keepScore} out of ${questions.length}`;
    }

    const quiz = document.getElementById("quiz");
    const resultBox = document.getElementById("results");
    const submit = document.getElementById("submit");
    const questions = [
        {
            question: "What is Kiki's middle name?",
            answers: {
                a: "Sarah",
                b: "Kelsey",
                c: "Samantha",
                d: "Natasha",
            },
            correctAnswer: "d"
        },
        {
            question: "What is Kiki's favorite colour?",
            answers: {
                a: "Marigold Yellow",
                b: "Olive Green",
                c: "Crimson Red",
                d: "Strawberry Pink",
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these bands is NOT one of Kiki's top 3 faves?",
            answers: {
                a: "Chevelle",
                b: "Tool",
                c: "Gorillaz",
                d: "System of a Down",
            },
            correctAnswer: "a"
        },
        {
            question: "Kiki has a Bachelors of Science in what subject?",
            answers: {
                a: "Physics",
                b: "Chemistry",
                c: "Computer Science",
                d: "Biology",
            },
            correctAnswer: "a"
        },
        {
            question: "What hobby would be hard to catch Kiki doing?",
            answers: {
                a: "Playing Videogames",
                b: "Reading",
                c: "Working Out",
                d: "Playing pool",
            },
            correctAnswer: "c"
        },
        {
            question: "What color has Kiki's hair never been?",
            answers: {
                a: "Purple",
                b: "Red",
                c: "Pink",
                d: "Black",
            },
            correctAnswer: "a"
        },
        {
            question: "What animal has Kiki never had as a pet?",
            answers: {
                a: "Fish",
                b: "Snake",
                c: "Dog",
                d: "Rabbit",
            },
            correctAnswer: "b"
        },
        {
            question: "What is Kiki's dog's name?",
            answers: {
                a: "Lilly",
                b: "Misha",
                c: "Bobo",
                d: "Jack",
            },
            correctAnswer: "d"
        },
        {
            question: "What country was Kiki born in?",
            answers: {
                a: "Germany",
                b: "U.S.A.",
                c: "England",
                d: "Venezuela",
            },
            correctAnswer: "d"
        },
        {
            question: "What has Kiki built a prototype of?",
            answers: {
                a: "Electroencephalogram",
                b: "Solar Cell",
                c: "Helium Laser",
                d: "Electrocardiograph",
            },
            correctAnswer: "a"
        },
    ];
    
    // display quiz right away
    buildQuiz();

    // on submit, show results?????
    submit.addEventListener("click", displayResults);
})();


