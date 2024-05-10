"use strict";
// ------------------------------------------------------------------------------
console.log(`\t\tits my day 67 of 100 days coding challenge\n\n`);
//Type Annotations With Arrays
let array_1 = [`akram`, `ali`, `abdul`, `sana`, `jawed`];
// ----------------using for loop and forEach --------------------------------------------------------------
for (let i = 0; i < array_1.length; i++) {
    console.log(array_1[i]);
}
//we can do this thing in another way.
array_1.forEach((element) => {
    console.log(element.toString());
});
// both for loop and foreach methods can do the same thing
// ----------------using filter--------------------------------------------------------------
// Type Annotations With Multidimensional Arrays
let multi = [`Akram`, 2, `Ali`, 3, `Abdul`, 8, "puppo", 9, `bubli`, 12, `jubli`];
multi.filter(filter => {
    if (typeof filter === "string") {
        console.log(filter.toUpperCase());
    }
    else {
        //here if it is string passes through filter it will print uppercase and if number than number will multiply by 2
        console.log(filter * 2);
    }
});
// ------------------using slpice------------------------------------------------------------
// array with multiple methods
let array_2 = [`ali`, 2, "sana", 3, "bj", 5, 'tj', 6, `ruby`, 10];
array_2.splice(5, 0, 4, "mj"); //splice(from included,to excluded,replace (if))
console.log(array_2);
// ------------------using indexof , map and lastindexof------------------------------------------------------------
console.log(array_2.map(num => typeof num === "number"));
//it will make a new array to store only number elements from array_2
let checking = array_2.indexOf(`akram`); // it willgive 1 if find akram in array_2 otherwise -1 if it couldn't find
console.log(checking);
checking = array_2.lastIndexOf(4); // it willgive 1 if find akram in array_2 otherwise -1 if it couldn't find
console.log(checking);
// ------------------using sort and reverse------------------------------------------------------------
let country = ['dynasty', 'nepal', 'brazil', `france`, `america`, 'zotopia', 'canada'];
//array of countries with no order
console.log(`sorted order :\n\t` + country.slice().sort());
console.log(`reverse order :\n\t` + country.slice().sort().reverse());
console.log(`original order :\n\t` + country);
// -------------------using join and concat-----------------------------------------------------------
let pet1 = [`cat`, `dog`];
let pet2 = [`bird`, `fish`];
let pet3 = pet1.concat(pet2); //[`cat`,`dog`,`bird`,`fish`]
console.log(pet3.toString());
let pet4 = pet3.join(` fresh `);
console.log(pet4);
// -------------------using forEach and map-----------------------------------------------------------
