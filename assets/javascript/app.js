function check() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let question9 = document.quiz.question9.value;
    let question10 = document.quiz.question10.value;
    let correct = 0;
    let incorrect = 0;
    let unAnswered = none;

        if (question1 === "Boy George") {
            correct++;
        }
        else if (question1 !== "Boy George") {
            incorrect++;
        }

        if (question2 === "Willie Nelson") {
            correct++;
        }
        if (question3 === "Katy Perry") {
            correct++;
        }
        if (question4 === "Bon Scott") {
            correct++;
        }
        if (question5 === "Holiday") {
            correct++;
        }
        if (question6 === "The Police") {
            correct++;
        }
        if (question7 === "Jerry Lee Lewis") {
            correct++;
        }
        if (question8 === "Rhianna") {
            correct++;
        }
        if (question9 === "Stevie Wonder") {
            correct++;
        }
        if (question10 === "Stevie Nicks") {
            correct++;
        }

    
    
    
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("number-correct").innerHTML = "Number Correct: " + correct + "";
    document.getElementById("number-wrong").innerHTML = "Number Wrong: " + incorrect + "";
    document.getElementById("not-answered").innerHTML = "Number Unanswered: " + unAnswered + "";
}
   
   
  