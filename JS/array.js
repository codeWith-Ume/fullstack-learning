// When we want to store multiple values in one variable their we use arrays:)
let students = ["Ume", "Tisha", "Vidya", "Usha"]
console.log(students) 

//Access particular item
console.log(students[1])

//Adding element in array(add in last)
students.push("Harshikaa")
console.log(students)

//adding element in array(add in first)
students.unshift("Apple")
console.log(students)

//add element in specific position
students.splice(1,0,"ball")

//removing items(from last)
students.pop()
console.log(students)

//removing items (from beggining)
students.shift()
console.log(students)

//remove from a specific position
students.splice(1,1)
console.log(students)


//finding the length
console.log(students.length)

