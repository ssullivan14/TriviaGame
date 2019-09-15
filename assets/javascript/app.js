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


        if (question1 === "Boy George") {
            correct++;
        }
        else if(question1 !== "Boy George") {
            incorrect++;
        }
        if (question2 === "Willie Nelson") {
            correct++;
        }
        else if (question2 !== "Willie Nelson") {
            incorrect++;
        }
        if (question3 === "Katy Perry") {
            correct++;
        }
        else if (question3 !== "Katy Perry") {
            incorrect++;
        }
        if (question4 === "Bon Scott") {
            correct++;
        }
        else if (question4 !== "Bon Scott") {
            incorrect++;
        }
        if (question5 === "Holiday") {
            correct++;
        }
        else if (question5 !== "Holiday") {
            incorrect++;
        }
        if (question6 === "The Police") {
            correct++;
        }
        else if (question6 !== "The Police") {
            incorrect++;
        }
        if (question7 === "Jerry Lee Lewis") {
            correct++;
        }
        else if (question7 !== "Jerry Lee Lewis") {
            incorrect++;
        }
        if (question8 === "Rhianna") {
            correct++;
        }
        else if (question8 !== "Rhianna") {
            incorrect++;
        }
        if (question9 === "Stevie Wonder") {
            correct++;
        }
        else if (question9 !== "Stevie Wonder") {
            incorrect++;
        }
        if (question10 === "Stevie Nicks") {
            correct++;
        }
        else if (question10 !== "Stevie Nicks") {
            incorrect++;
        }

    
    
    
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("number-correct").innerHTML = "Number Correct: " + correct + "";
    document.getElementById("number-wrong").innerHTML = "Number Wrong: " + incorrect + "";
   
}

    let timeleft = 30;
    let downloadTimer = setInterval(function(){
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Times Up!"
    }
    }, 1000);


   
  