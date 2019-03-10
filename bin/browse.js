#!/usr/bin/env node
var shell = require("shelljs");
var args = process.argv.slice(2);

var f = args[0];

shell.exec(`node ../gixb/gixb.js "${f}"`);

