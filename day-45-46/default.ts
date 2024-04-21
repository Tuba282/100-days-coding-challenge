
export default class calculator { 

  cal(a: number, b: number) {
    return `addition = ${a+b} 
    Subtraction = ${a-b} 
    Multiplication =  ${a*b} 
    Division =  ${a/b}`;
  }

  output(){
    console.log(`
    
    here your desired outcome

     ${this.cal(10,5)}`);
    
  }
  
}
//A module cannot have multiple default exports.