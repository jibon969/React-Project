// const numbers = [20, 30, 40, 50]
// const sumReducer = (previous, current) => previous + current
// const total = numbers.reduce(sumReducer, 0)
// return total;



const items = [
    {id:1, name:"Jibon"},
    {id:2, name:"Zibon"},
    {id:2, name:"Payel"},
]
const itemReducer = (previous, current) => previous + current;
const itemTotal = items.reduce(itemReducer, 0)