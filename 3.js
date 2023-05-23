// -------------------------------Java-Script Objects------------------------------


// let user = new Object(); //Object Constructer Syntax
// let user1 = {}; // Object literal Syantax



// let user = {
//   name: "Pavan",
//   gender: "Male",
//   age: 20,
//   ["likes pets"]: ["Dog", "Cat"]
//   , about: function () {
//     return `Hello, I'am ${this.name} and i'am ${this.age} years old. And he also like ${this["likes pets"][0]} too....`;
//   }

// };

// function a() {
//   document.getElementById('show').innerHTML = user.about();
// }


// Real life code
// function makeUser(name, age) {
//   return {

//     name: name,
//     age: age
//     , about: () => {
//       return `Hello my name is ${name} and i'am ${age} years old.`;
//     }
//   }
// }

// const ans = makeUser("Pavan Yadav", 20);



// for in loop 
// let user = {
//   name: "Pavan Yadav",
//   age: 20,
//   occupation: "Front-end Developer",
//   isAdmin: true
// };

// for(let key in user){
//   alert(key);
//   alert(user[key]);
// }

// ordered like an object
let codes = {
  "49": "Germany",
  "48": "Utopia",
  "47": "France",
  "69": "India"
};

for(let code in codes){
  alert(code);
}