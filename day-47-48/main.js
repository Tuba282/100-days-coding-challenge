import inquirer from "inquirer";
console.log(`\t\tIts my Day 47\n\n`);
// List three reserved words in JavaScript and create a valid use case for each.
let array = [12, 54, 14, 85, 95, 21];
console.log(array.slice().sort()); //here I used three reserve words
function generate_five_digit_code() {
    let code = Math.floor(Math.random() * 10) + 1;
    console.log(code.toString());
    let myPromise = new Promise((resolve, reject) => {
        let number = 2;
        if (code === number) {
            resolve(`Correct`);
        }
        else {
            reject(`Wrong`);
        }
    });
    myPromise
        .then((goodluck) => {
        console.log(`You guessed the ${goodluck} number`);
    })
        .catch((badluck) => {
        console.log(`You guessed the ${badluck} number`);
    });
}
generate_five_digit_code(); //here I used frther reserve words making fuction to generate 5 digit code
//Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// we can't use reserved word as a variable name or any other function because they are  already reserved
//here 's the example
// let toString="my name"; //it is giving me an error because it is a reserved word
const fechting = (a, b) => {
    //   let generate = generate_five_digit_code();
    return `His name is ${b} and he is ${a} years old`;
};
console.log(fechting(14, "Ahad"));
//learning promise function from the very basiic
let dinnerTable = new Promise((resolve, reject) => {
    let number = 45;
    if (number > 5 && typeof number === "string") {
        resolve(`Ready`);
    }
    else {
        reject(`Not Ready`);
    }
});
dinnerTable
    .then((goodnews) => {
    console.log(`Yes Our table is ` + goodnews);
})
    .catch((badNews) => {
    console.log(`No Our table is ` + badNews);
});
//The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
async function Wifi() {
    let qu = await inquirer.prompt([
        {
            name: "checking",
            type: "confirm",
            message: "Is our Wifi not or off.?",
            default: false,
        },
    ]);
    const new_promise = () => {
        let mypromise = new Promise((rsolve, reject) => {
            if (qu.checking) {
                rsolve(`On`);
            }
            else {
                reject(`off`);
            }
        });
        mypromise
            .then((on) => {
            setTimeout(() => {
                console.log(`Our Wifi connection is ${on}`);
            }, 3000); // it will wait for 3 seconds to logg the message
        })
            .catch((off) => {
            console.log(`Our Wifi connection is ${off}`);
        });
    };
    new_promise();
}
Wifi();
const goodFunction = () => {
    let para_1 = new Promise((resolve, reject) => {
        let array = [`akram`, 1, `mubeen`, 2, `amjad`, 3, `farhan`, 4, `ahmed`, 5];
        if (array.length > 2 && array.includes(`Amjad`)) {
            resolve(`true`);
        }
        else {
            reject(`false`);
        }
    });
    let para_2 = new Promise((resolve, reject) => {
        let array = [`akram`, 1, `mubeen`, 2, `amjad`, 3, `farhan`, 4, `ahmed`, 5];
        if (array.length > 2 || array.includes(`Amjad`)) {
            resolve(`true`);
        }
        else {
            reject(`false`);
        }
    });
    let para_3 = new Promise((resolve, reject) => {
        let array = [`akram`, 1, `mubeen`, 2, `amjad`, 3, `farhan`, 4, `ahmed`, 5];
        if (array.length > 2 && array.includes(3)) {
            resolve(`true`);
        }
        else {
            reject(`false`);
        }
    });
    let para_4 = new Promise((resolve, reject) => {
        let array = [`akram`, 1, `mubeen`, 2, `amjad`, 3, `farhan`, 4, `ahmed`, 5];
        if (typeof array === "string") {
            resolve(`true`);
        }
        else {
            reject(`false`);
        }
    });
    Promise.all([para_1, para_2, para_3, para_4])
        .then((Yes) => {
        setTimeout(() => {
            console.log(`Yes it is ${true}`);
        }, 1000);
    })
        .catch((No) => {
        setTimeout(() => {
            console.log(`No it is ${No}`);
        }, 1000);
    });
};
goodFunction();
