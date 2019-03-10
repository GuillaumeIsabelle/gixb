#!/usr/bin/env node
var shell = require("shelljs");
var args = process.argv.slice(2);

var f = args[0];

//@v Browse a link
//ADd this to your package.jsos
// "mgm:firebase:hosting:site": "node browse.js \"https://tmyapp.firebaseapp.com/\""
const opn = require('opn');



opn(f ).then(() => {
  // image viewer closed
  console.log("Openning: " + f);
});


/*
shell.exec(`pwd`);
shell.exec(`node ../gixb/gixb.js "${f}"`);

*/
