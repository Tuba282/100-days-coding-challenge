"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class calculator {
    cal(a, b) {
        return `addition = ${a + b} 
    Subtraction = ${a - b} 
    Multiplication =  ${a * b} 
    Division =  ${a / b}`;
    }
    output() {
        console.log(`
    
    here your desired outcome

     ${this.cal(10, 5)}`);
    }
}
exports.default = calculator;
//A module cannot have multiple default exports.
