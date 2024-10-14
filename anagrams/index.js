// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let new_Str_A = stringA.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").sort().join("");
  let new_Str_B = stringB.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").sort().join("");
  console.log(new_Str_A);
  console.log(new_Str_B);
  return (new_Str_A === new_Str_B);
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
