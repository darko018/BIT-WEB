/* 1. Write a function that capitalizes the first letter of each string argument it receives.
    Function arguments: ['hello', 'there', 'ES', 6]
    Output: ['Hello', 'There', 'ES'] 
*/


const capitalizeLetter = (...array) => {
    let result = [];
    array.forEach((element) => {
        if (typeof element === "string") {
            result.push(`${element[0].toUpperCase()}${element.slice(1)}`);
        }
    });
    return result;
};

console.log(capitalizeLetter("hello", "there", "ES", 6));


/* 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
    Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
    Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
    Output2: [ 24, 20 ] // tax only
    */

// const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]
// const productsWithTax = products.map(product => {
//     const { price: prodPrice } = product;
//     const newProd = {
//         ...product,
//         price: Number.parseFloat(prodPrice),
//         priceWithTax: prodPrice * 1.2,
//         tax: prodPrice * 0.2
//     }
//     return newProd
// })
// console.log(products);
// console.log(productsWithTax);


const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]

const increasePriceByTax = array => {
    array.forEach(element => {
        element.price += element.price * 0.2;
    });
}
let productsWithTax = [...products];
increasePriceByTax(productsWithTax);
console.log(productsWithTax);




/* 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
    Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1]
*/


const increaseEachElement = (array, increaser = 1) => {
    let result = [];
    array.forEach(element => {
        element += increaser;
        result.push(element);
    });
    return result;
}
console.log(increaseEachElement([4, 6, 11, -9, 2.1], 2));




/* 4. Write a function that filters all even elements of the array.
    Input: [6, 11, 9, 0, 3]
    Output: [6, 0]
*/

const filterAllEvenElements = array => {
    let result = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterAllEvenElements([6, 11, 9, 0, 3]));


//even shorter way
const filterAllEven = array => array.filter(element => element % 2 === 0);

console.log(filterAllEven([6, 11, 9, 0, 3]));


/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
    Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
    Output: ['babel.js, 'JS standard']
*/

const filterAllStringsContainingJS = array => {
    let result = [];
    array.forEach(element => {
        if (element.includes("js") || element.includes("JS")) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterAllStringsContainingJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));



/* 6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]
*/

const filterIntegerNumber = array => {
    let result = [];
    array.forEach(element => {
        if (parseInt(element) === element) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterIntegerNumber([1.6, 11.34, 9.23, 7, 3.11, 8]));



/* 7. Write a function that filters all integer arguments that contain digit 5.
    Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
    Output: [45, 553]
*/


const filterIntegerContaining5 = array => {
    let result = [];
    array.forEach(element => {
        if (element.toString().includes("5") && parseInt(element) === element) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterIntegerContaining5([23, 11.5, 9, 'abc', 45, 28, 553]));



/* 8. Write a function that returns indexes of the elements greater than 10.
    Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
    Output: 1, 2, 5
*/


const returnIndexesIfGreaterThan10 = array => {
    let result = [];
    array.forEach(element => {
        if (element > 10) {
            result.push(array.indexOf(element));
        }
    });
    return result;
}
console.log(returnIndexesIfGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));


/* 9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.
a. Write a function that prints out the names of persons older than 25.
b. Write a function that check if there is a person older than 40.
c. Write a function that checks if all persons are older than 20.
*/


let persons = [{ name: "James", age: 30 }, { name: "Ana", age: 20 }, { name: "Liam", age: 51 }, { name: "Ema", age: 42 }, { name: "Ava", age: 24 }, { name: "Charlotte", age: 33 }];

const printOlderThan25 = array => {
    var result = [];
    array.forEach(element => {
        if (element.age > 25) {
            result.push(element.name)
        }
    });
    return result;
}
console.log(printOlderThan25(persons));

const printOlderThan40 = array => {
    var result = [];
    array.forEach(element => {
        if (element.age > 40) {
            result.push(element.name)
        }
    });
    return result;
}
console.log(printOlderThan40(persons));

const printOlderThan20 = array => {
    var result = [];
    array.forEach(element => {
        if (element.age > 20) {
            result.push(element.name)
        }
    });
    return result;
}
console.log(printOlderThan20(persons));



/* 10. Write a function that checks if the given array is an array of positive integer values.
    Input: [3, 11, 9, 5, 6]
    Output: yes
    Input: [3, -12, 4, 11]
    Output: no
*/

const checkIfPositiveInteger = array => {
    //if negative is found return false (breaking loop)
    for (let element of array) {
        if (element < 0) return false;
    }
    //if no elements are negative return true
    return true;
}
console.log(checkIfPositiveInteger([3, 11, 9, 5, 6]));
console.log(checkIfPositiveInteger([3, -12, 4, 11]));


/* 11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output:  48
*/


const productNumbersFromArray = array => {
    let result = 1;
    array.forEach(element => {
        result *= element;
    });
    return result;
}
console.log(productNumbersFromArray([2, 8, 3]));


/* 12. Write a function that calculates the maximum of the given array.
    Input: [2, 7, 3, 8, 5.4]
    Output: 8
*/


const findMaximum = array => Math.max(...array);

console.log(findMaximum([2, 7, 3, 8, 5.4]));