const x = 42;

// get type by using "typeof"
console.log(typeof x);
console.log(typeof undefined);

// this may surprise you...
console.log(typeof null);

// casting
Number('0');

// this may surprise you...
Number(undefined);
Number(null);

Number({});
Number([]);

String({});
String([]);

// Always use triple equals
if ([] == false) {
  console.log('boom!');
} // will log

if ([] == ![]) {
  console.log('boom!');
} // will log
