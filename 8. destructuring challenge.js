let students = [
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: "John",
    subjects: ["art", "cad", "english", "maths", "science"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
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

const makeList = (arr, student) => {
  let foundStudent = arr.find(
    /**this (s) could be anything, so long as the s. is next!*/ (s) =>
      s.name === student
  );
  return foundStudent ? foundStudent.subjects : [];
};

let [first, second, ...rest] = makeList(students, "John");

console.log(first, second, rest);

/** How they suggest you complete task.
 
 
 * const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
          return itm.subjects;
        }
    }
};

let [first, second, ...rest] = makeList(students, 'John');
console.log(first, second, rest);
 */
