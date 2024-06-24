#!/usr/bin/node

let { argv } = require('process');
let argc = argv.length - 2;

if (argc == 0) {
        console.log('No argument')
} else{
        console.log('Argument found')
}
