// Simple filtering

const people = [
  {
    name: "Michael",
    age: 23,
  },
  {
    name: "Lianna",
    age: 16,
  },
  {
    name: "Paul",
    age: 18,
  },
];

const oldEnough = people.filter((person) => person.age >= 21);
console.log(oldEnough);

const paul = people.filter((p) => p.name === "Paul")[0];
console.log(paul);

// (p) and p.name are the same as above, must be the same or will error!!
// To get just "Paul" at the end of the filter, you must add [0] to get tht first result at the very end!

//complex filtering

const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 5 },
      { name: "css", yrsExperience: 3 },
    ],
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 0 },
      { name: "html", yrsExperience: 4 },
      { name: "css", yrsExperience: 2 },
    ],
  },
  {
    id: 4,
    name: "Jason",
    profession: "Designer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 1 },
      { name: "css", yrsExperience: 5 },
    ],
  },
];
//below is the original version, below that is what it can be simplified to.

/** 
 * const candidates = students.filter((student) => {
  let strongSkills = student.skills.filter((skill) => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});
console.log(candidates);
*/
const has5yearsExp = (skill) => skill.yrsExperience >= 5;
let hasStrongSkills = (student) =>
  student.skills.filter(has5yearsExp).length > 0;

const candidates = students.filter(hasStrongSkills);
console.log(candidates);

//.length > 0; makes it true, meaning all true results will be logged, without this all people will be shown

const studentName = candidates.map((student) => student.name);
console.log(studentName);
