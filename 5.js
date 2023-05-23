// -----------------------------------Object reference and copying----------------------------
// let user = {
//   name: "Pavan",
//   age: 20
// };

// let users = {};

// for (let key in user) {
//   users[key] = user[key];
// }
// users.name="Pavan Yadav";
// console.log(user);
// console.log(users.name);

// arrays
// const cars = ["Volvo", "Honda", "Tata"];
// for (let i of cars) {
//   console.log(typeof [cars]);
// }
// function a() {
//   document.getElementById('show').innerHTML = cars;
// }



// javascript array methods
// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const size = fruits.length;
// const string = fruits.toString();
// const join = fruits.join(" * ");
// console.log(size);
// console.log(string);
// console.log(join);

// pop and push 
// let pushedFruits = fruits.push("Pineapple");
// console.log(fruits);

// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log(poppedFruit);


// shift and unshift ->Shift and unshit remove element from start. unlike pop and push
// shift
// let fruit = fruits.shift()
// console.log(fruit);
// console.log(fruits);

// unshift
// fruits[2] = "Lemon";
// let unshiftFruit = fruits.unshift("Guvava");
// console.log(fruits);

// // deleting the array
// delete fruits[0];
// console.log(fruits);

// ------------------------------------------------------------
// Concating two arrays
// ------------------------------------------------------------

// const fruits = ["Apple", "Guvava", "Kiwi", "Orange", "Mango"];
// const veg = ["Lemon", "Potato", "Lady Finger", "Garlic"];
// const user = ["Pavan", "Ravan", "Savan", "Kavan"];
// console.log(fruits.length);
// console.log(veg.length);
// const concat = fruits.concat(veg, user);
// console.log(concat);

// merging with an array with value
// const concat = user.concat("Devan");
// console.log(concat);

// flattering the array
// const num = [[1, 2], [3, 4], [5, 6]];
// const newArr = num.flat();
// console.log(newArr);

// slicing and splicing in java-script

const users = ["Pavan", "Ravi", "Kavan", "Neha", "Sakshi", "Vatsal"];
const splicedArr = users.splice(0, 0, "Yoruichi");
console.log(users);

// slice
const slicedArr = users.slice(2);
console.log(slicedArr);
console.log(users);
