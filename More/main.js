/************ Simple functions *****************/
const square = function(x) {
  return x * x;
};
console.log(square(12));

const makeNoise = function() {
  console.log("Bang!!");
};
makeNoise();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
/************ Nested functions *****************/
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "coke");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(5, "cup", "lemon tea");
};

hummus(2);
/************ Arrow functions *****************/
const square1 = x => {
    return x * x;
};
const square2 = x => x * x;
const power2 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power2(4, 3));
/************ Recursion *****************/
const pow = (base, exponent) => {
    if (exponent == 0) {
        return 1;
    } else {
        return base * pow(base, exponent - 1);
    }
};

console.log(pow(2, 9));


