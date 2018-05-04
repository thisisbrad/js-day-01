// #2 & #4  try to log global
// Q: undefinded or error?
// console.log(thisIsAConst);
// console.log(thisIsAVar);

// #1 start here
const thisIsAConst = 50;

// thisIsAConst++ // error!

const constObj = {};

// consts are still mutable
constObj.a = 'a';

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51 // errors!
// #1 end

// #3 show var flaws
var thisIsAVar = 50;
thisIsAVar = 51;
var thisIsAVar = 'new value!';

// #5 function declaration
// Q: What's the difference?
// A: const can't be reassigned - declared vs assigned functions
function thisIsHoisted() {
  console.log('This is a function declaration at the end of the file');
}

// change from const to let to var
const thisIsNotHoisted = function() {
  console.log('Should this be hoisted also?');
};

// Put this up by #2
// thisIsHoisted()
// thisIsNotHoisted()

// "var" is lexically scoped, meaning it exists from time of
// declaration to end of function

// if (true) {
//   var lexicallyScoped = 'This exists until the end of the function';
// }

// console.log(lexicallyScoped);

// // "let" and "const" are block scoped
// if (true) {
//   let blockScoped = 'This exists until the next }';
//   const alsoBlockScoped = 'As does this';
// }

// // this variable doesn't exist
// console.log(typeof blockScoped);

// thisIsAlsoAVariable = 'hello';
