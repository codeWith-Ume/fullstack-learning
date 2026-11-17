// objects.keys()

// let student = {
//     userName:"Ume",
//     age:22,
//     course:"Js"
// }

// let result = Object.keys(student)
// console.log(result)

// exercise 
// let mobile = {
//     brand: "Samsung",
//     model: "Galaxy S24",
//     price: 60000,
//     color: "Black"
// };

// let result = Object.keys(mobile)
// console.log(result)

// Object.values()
// let laptop = {
//     brand: "Lenovo",
//     ram: "8GB",
//     storage: "512GB",
//     price: 50000
// };

// let result = Object.values(laptop)
// console.log(result)

// object.entries() returns both key and value in array
// let employee = {
//     name: "Rahul",
//     role: "Developer",
//     salary: 30000
// };

// let result = Object.entries(employee)
// console.log(result)

//object.assign()
// let person = {
//     name: "Ume",
//     age: 21
// };

// let education = {
//     degree: "BSc",
//     subject: "Botany"
// };

// Object.assign(person, education)
// console.log(person)

//object.freeze()
let laptop = {
    brand: "Lenovo",
    price: 50000
};

Object.freeze(laptop)

laptop.brand = "hp"
laptop.price = 8765432

console.log(laptop)