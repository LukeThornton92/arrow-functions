// using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// using map()
const multByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);

console.log(mapResults);

// simplified w/ map

const simplified = nums.map(function (num) {
  return num * 2;
});

console.log(simplified);

// simplified w/ map() and arrow function

const arrow = nums.map((num) => num * 2);

console.log(arrow);

//with objects:
const studentsOld = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "Javascript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 4,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

const studentsWithIds = studentsOld.map((student) => [
  student.name,
  student.id,
  student.skill,
]);
console.log(studentsWithIds);
