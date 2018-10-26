var fs = require('fs')
var fileContents = fs.readFileSync('names.txt', 'utf-8')
var namesArray = fileContents.split('\r\n')
// var fileContents = fs.readFileSync('names.txt')

// console.log(namesArray.reverse().join(' '))
var reverse = (namesArray.reverse().join(' '))

for (var i= 0; i < namesArray.length; i++) {
    var reverseArray = namesArray[i].toString().split("").reverse().join("");
    var reversedName = reverseArray
    fs.writeFileSync(reversedName, '1', 'utf-8')
    console.log(reversedName)
  }
