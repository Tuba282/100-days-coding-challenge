console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Its My Day-13 xxxxxxxxxxxxxxxxxxxxxxxxxx\n \n`);
//Question 36: T-Shirt: Create a function for customizing t-shirts.

// Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.


 //Simple function with parameters(arguments)wiyhout returntype
function t_shirt(size:string,quantity:number){
    console.log(`I want ${quantity} t-shirts in ${size} size .\n`);
    
}
t_shirt("small",4);

//default function with no returntype

function shirt(size:string='small',quatity:number=5){
    console.log(`I want ${quatity} number of shirts in ${size} size.\n`)
}
shirt();// is me Koi values ni di gai tabi us ny By-default wali values use ki hain.

shirt("medium"); // is me ek value di hai ab string ki jaga to value print hogi but number ki jaga By-default value print hogi.

shirt("large",7);// ye normally print hoga cause It has given the proper values .

console.log(`\n\n`);

//More Example 
function my_home(sis:string="sister",mamma:string="mother"){
    console.log(`there is nobody at home accept my ${sis} and my ${mamma} .\n `);
    
}
my_home();//printing with default parameters.

my_home('Bushra ');// with one default value and one one normal value

my_home('atma ','paratma')// this prints with given values


//asharib ali ka code hai.
console.log(`\n\n`);

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("Lahore");

//Question 39: City Names: Formatting city-country pairs.

// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
console.log(`\n\n`);

//Return Type Annotation.
function pairs(city:string,country:string): string {
    return`Hi this is Tuba Jan and I live in ${city} which is located in ${country}.\n`;
    
}
pairs('karachi','Pakistan');

