// import inquirer from "inquirer";

// async function Married() {
//   const ismarried = new Promise(async(resolve, reject) => {
//     let Main_checking = await inquirer.prompt([
//         {
//             name: "ismarried",
//             type:'confirm',
//             message: "Are you married?",

//         }
//     ]);

//     if(Main_checking.ismarried){
//         resolve(`married`);
//     }
//     else{
//         reject(`Not married`)
//     }
//   });
//   ismarried
//   .then((is)=>{
//     setTimeout(()=>{
//         console.log(`\n\tYes I am ${is}`);

//     },2000);
//   })
//   .catch((isNot)=>{
//     setTimeout(()=>{
//         console.log(`\n\tNo I am ${isNot}`);

//     },2000)
//   })

// }

// await Married()

// const using_Promise_all=()=>{
//     let para_1 = new Promise((resolve,reject)=>{
//         let array =[`emarat`,`brazil`,`nepal`,`america`,`dubai`,`canada`,]

//         if(array.length > 12 || array.some(add => add.includes(`brazil`))){
//             resolve(`true`)
//         }else{
//             reject(`false`)
//         }
//     })
//     let para_2 = new Promise((resolve,reject)=>{
//         let array:any =[1,14,25,36,45,85,12,95]

//         if(array.indexOf[2] > 16 && array.find(14)){
//             resolve(`true`)
//         }else{
//             reject(`false`)
//         }
//     })
//     let para_3 = new Promise((resolve,reject)=>{
//         let array =[`emarat`,1,`brazil`,2,`nepal`,3,`america`,4,`dubai`,5,`canada`]

//         if(array.length > 12 || typeof array.slice(2) ==='string' && array.lastIndexOf(`canada`)){
//             resolve(`true`)
//         }else{
//             reject(`false`)
//         }
//     })

//     Promise.all([para_1,para_2,para_3])

//     .then((T)=>{
//         setTimeout(()=>{
//             console.log(`Yes it is ${T}`);

//         },1500)
//     })
//     .catch((F)=>{
//         setTimeout(()=>{
//             console.log(`No it is ${F}`);

//         })
//     })
// }

// using_Promise_all()

import inquirer from "inquirer";

async function Married() {
  const ismarried = new Promise(async (resolve, reject) => {
    let Main_checking = await inquirer.prompt([
      {
        name: "ismarried",
        type: "confirm",
        message: "Are you married?",
      },
    ]);

    if (Main_checking.ismarried) {
      resolve(`married`);
    } else {
      reject(`Not married`);
    }
  });

  return ismarried
    .then((is) => {
      console.log(`\n\tYes I am ${is}`);
    })
    .catch((isNot) => {
      console.log(`\n\tNo I am ${isNot}`); //\n\tNo I am Not married
    });
}

async function using_Promise_all() {
  let para_1 = new Promise((resolve, reject) => {
    let array = [`emarat`, `brazil`, `nepal`, `america`, `dubai`, `canada`];

    if (array.length > 5 && array.some((add) => add.includes(`brazil`))) {
      resolve(`true`);
    } else {
      reject(`false`);
    }
  });

  // let para_2 = new Promise((resolve,reject)=>{
  //     let array = [1,14,25,36,45,85,12,95];

  //     if(array.indexOf(2) > 16 && array.includes(14)){
  //         resolve(`true`);
  //     }else{
  //         reject(`false`);
  //     }
  // });

  // let para_3 = new Promise((resolve,reject)=>{
  //     let array = [`emarat`,1,`brazil`,2,`nepal`,3,`america`,4,`dubai`,5,`canada`];

  //     if(array.length > 10 || typeof array.slice(2) === 'string' || array.lastIndexOf(`canada`) !== -1){
  //         resolve(`true`);
  //     }else{
  //         reject(`false`);
  //     }
  // });

  try {
    const results = await Promise.all([para_1]);
    console.log(`Yes it is ${results}`);
  } catch (error) {
    console.log(`No it is ${error}`);
  }
}

await Married();
await using_Promise_all();

// This function accepts a callback function and invokes it with given arguments
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2); // Invokes the callback with the specified arguments
}

// Example callback function that adds two numbers
const add = (a: number, b: number) => {
  console.log(a + b); // Outputs the sum of a and b
};

executeCallback(add, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.

function call_back(callback: (num_1: number[]) => void, num_1: number[]) {
  callback(num_1);
}

const arrow_func = (num_1: number[]) => {
  num_1.filter((add) => add * 2);
};

call_back(arrow_func, [1, 2, 3, 4, 5, 6]);

let number = [1, 2, 3, 4, 5, 6];
let hry = number.filter((num) => num * 2);
console.log(hry); //ye filter kam nahi kar raha
console.log(number.map((add) => add * 2));

function second_try(
  callback: (a: number, b: string) => void,
  a: number,
  b: string
): void {
  callback(a, b);
}
const person = (x: number, y: string) => {
  console.log(
    `this person name is ${y} and he earned ${x} dollars in this month`
  );
};
second_try(person, 45646, `Ali`);

// Function that uses a callback pattern, including error handling
function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulating an error condition
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  // Simulate fetching data with a chance of error
  if (Math.random() > 0.5) {
    callback(null, data); // No error, data is fetched successfully
  } else {
    callback(error); // Passes error to the callback
  }
}

// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
  if (error) {
    console.error(error.message); // Handles the error
  } else {
    console.log(data); // Processes the data
  }
});
// Demonstrates a callback pattern where errors are handled gracefully.
