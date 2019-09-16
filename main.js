/************ Const & Let **************** */
const name = 'Chris';
const person = {
    name: 'chris',
    title: 'Me'
};
person.name = 'kamo';
// console.log(person.name);

const nums = ['1', '3', '4', '5'];
nums.push('6');
// console.log(nums);
let test = '132';
test = 23;
console.log(test);

/************ Arrow Functions **************** */
// function sayHello() {
//     console.log(' Hello ' + name);
// }
const sayHello = () => console.log(`Hello ${name}`);
sayHello();

// function sayHello1(name1) {
//     console.log(' Hello ' + name1);
// }
const sayHello1 = name1 => console.log(`Hello ${name1}`);
sayHello1('aaron');
const sum = (a, b) => console.log(`Sum of ${a} and ${b} equal ${a + b}`);
sum(2, 4);
/************ Map **************** */

/************ Filter **************** */

/************ Spread **************** */

/************ Destructuring **************** */

/************ Classes **************** */

/************ Subclasess **************** */
