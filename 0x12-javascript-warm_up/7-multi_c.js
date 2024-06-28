#!/usr/bin/node
const text = ['C is fun'];
while (!isNaN(+process.argv[2]) === 'false') {
  console.log('Missing number of occurrences');
  break;
}
while (!isNaN(+process.argv[2])) {
  const times = +process.argv[2];
  console.log(Array(times).fill(text).join('\n'));
  break;
}
