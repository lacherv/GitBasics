/************ Const & Let **************** */

// Let function
let x = 5000;
let x = 'Mbalenhle';
console.log(x);

// const function

const x = 5000;
console.log(x);

/************ Arrow Functions **************** */

var cars = [
    'Audi',
    'BMW',
    'Jaguar',
    'Range Rover'
  ];
  
  console.log(cars.map(cars => cars.length));
  // expected output: Array [4, 3, 6, 11]
  

/************ Map **************** */



/************ Filter **************** */


/************ Spread **************** */
hyygh

/************ Destructuring **************** */

var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]


/************ Classes **************** */

class ClassWithStaticMethod {
    static staticMethod() {
      return 'static method has been called.';
    }
  }
  
  console.log(ClassWithStaticMethod.staticMethod());
  // expected output: "static method has been called."


/************ Subclasess **************** */

class formatDate extends Date {
    constructor(dateStr)
     {
        super(dateStr);
     }
  
    getFormattedDate() 
    {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }
  
  console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
  // expected output: "19-Aug-1975"
  



