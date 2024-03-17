console.log(`***************************Day-15*********************************\n\n`);
//Question 41: Magicians: Display magician names from an array.

// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.


let magicions = ['charlie', 'david', 'sarah'];

function show_magicians(magicions: string[]) {
    magicions.forEach(element => {
        console.log(`${element}\n\n`);

    });
}
show_magicians(magicions);


//Question 42: Great Magicians: Add "the Great" to magician names.

// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

//let magicions=['charlie', 'david','sarah'];

function Great_Magicians(magicions: string[]) {
    magicions.forEach(element => {
        console.log(`${element} the great\n\n`);

    });
}
Great_Magicians(magicions);

//let magicions=['charlie', 'david','sarah'];
function great_Magicians(magicions: string[]) {
    for (let i = 0; i < magicions.length; i++) {
        console.log(magicions[i] = magicions[i] + " the great");

    }
} great_Magicians(magicions);

//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {

    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items}.\n\n`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

function friends(...friend:string[]){
    console.log(`I have so many friends such as : ${friend} and many more .\n\n`);
    
}
friends("Qabil");
friends("Qabil",'maqbool','Ali');
friends("Qabil",'maqbool','Ali','Sheikh');

//Question 45: Cars: Create detailed car objects with flexible properties.

// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.

function make_car(manufacturer: string, model: string, ...options: [string, any][]):Object {
    let car = { manufacturer, model };
    // @ts-ignore
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

//my code 

function book(name:string,...option:[string,any][]){
    let description= {name,option};
    console.log(description);
    
}
book('physilogy',['powered by author',220]);