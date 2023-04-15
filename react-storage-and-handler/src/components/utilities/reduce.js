var numbers = [1, 2, 3, 4, 5, 6]
var sum = numbers.reduce((preValue, currentValue)=>{
    return preValue + currentValue
}, 0)

console.log(sum)