#!/usr/bin/node
function isNumber(value) {
	return !isNaN(Number(+value));
}
console.log(isNumber(process.argv[2]) ? `My number: ${process.argv[2]}` : 'Not a number');
