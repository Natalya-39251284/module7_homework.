// MODUL_7
//Задание 7.1.1

function printInfo(name, age) {
 console.log("Name: " + name + ", Age: " + age);
}

  const person = {
    name: "Lev",
    age: 30
  };
  printInfo(person.name, person.age);

//Задание 7.7.2

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
  }
}
const obj = { a: 2, b: 3, operator: "+" };
const result = calculate.apple(null, [obj.a, obj.b, obj.operator]);
consol.log(result);

//Задание 7.7.3

const user = [
  { name: "Иван", age: 17 },
  { name: "Олег", age: 23 },
  { name: "Егор", age: 25 },
];

const userOver18 = user.filter((user) => user.age >= 18);

const nameOfUserOver18 = userOver18.map((user) => user.name);
console.log(userOver18);
console.log(nameOfUserOver18);

//Задание 7.7.4

function setFullName(newName) {
  this.FullName = newName;
}
let person2 = {
  firstName: "Jhon",
  lastName: "Smith",
};

let setPersonFullName = setFullName.bind(person);
setPersonFullName("Jhon Smith");
console.log(person.fullName);

//Задание 7.7.5

const arr=['html','css','html','js']
 
 
const newArr=arr.filter((item)=>{
 
 
return item
 
})
console.log(newArr);
