/**
 * You will create a single line of code that should filter the students array and return only the items 
 * who's maths scores are greater than or equal to  90.  As this needs to be done in a single line of 
 * code, you will also be required to use an arrow function that does not have a return statement.
 * 
 * 1. Create a variable named: topMaths using the const keyword
 * 2. Assign it a value from using the filter method on the students array
 * 3. Use a single line arrow function within the filter method (should not use a return statement)
 * 4. Log out the variable topMaths

 */

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
    results: { science: 84, maths: 97, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 67, english: 87, art: 95 },
  },
];

const topMaths = students.filter((itm) => itm.results.maths >= 90);
console.log(topMaths);
