const questions = [
       {
         question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1, 
       },
      {
        question: "What is the color of an emerlad?",
         options: ["Skyblue", "Green", "Yellow", "Blue"],
         correctAnswer: 1,
       },
       {
         question: "How many planets are in our Solar System?",
         options: ["Nine", "Ten", "Eight", "Seven"],
         correctAnswer: 2,
       },
       {
         question: "Which state is famous for Hollywood?",
         options: ["California", "Paris", "Japan", "London"],
         correctAnswer: 0,
       },
       {
         question: "What is the chemical symbol for gold?",
         options: ["Au", "Ag", "Hg", "Pb"],
        correctAnswer: 0,
       },
       {
         question: "What is the color of a school bus?",
         options: ["Blue", "Black", "White", "Yellow"],
         correctAnswer: 3,
       },
       {
         question: "What is the capital city of Japan?",
         options: ["Tokyo", "Rome", "Paris", "Berlin"],
         correctAnswer: 0,
       },
       {
         question: "Which country is known as the Land of the Rising Sun?",
         options: ["China", "Korea", "Japan", "Vietnam"],
         correctAnswer: 2,
       },
       {
         question: "What is the largest planet in our solar system?",
         options: ["Mars", "Jupiter", "Venus", "Saturn"],
         correctAnswer: 1,
       },
       {
         question: "What is the largest continent?",
         options: ["Europe", "Asia", "Antartica", "North America"],
         correctAnswer: 1,
      },
       // Add more questions here
     ];
    
     let currentQuestion = 0;
     let score = 0;
    
     const questionCounter = document.getElementById("question-counter");
     const scoreCounter = document.getElementById("score");
     const questionText = document.getElementById("question-text");
     const options = document.querySelectorAll(".option");
     const nextButton = document.getElementById("next-button");
     const scoreboard = document.querySelector(".scoreboard");
     const finalScore = document.getElementById("final-score");
     const restartButton = document.getElementById("restart");
     // Get the "Start Quiz" button and quiz container elements
     const startQuizButton = document.getElementById("quiz-button");
     const quizContainer = document.querySelector(".quiz-container");
    
    // Add an event listener to start the quiz when the button is clicked
     startQuizButton.addEventListener("click", () => {
       // Hide the start button container
       startQuizButton.parentElement.style.display = "none";
      // Show the quiz container
       quizContainer.style.display = "block";
       // Start the quiz
       loadQuestion();
    });
    
     // Initialize event listeners
     options.forEach((option, index) => {
      option.addEventListener("click", () => handleOptionClick(index));
     });
    
     function loadQuestion() {
       if (currentQuestion < questions.length) {
         questionCounter.textContent = `Question ${currentQuestion + 1}/${
          questions.length
        }`;
        questionText.textContent = questions[currentQuestion].question;
    
        options.forEach((option, index) => {
           option.textContent = questions[currentQuestion].options[index];
           option.style.backgroundColor = "white"; // Reset option background color
           option.style.pointerEvents = "auto"; // Re-enable click events
        });
       } else {
         showScoreboard();
       }
     }
    
     function handleOptionClick(selectedOptionIndex) {
       const correctAnswerIndex = questions[currentQuestion].correctAnswer;
    
      // Remove event listeners from all options to prevent multiple clicks
       options.forEach((option) => {
         option.style.pointerEvents = "none";
       });
    
       if (selectedOptionIndex === correctAnswerIndex) {
         options[selectedOptionIndex].style.backgroundColor = "green";
         score++;
         scoreCounter.textContent = `Score: ${score}`;
       } else {
         options[selectedOptionIndex].style.backgroundColor = "red";
         options[correctAnswerIndex].style.backgroundColor = "green";
       }
    
       nextButton.disabled = false;
     }
    
       function showScoreboard() {
       scoreboard.style.display = "block";
       finalScore.textContent = score;
     }
    
       nextButton.addEventListener("click", () => {
       currentQuestion++;
       nextButton.disabled = true;
       loadQuestion();
     });
    
     restartButton.addEventListener("click", () => {
       currentQuestion = 0;
       score = 0;
      scoreboard.style.display = "none";
       loadQuestion();
       scoreCounter.textContent = "Score: 0";
    });
    
     // Initialize the quiz
     loadQuestion();
     