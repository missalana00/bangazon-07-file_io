#!/usr/bin/env node

// const fs = require('fs');
// console.log(fs); // gave us the whole node module
// console.log(fs.readFileSync); // access the readFileSync property from the node module (fs)

// This particular method on this particular node module takes an argument of a file path
// and prints the contents as a string to the terminal

// Destructured node module to pluck out the readFileSync method
const { readFileSync } = require("fs");

// Here we are grabbing the argument of a command line script; in this case, 
// the program is expecting a file path 

// argInput is set to whatever file path I pass in 
const argInput = process.argv[2];

// Means, if argInput is a thing that is not undefined or null, it will be true and
// the rest of the code will run 
if (argInput) {
    // try just means "do this code..."
    try {
        // readFileSync is just a method on fs node module that takes a file path
        // and returns ("spits out") whatever string is in the file
        const spitItOutput = readFileSync(argInput);
        // The below is essentially node's console.log
        process.stdout.write(spitItOutput);
    // If there was any error in the try, catch it and log it...
    } catch(e) {
        console.log("There was an error", e)
    }
};

// To run this code, you would type "node file-io.js ./my.txt" in your terminal  


