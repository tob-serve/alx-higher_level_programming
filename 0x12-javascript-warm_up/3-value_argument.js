#!/usr/bin/node
const argV = process.argv;
if (argV[2] === undefined) {
	console.log('No argument');
} else {
	console.log(`${argV[3]}`);
}
