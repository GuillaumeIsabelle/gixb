#!/usr/bin/env node

/** Guillaume Isabelle GIX Browsing
 * Vision: A Package you use to browse web in your app
 * Value: Run action in your IDE to browse your resources in 1 step and few seconds
 * Value: Keep track of your resources used in your package.json
 * Current Reality: Various resources used such as dev site, various provider such as DevOps, DNS config, hosting, Staging to remember
 */


var shell = require("shelljs");
var args = process.argv.slice(2);

var f = args[0];


const opn = require('opn');


//Opening
opn(f ).then(() => {
//output after opening
  console.log("GIX Browing Openning: " + f);
});



