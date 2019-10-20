/**
 * Default parameters
 * Whenever a function accepts arguments for parameters, 
 * they can specify default values for those arguments 
 * so that if nothing is passed then the default
 * will take care of it on the function call instead of the nulls
 */

// function saySomething(noun = 'guy', adjective = 'genius'){
//     console.log(`this ${noun} is a ${adjective}`);
// }

// saySomething('dude', 'fool'); //passed all parameters
// saySomething('man'); //passed 1 parameter
// saySomething(); //passed nothing

/**
 * Arrow functions with this keyword
 */

// let data = {
//     name: 'guy',
//     about: function(){
//         setTimeout(function (){
//             console.log(this.name);
//         }, 1000);
//     }
// };

// data.about(); //doesnt find name because the this context points to the setTimeOut function instead of the object context

// let data = {
//     name: 'guy',
//     about: function(){
//         setTimeout(() => console.log(this.name) , 1000);
//     },
//     sayHi: function(){
//         setTimeout(() => {
//             console.log('hi ' + this.name)
//         }, 2000);
//     }
// }

// data.about(); //context now points to the object instead of the setTimeOut function
// data.sayHi(); // same as above

/**
 * Destructuring array and object
 */

// let car = {
//     make: 'Bugatti',
//     model: 'Veyron',
//     year: '2005'
// };

// let { make, model } = car; //here the variable names should be the key names that you are referring to.
// console.log(make, model);
// name = 'Chiron';
// console.log(make, model);

// let showInfo = car => {
//     let { make, model, year } = car; //breaking an object inside a function
//     console.log(`${make} made ${model} in ${year}`);
// }

// showInfo(car);

// let numbers = [1,2,3,4,5,6];
// let [one, two] = numbers; // each variable name here on LHS points to the content at that index in the original array
// console.log(one, two);

/**
* Restructuring array and object
*/



/**
 * spread and rest operators
 * the spread operator is used to expand an existing array or object into multiple named fields so that they can be used as they are needed
 * the rest operator is used to 
 */
