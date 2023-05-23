// Object refrence and copying
// let user = {
//   name: "Pavan Yadav"
// }
// let u1 = user;
// console.log(user.name);
// u1.name="Pete Davidson"
// console.log(u1);

// Comparison by expression
// let a = {};
// let b = a;

// if (a == b){print()}

// let obj = {
//   0: "Hello"
// };

// function a() {
//   document.getElementById('show').innerHTML = (obj["0"]) + " ," + (obj[0]);
// }

// ----------------------Using proto----------------
let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);