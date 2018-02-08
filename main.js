
    var score;
    var submit;
    var answers;
    var questionIndex = 0
    var currentQuestion;
    var questionBox = $(".sports-questions");
    var answerOne = $(".answer1");
    var answerTwo = $(".answer2");
    var answerThree = $(".answer3");
    var answerFour = $(".answer4");
    var answerBoxes = $(".answers div");
    var playerOneScoreDisplay = $(".score1");
    var playerTwoScoreDisplay = $(".score2");
    var correctAnswer 
    var playerOneScore = 0
    var playerTwoScore = 0
    var currentPlayer = 1
    var incorrectAnswers = 0

    var questions = [
        {
        question: "How many Championships does Kobe Bryant have?",
        answers:    {
                    a: "5",
                    b: "4",
                    c: "0",
                    d: "2",
        },
        correctAnswer:  "5"
    },{
        question: "Who wore the number 2 for the New York Yankees?" ,
        answers:  {
                    a: "Shaq",
                    b:  "Mickey Mouse",
                    c:  "Alex Rodriguez",
                    d:  "Derek Jeter",
        },
        correctAnswer:  "Derek Jeter"
    },{
        question: "who won the 2018 Super Bowl?",
        answers:  {
                    a: "Patriots",
                    b:  "Steelers",
                    c:  "Eagles",
                    d:  "49ers",
        },
        correctAnswer:  "Eagles"
    },{
        question: "How many Super Bowl rings does Tom Brady have?" ,
        answers:  {
                    a:  "2",
                    b:  "3",
                    c:  "5",
                    d:  "none",
        },
        correctAnswer:  "5"
    }];
    alert("Player One Turn")
    // 
    function answerClickHandler(){
        if(this.innerText == currentQuestion.correctAnswer){
            if(currentPlayer == 1){
                playerOneScore += 1
                playerOneScoreDisplay.text("Score: " + playerOneScore)
            } else if (currentPlayer == 2){
                playerTwoScore += 1
                playerTwoScoreDisplay.text("Score: " + playerTwoScore)
            }
            changeQuestion()
        } else {
            if(incorrectAnswers == 0 ) {
                alert("you are not correct! you have one more try!")
                incorrectAnswers +=1
            } else if(incorrectAnswers > 0){
                alert("incorrect again!")
                changeQuestion()
            }
        }
    }

    // 
    for(var i =0; i<answerBoxes.length; i++) {
        answerBoxes[i].addEventListener("click", answerClickHandler)

    }

    // 
    function changeQuestion() {
        if(questionIndex < questions.length) {
            currentQuestion = questions[questionIndex]
            questionBox.text(currentQuestion.question)
            answerOne.text(currentQuestion.answers.a)
            answerTwo.text(currentQuestion.answers.b)
            answerThree.text(currentQuestion.answers.c)
            answerFour.text(currentQuestion.answers.d)
            questionIndex += 1
            
            
        } else if (currentPlayer == 1) {
            switchTurns()
            alert("It is now Player Two Turn!")
            changeQuestion()
        } else if(currentPlayer == 2) {
            showResults()
            
        }
    }
    changeQuestion()

    // 
    function switchTurns() {
        incorrectAnswers = 0
        questionIndex = 0
        if(currentPlayer == 2){
            currentPlayer = 1 
        
        }
        else if (currentPlayer == 1){
            currentPlayer = 2
        }
    }



    function startGame() {

    }
    
    // 
    function showResults() {
        if(playerOneScore > playerTwoScore){
            alert("PLAYER ONE IS THE WINNER")
        } else if(playerTwoScore > playerOneScore) {
            alert("PLAYER TWO IS THE WINNER")
        }
        
        
    }
        
    
