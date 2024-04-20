console.log(`\t\tIts my day 43-44.\n`);

// traditional___function

function traditional___function(name: string, salary: number) {
  return `His name is ${name} and his salary is ${salary}`;
}
console.log(traditional___function("Shubham", 10000));
console.log(traditional___function("Akram", 20000));

// Arrow___function
// this is how we create an arrow function
let Arrow_function = (a: string, b: string) => a + b;
console.log(Arrow_function("Hello", "World"));
console.log(Arrow_function("Tuba", "Jan"));

let arrow_function = (x: number, y: number) => {
  let operation = { x, y };

  return operation;
};
console.log(arrow_function(5, 6));

let try_arrow_func = (name: string, marital_status: boolean) => {
  return `My name is ${name} and my marital status is ${marital_status}`;
};
console.log(try_arrow_func("Shubham", false));

let checking = [`akram`, 1, `sana`, 2, `shubham`, 3, `tuba`, 4, `mujahid`, 5];
let show_case = [1, 2, 3, 4, 5];
let show = checking.filter((item) => typeof item === "number");
console.log(show_case);

let show1 = show_case.map((x) => x * 2);
// console.log(show);
console.log(show1);
console.log(checking);

function Traditional(country: string, city: string) {
  console.log(`\n"${city}","${country}"`);

  const arrow_f = ( gender: string,...likes: string[]) => {
    console.log(`\n"${likes}","${gender}"`);
  };

  arrow_f(`female`,`to eat`,`to sleep`,`to code`,`to work`,) ;
  
}//it will start from Traditional function and reach on to arrow function then proccess arrow function and again print traditional function cause I called Traditional function 5 times. 
Traditional(`karachi`, `Pakistan`);
Traditional(`Tokyo`, `japan`);
Traditional(`Beijing`, `China`);
Traditional(`lahore`, `Pakistan`);
Traditional(`Washington`, `USA`);
