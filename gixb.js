//@v Browse a link
//ADd this to your package.jsos
// "mgm:firebase:hosting:site": "node browse.js \"https://tmyapp.firebaseapp.com/\""
const opn = require('opn');

var args = process.argv.slice(2);

var f = args[0];

opn(f ).then(() => {
  // image viewer closed
  console.log("Openning: " + f);
});
