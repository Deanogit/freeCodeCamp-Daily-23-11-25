function countCharacters(sentence) {
  //console.log(sentence)
  // string to lowercase
  const lowercase = sentence.toLowerCase();
  //console.log(lowercase)
  // ignore numbers, spaces, punctuation etc
  const regex = /[a-z]+/;
  const filtered = lowercase.split(regex);
  console.log(filtered);
  // chuck into an array;
  const array = filtered.map((x) => x.split(''));
  console.log(array);
  return sentence;
}
