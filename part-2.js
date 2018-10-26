var fs = require('fs')
var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8')
fs.writeFileSync('shopping-basket.txt', fileContents, 'utf-8')

var data = JSON.parse(fileContents)
var basketTotal = 0
var jsonString = JSON.stringify(Candles) 
if(item.name == Candles){

}
for (var item of data.basket) {
    itemPrice = item.price*item.quantity
    console.log(item.name + '£' + item.price*item.quantity)
    basketTotal = basketTotal + itemPrice
}

console.log(basketTotal)

