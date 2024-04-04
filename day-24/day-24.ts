#! /usr/bin/env node
import inquirer from "inquirer";
``;

console.log(`\t\tIts My Day-24\n\n`);

//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function looop() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
looop();
// let's make my own npm table generator

async function table_generator(): Promise<void> {
  const desired_num = await inquirer.prompt([
    {
      message: "Enter your disre number to generate its table :",
      type: "number",
      name: "num",
    },
  ]);
  for (let i = 0; i < 12; i++) {
    console.log(` \t\t ${desired_num.num} * ${i} = ${desired_num.num * i}`);
  }
}

table_generator();

