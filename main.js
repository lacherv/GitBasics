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

/************ ForEach **************** */
const provinces = ['Limpopo', 'North West', 'Gauteng'];
// provinces.forEach(province => console.log(`${province}`));
provinces.forEach((province, index) => console.log(`${index + 1}. ${province}`));
/************ Map **************** */
const fruits = ['Apples', 'Oranges', 'Grapes'];
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toLowerCase());
const prices = [4, 16, 25, 49];
const squarePrices = prices.map(Math.sqrt);
console.log(singleFruit);
console.log(squarePrices);

/************ Filter **************** */
const people = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Jane'},
    {id: 5, name: 'Kim'},
    {id: 6, name: 'Jane'},
];
const myPeople = people.filter(pers => pers.name.startsWith('J'));
console.log(myPeople);

/************ Spread *****************/
const numbers = [0, 1, 2, 3];
// numbers.push(10);
const numbers2 = [...numbers, 4, 3, 434];
console.log(numbers);
console.log(numbers2);
/************ Destructuring *****************/
const profile = {
    name2: 'Aaron',
    address: {
        street: '77 Commisioner St',
        city: 'Jozi',
        code: '2000'
    },
    gender: 'Male',
    hobbies: ['movies', 'music', 'dancing'],
};
const { name2, address, gender, hobbies } = profile;
const { street, city, code } = profile.address;
console.log(name2);
console.log(city);
// console.log(profile.address.street);
// console.log(profile.address.city);
/************ Classes **************** */

/************ Subclasess **************** */
