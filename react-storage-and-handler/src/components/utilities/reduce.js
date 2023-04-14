const numbers = [20, 30, 40, 50]
const sumReducer = (previous, current) => previous + current
const total = numbers.reduce(sumReducer, 0)
return total;

export {sumReducer}
