// Character Count
// Given a sentence string, return an array with a count of each character in alphabetical order.

// Treat upper and lowercase letters as the same letter when counting.
// Ignore numbers, spaces, punctuation, etc.
// Return the count and letter in the format "letter count". For instance, "a 3".
// All returned letters should be lowercase.
// Do not return a count of letters that are not in the given string.

function countCharacters(sentence) {
  //console.log(sentence)
  // string to lowercase
  const lowercase = sentence.toLowerCase();
  //console.log(lowercase)
  // ignore numbers, spaces, punctuation etc
  const regex = /[a-z]+/;
  function filterArray(x) {
    return regex.test(x);
  }
  const array = lowercase.split('');
  //const array = lowercase.split("");
  // console.log(array)
  const filteredArray = [];
  const filtered = array.map((x) => {
    if (regex.test(x)) {
      filteredArray.push(x);
    }
  });
  // const filtered = array.filter(filterArray(array))
  // const filtered = array.filter(filter(array))
  // console.log(filteredArray)
  // arrange in alphabetical order
  const sorted = filteredArray.sort();
  console.log(sorted);

  const countPlease = sorted.reduce((a, v) => {
    return {
      ...a,
      [v]: (a[v] || 0) + 1,
    };
  }, {});
  console.log(countPlease);

  // const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

  // const count = arr.reduce((accumulator, value) => {
  //   return {
  //     ...accumulator,
  //    [value]: (accumulator[value] || 0) + 1,
  //   };
  // }, []);

  // console.log(sorted);
  // theres a simple way to get the value and number of instances...
  // count the number of instances letters in sorted
  // const counted = sorted.map((x) => x.reduce((a, b) => {
  //   a === b
  //   }))
  // console.log(counted)
  // const obj = {};
  // sorted.forEach(e => {
  //  sorted[e] = (sorted[e] || 0) + 1;
  //})
  // let string = "";
  // for (const [key, value ] of Object.entries(obj)) {
  //string = ` ${key} ${value}`
  //console.log(` ${key} ${value}`)
  //}
  // return sentence;
}

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

// 👇️ {one: 3, two: 2, three: 1}
// console.log(count);

// const object = {
//  a: "some string",
//  b: 42,
// };

// for (const [key, value] of Object.entries(object)) {
//   console.log(`${key}: ${value}`);
// }

// Expected output:
// "a: some string"
// "b: 42"

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = arr.reduce((accumulator, value) => {
//   return {
//     ...accumulator,
//    [value]: (accumulator[value] || 0) + 1,
//   };
// }, []);

// 👇️ {one: 3, two: 2, three: 1}
// console.log(count);
