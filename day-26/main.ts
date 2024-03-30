console.log(`\t\tDay-26\n\n`);

//Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.


function return_values(num1:number, num2:number):number{
    return num1+num2;
}
console.log(return_values(8,4));

//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetings(person1:string='nayab',person2:string='ahmed'){
 console.log(`Hello ${person1}\n`);
 console.log(`Hello ${person2}`);
 
}
greetings();//as I'm not giving values so it will take default parameters 
// outcome will be Hello nayab \n Hello ahmed
greetings('tuba','bushra');//here i am giving both parameter
//it will print Hello tuba \n Hello bushra

//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as cubing a number.


function cube_declaration(num_1:number):number{
    return num_1*num_1*num_1;
}

let cube_Expression= function(num_2:number):number{
    return num_2*num_2*num_2;
}

console.log(cube_Expression(4));//output would be 64
console.log(cube_declaration(5));//125
