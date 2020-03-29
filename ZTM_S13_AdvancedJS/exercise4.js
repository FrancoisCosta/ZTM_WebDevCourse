//Solve these problems:

//#1 Create a one line function that adds two parameters
const addTwoParamaters = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)



//Currying: What does the last line return?
const sum = (a, b) => a + b

const curriedSum = (a) => (b) => a + b
curriedSum(30)
curriedSum(1) // 31




//Currying: What does the last line return?
const sum = (a, b) => a + b

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)

console.log('curriedSum', curriedSum(5)(12))
console.log('add 5', add5(12))

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)


const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num * 2;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// 30!


//What are the two elements of a pure function?

