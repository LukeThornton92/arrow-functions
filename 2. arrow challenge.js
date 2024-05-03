let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "maths", "english", "art"],
    teacher: { science: "Iris", maths: "Harry", english: "Joan", art: "Simon" },
    results: { science: 93, maths: 95, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 63, maths: 79, art: 95 },
  },
];

const averagePoints = (arr, subject) => {
  let total = 0;
  let numStudents = 0;
  for (let student of arr) {
    if (subject in student.results) {
      total += student.results[subject];
      numStudents++;
    }
  }
  let returnValue = total / numStudents;
  return returnValue;
};
let averageMarks = averagePoints(students, "cad");
console.log(averageMarks);
