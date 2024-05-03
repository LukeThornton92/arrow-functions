let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 93, maths: 77, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 87, art: 95 },
  },
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students.map((itm) => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log("\n");
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students.map(mapper);
console.log(john);
console.log(rest);
