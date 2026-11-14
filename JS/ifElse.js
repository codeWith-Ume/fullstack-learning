/// vote eligibility

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", function(input) {
    let age = Number(input);

    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You cannot vote");
    }

    rl.close();
});


//grade

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
