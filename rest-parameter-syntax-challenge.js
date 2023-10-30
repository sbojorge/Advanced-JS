let mixedLetters = ["b", "d", "a", "c", "f", "e"];

// My solution is similar to CI's
let moreMixedLetters = [...mixedLetters, "h", "k", "g", "j", "i", "l"];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();


let reverseSort = updateSortReverse(moreMixedLetters, "n", "m", "o");
console.log(reverseSort);
console.log(mixedLetters);
