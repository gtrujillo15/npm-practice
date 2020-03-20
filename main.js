// node.js is serverside tech. browser will see "require" as undefined, so we eed something that will bundle this so the browser can understand. We'll use browserify or webpack
let moment = require('moment');
let unique = require('uniq');

let myDate = new Date();
let myCoolDate = moment(myDate).format('LL');

let myList = [1, 2, 1, 1, 3, 3, 4, 6];

let myUniqueList = unique(myList);

console.log(myCoolDate);
console.log(myUniqueList);