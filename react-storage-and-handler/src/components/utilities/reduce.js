var numbers = [1, 2, 3, 4, 5, 6]
var sum = numbers.reduce((preValue, currentValue)=>{
    return preValue + currentValue
}, 0)

console.log(sum)

// Example

const myNumbers = [1, -1, 2, 3]
let total = 0;
for (let n of myNumbers){
    total += n
}
console.log(total)