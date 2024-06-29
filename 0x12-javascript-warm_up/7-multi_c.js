#!/usr/bin/node
let i = 0;
const times = process.argv[2];
const number = Number(times);

if (isNaN(number)) {
  console.log('Missing number of occurrances');
} else {
  while (i < number) {
    console.log('C is fun');
    i++;
  }
}
