// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
let turtle = '🐢';
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const objReorganising = (obj) => {
  obj.map()
}

Object.entries(obj).map(value => {

})


let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log(Object.entries(obj).map(value => {
  return value[1];
}));
console.log(Object.entries(obj).map(value => {
  return value[0];
}));
console.log(Object.entries(obj).map(value => {
  return value[0] + " " + value[1];
}));
console.log(Object.entries(obj).map(value => {
  return value.join(" ").join(' ');
}));





let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

console.log('flat', Object.entries(obj).flat())
console.log('total', Object.entries(obj).flat().join(" "))
Object.entries(obj).flat().join(" ")


const join1 = Object.entries(obj).map(value => {
  return value.join(" ");
})

const join2 = join1.join(" ")
console.log(join2);


Object.entries(obj).map(value => value.join(" ")).join(' ')