console.log(`\t\tIts My Day-8`);
//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let my_list=['Jan','Feb','march','April']
console.log(`She was born in ${my_list[4]}`);// Intentional error diya meny bhi Arrays are zero-indexed, so index 4 is not in the list
console.log(`She was born in ${my_list[2]}`);//So i am correcting this

//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let my_laptop='HP';
let mamma_watch='golden'
if(my_laptop=='hp'){
    console.log('yes it is true');
}else{
    console.log(`\nNo, Its Not "hp" its 'HP'`);
}

console.log(` what's is mamma_watch;s color`);
console.log(mamma_watch=='golden');//true

let counter_tashbeeh='blue';
console.log(` what's my counter_tasbeue color`);
console.log(counter_tashbeeh=='green');//false

let steel ='gery';
console.log(` what's steel clip color `);
console.log(steel=='grey');//false

let skin='brown';
console.log(` what's skin color `);
console.log(skin=='pink');//false

let tooth_Brush='mixup of white&Pink';
console.log(` what's steel clip color `);
console.log(tooth_Brush=='mixup of white&Piny');

let anum_1= 23
console.log(anum_1==25)

let anum_2=25
let anum_3='bilal';
console.log(typeof(anum_2)==typeof(anum_3))//false

//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

let digit = 20;
console.log(digit == 20);
console.log(digit != 20);
console.log(digit >= 20);
console.log(digit < 20);

console.log("\n");
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
console.log("\n");
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let box_1 = 45;
let box_2 = 100;

console.log(box_1 == box_2); //false
console.log(box_1 == box_2 && box_1 >= 20); //false
console.log(box_1 >= box_2); //false
console.log(box_1 <= box_2 && box_1 >= 20); //true
console.log(box_1 != box_2); //true
console.log(box_1 <= box_2); //true
console.log(box_1 != box_2 || box_2 >= box_1); //true
console.log(!box_2); //false