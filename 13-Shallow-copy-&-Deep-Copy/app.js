// primitive

let a = 2;
let b = a;

b = 7;

console.log("a:", a);
console.log("b:", b);

const person = {
  name: "Ahror",
  age: 25,
};

// spread operatori - to'liq malumotni nusxalash
const newPerson = { ...person }; //<-- shallow

newPerson.name = "Doniyor";
newPerson.age = 30;

console.log("person:", person);
console.log("newperson", newPerson);

// chap tomonida ...nom kelsa bu rest operator
const [bir, ...qolganlari] = [1, 2, 3];
console.log(qolganlari);
