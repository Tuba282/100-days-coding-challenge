import inquirer from "inquirer";
// creating promise function
function is_party_on() {
  let party = new Promise(async (resolve, reject) => {
    const Main_ask = await inquirer.prompt([
      {
        name: "ask",
        type: "confirm",
        message: "Are you coming for the party tonight ...?",
        default: false,
      },
    ]);

    if (Main_ask.ask) {
      resolve("Welcome to the party");
    } else {
      reject("reason");
    }
  });

  return party
    .then((IN) => {
      console.log(`Yes you are ${IN}`);
    })
    .catch((Out) => {
      console.log(`You must have ${Out} not to come for my party tonight`);
    });
}
// calling primise function
await is_party_on();

// using callback function-----doing sum

async function using_calback(
  callback: (a: number, b: number) => void,
  a: number,
  b: number
) {
  callback(a, b);
}

function testing(x: number, y: number) {
  console.log(`if we add x into y it will print ${x + y}`);
}
using_calback(testing, 4, 4);

// using JSON.string -------------- using JSON.parse()

let make_Obj = {
  name: "Amjad",
  age: 25,
  city: "Karachi",
};
let chang_into_json = JSON.stringify(make_Obj, null, 2);

console.log(chang_into_json);

let Obj = '{"name":"Ali","age":41,"city":"Karachi"}';

let chang_into_obj = JSON.parse(Obj);

console.log(Obj);

// using imort export
import { new_way } from "./module.js";
new_way();

// using some rest parameters

function using(...num: number[]) {
  console.log(
    `\nI have so many number in my mind just like right now I thing of ${num} but my favorite number is 7`
  );
}
using(3, 4);
using(9, 2,5);

// Nested Object

let my_Obj={
    first_name:'Tuba',
    sur_name:' Jan',
    no_of_sibl:1,
    sis:'Bushra Jan',
    friends:{
        school:['fatima','maryam'],
        college:['habiba','shifa'],
        web:['nayab','asani','pareshani','shafaque'],
        now:['nobody']
    }
    
}
// console.log(my_Obj);

console.log(`
hey budies my name is ${my_Obj.first_name} ${my_Obj.sur_name}.
I have ${my_Obj.no_of_sibl} elder Sister.
Talk about my friends.

In School ${my_Obj.friends.school[0].toString()} used to be my friends.
In College ${my_Obj.friends.college[0].toString()} used to be my friends.
But now ${my_Obj.friends.now} is my friend

except my Sister ${my_Obj.sis}

#trueLove
`);


