var score = 0;
var questions = [
    {
        prompt: "What color are apples? (a) Red/Green (b) Purple (c) Orange",
        answer: "a"
    },
    {
        prompt: "What color are bananas? (a) Teal (b) Magenta(c) Yellow",
        answer: "c"
    }
];

for(var i=0; i < questions.length; i++) {
    var response = alert(questions[i].prompt)
    if(response == questions[i].answer) {
       score++; 
       alert("Correct!");
    } else {
        score--;
        alert("WRONG!");
    }
}

alert("you got " + score + "/" + questions.length);