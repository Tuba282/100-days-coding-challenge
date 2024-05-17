console.log(`\t\t\n\nits my day 71 of coding challenge\n\n`);

// Simple generic example
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("hello");
const result3 = identity("world");
// generic function with different types

function multiple_types<T>(arg: T): T {
  return arg;
}

const again1 = multiple_types<number>(254)
const again2 = multiple_types<string>(`Hello Pakistan`)
const again3 = multiple_types<boolean>(true)
const again4 = multiple_types<string[]>([`mango`,'apple','banana'])

// Generic Function `testType`
function testType<T>(value:T):string{
    return `The type of value is ${typeof value}`;
}
const test_result1 = testType(254)
const test_result2 = testType(true)
const test_result3 = testType(`Hello`)

//Generic Class `User`

class lady<T = string>{
    lady_name
    constructor( lady_name:string) {
        this.lady_name = lady_name
    }
    get_lady_name():string{
        return this.lady_name;
    }
}
const lady_again = new lady(`Soofia`)
console.log(lady_again.get_lady_name());

