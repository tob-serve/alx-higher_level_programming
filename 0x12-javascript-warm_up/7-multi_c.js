#!/usr/bin/node
<<<<<<< HEAD
let i;
const times = process.argv[2];
const number = Number(times);

if (isNaN(number)) {
  console.log('Missing number of occurrances');
} else {
  while (i < number) {
    console.log('C is fun');
    i++;
  }
=======
const text = ['C is fun'];
while (!isNaN(+process.argv[2]) === 'false') {
  console.log('Missing number of occurrences');
  break;
}
while (!isNaN(+process.argv[2])) {
  const times = +process.argv[2];
  console.log(Array(times).fill(text).join('\n'));
  break;
>>>>>>> c5f76539efdc315aff1b104ba92bdfde25ddaca8
}
