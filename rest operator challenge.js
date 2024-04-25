let mixedLetters = ["b", "d", "a", "c", "f", "e"];

let moreMixedLetters = [...mixedLetters, "h", "k", "g", "j", "i", "l"];

console.log(moreMixedLetters);

/* How i envision students doing this challenge 

const updateSortReverse =  (arr, ...letters) => {
    let copy = [...arr];
    for(let i of letters) {
        copy.push(i);
    }
    
    return copy.sort().reverse();
};
*/

const updateSortReverse = (arr, ...letters) =>
  [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, "n", "m", "o");
console.log(reverseSort);
console.log(mixedLetters);
