// Start coding here
let calculator = {};
calculator = add => add;
calculator = subtract => subtract;
calculator = multiply => multiply;
calculator = divide => divide;

const addResult = {
    add: (a,b) => a + b
};
let addtotal = addResult.add(10,20);
console.log(addtotal)

//------------------------------//

const divideResult = {
    divide: (a,b) => a / b
};
let totaldivide = divideResult.divide(10,5);
console.log(totaldivide);
