console.log(`Its My Day-22 of #100 days codding challenge.\n\n`);
//Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

let Num1 = 19;
let Num2 = 20;
console.log(Num1 + Num2);

let str1 = "Ali";
let str2 = " Mujahid";
console.log(str1 + str2);

function email(name: string, Num: number) {
  return name + Num;
}
console.log(`\n` + email("tubajan", 282));
console.log(`\n` + email("tubajan", 282) + `@gmail.com`);

//Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function modules(num1: number, num2: number) {
  return num1 % num2;
}
console.log(modules(9, 4));

let num3 = 8;
let num4 = 13;
let result = num4 % num3;
console.log(result);

//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

let container:number=75;
if (typeof container == 'string' &&  container >70){
    console.log(`Good`);
    
}else{
    console.log(`Bad `);
    
}

//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multi(mul_1:number,mul_2:number){
    return Math.round(mul_1*mul_2);
}
console.log(multi(10.9,4.4));

