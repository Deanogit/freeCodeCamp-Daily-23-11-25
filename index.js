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
  console.log(array);
  const filteredArray = [];
  const filtered = array.map((x) => {
    if (regex.test(x)) {
      filteredArray.push(x);
    }
  });
  // const filtered = array.filter(filterArray(array))
  // const filtered = array.filter(filter(array))
  console.log(filteredArray);

  return sentence;
}

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
