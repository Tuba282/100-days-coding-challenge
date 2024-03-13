console.log("************Day-12******************");
//Question 34: Pizzas: Share your favorite pizzas and express your love for them.

// Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
let pizza =['square shaped', 'circle shaped','heart shaped'];
pizza.forEach((pizza)=>{
    console.log(` hey Do you know haider likes ${pizza} pizza\n `);
});

let color=['red','yellow','green'];
color.forEach((color)=>{
    console.log(`Ali likes to eat those kind of apple which is in ${color} color \n`);
    
});

//Question 35: Animals: Highlight animals with a common trait.

// Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.

let animals =['cat', 'dog','parrot','puppy'];
animals.forEach((animals)=>{
    console.log(` animals like ${animals}, people use to pet them .\n`)
});

//Question 36: T-Shirt: Create a function for customizing t-shirts.

// Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");

function T_shirt (size: string,message: string){
    console.log(`hey my name is Tuba jan and I want shirt in ${size} size and with "${message}" this message on the shirt\n`)
}
T_shirt("small","Eat Sleep Code And repeat");

function animal(name:string,size:string){
    console.log(`Some pet animals like ${name} cause they are ${size}\n`)
}
animal("cats and dogs","small in size and less chance harm from them")