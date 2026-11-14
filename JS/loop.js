// 5 times hello
for (let i = 1; i <= 5; i++){
    console.log("Hello")
}

// numbers 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(i)
}

// even numbers till 20
for (let i = 2; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i)
    } 
}
// multiplication table of 5
for (let i = 5; i <= 50; i++){
    if (i % 5 == 0){
        console.log(i)
    }
}

// sum of numbers till 10
let NumSum = 0
for (let i = 1; i <= 10; i++){
    NumSum = i + NumSum
}
console.log(NumSum)


// reverse counting till 10 to 1
for (let i = 10; i >= 1; i--){
    console.log(i)
}

//star pattern 5line
for (let i = 1; i <= 5; i ++){
    for (j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log()
}