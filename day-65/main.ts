console.log(`\t\tIts my day 65 of #100 days coding challenge\n\n`);

//simple function
function min_max() {
  let num1 = Math.max(14, 25, 4, 48);
  let num2 = Math.min(20, 25, 14, 85);
}
min_max();
min_max();
// -------------------------------------------------------------------

// Type Annotations With Function
function square_root(num: number) {
    return Math.sqrt(num);
}
console.log(square_root(144)); //12
console.log(square_root(64)); //8
console.log(square_root(9)); //3

// -------------------------------------------------------------------

// Default Parameter
function default_parameter(age: number, educ: string = "Masters") {
    console.log(`he is ${age} years old and done with ${educ}`);
}
default_parameter(19);
default_parameter(19, "intermediate");
// -------------------------------------------------------------------


// Optional Parameter
function opt_para(city: string, country: string, town?: string) {
    let location = `${city} = ${country}`;
    if(town){
        location =  `${city} = ${country} = ${town}`
    }
}
opt_para("Karachi", "Pakistan");
opt_para("Karachi", "Pakistan", "Malir");

// -------------------------------------------------------------------

// Rest Parameter
function rest_parameter(...friends: string[]) {
    console.log(`I have alot of friends ${friends}... many more here `);
}
rest_parameter(`akram`, "noor"); // we can gfriends parameters as we want

// -------------------------------------------------------------------


// Anonymous Function
let anonymous_function = function (width: number, length: number) {
    // area of rectangle using anonymous function
    console.log(
        `the area of rectangle using anonymous function is ${width * length}`
    );
};
anonymous_function(5, 6);

// -------------------------------------------------------------------


// Arrow Function
let arrow_function = (length: number, breadth: number) => {
    // area of triangle using anonymous function
    console.log(0.5 * length * breadth);
};
arrow_function(9, 6);
// -------------------------------------------------------------------


// void 
function void_function(): void {
    console.log("this is void function");//where we don't want function to return value 
}
void_function();

// -------------------------------------------------------------------