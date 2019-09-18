/************ Const & Let **************** */

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

/************ Arrow Functions **************** */

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]

/************ Map **************** */
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
//Any value (both objects and primitive values) may be used as either a key or a value.

var map1 = new Map();
map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');

console.log(map1.size);
// expected output: 3

/************ Filter **************** */


/************ Spread **************** */


/************ Destructuring **************** */


/************ Classes **************** */
class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  console.log(new Polygon(5,3).area);
  // expected output: 15

/************ Subclasess **************** */

