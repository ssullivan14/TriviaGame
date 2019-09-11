//timer starts onload
setTimeout(timeUp, 1000 * 10);


function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#timer").append("<h2>Time's Up!</h2>");
    console.log("time is up");

};

//variable with myQuestions that will need to be pushed to HTML
let myQuestions = [{
        question: "Who was the lead singer of the band Culture Club?",
        answers: {
            a: 'Boy George',
            b: 'George Michael',
            c: 'Elton John',
            d: 'David Bowie'
        },
        correctAnswer: "a"
    },
    {
        question: "What country singer wrote Patsy Cline's hit song Crazy?",
        answers: {
            a: 'Glen Campbell',
            b: 'Johnny Cash',
            c: 'Willie Nelson',
            d: 'June Carter Cash'
        },
        correctAnswer: "c"
    },

    {
        question: "Who rose to fame with the hit song I Kissed A Girl?",
        answers: {
            a: "Gwen Stefani",
            b: "Katy Perry",
            c: "Miley Cyrus",
            d: "Avril Lavigne"
        },
        correctAnswer: "b"
    },
    {
        question: "What was the name of the first lead singer of AC/DC, who died in 1980 at the age of 33?",
        answers: {
            a: "Jeff Hanneman",
            b: "Bon Scott",
            c: "Nick Menza",
            d: "Chuck Schuldiner"
        },
        correctAnswer: "b"
    },
    {
        question: "What was Madonna’s first UK top ten single?",
        answers: {
            a: "Like a Virgin",
            b: "Holiday",
            c: "Papa Don't Preach",
            d: "Like a Prayer"
        },
        correctAnswer: "b"
    },
    {
        question: "Stewart Copeland was the drummer with which band?",
        answers: {
            a: "The Cars",
            b: "The Police",
            c: "Talking Heads",
            d: "U2"
        },
        correctAnswer: "b"
    },
    {
        question: "Which American rock’n’roll star caused controversy when he married a young teenager?",
        answers: {
            a: "Johnny Cash",
            b: "Elvis Presley",
            c: "Ritchie Valen",
            d: "Jerry Lee Lewis"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the better known stage name of Robyn Fenty?",
        answers: {
            a: "Rhianna",
            b: "Lady Gaga",
            c: "Cardi B",
            d: "Nicki Minaj"
        },
        correctAnswer: "a"
    },
    {
        question: "Whose childhood hit was Fingertips?",
        answers: {
            a: "Michael Jackson",
            b: "Stevie Wonder",
            c: "Aretha Franklin",
            d: "Jackson 5"
        },
        correctAnswer: "b"
    },
];

//variables where questions, answers, results get the div in html

//generate quiz

// You'll create a trivia form with multiple choice or true/false options (your choice).
//function startGame () { 
// The player will have a limited amount of time to finish the quiz. 





// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.
