var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    BasicCalculator.prototype.addNumbers = function () {
        return this.num1 + this.num2;
    };
    BasicCalculator.prototype.subtractNumbers = function () {
        return this.num1 - this.num2;
    };
    BasicCalculator.prototype.multiplyNumbers = function () {
        return this.num1 * this.num2;
    };
    BasicCalculator.prototype.divideNumbers = function () {
        return this.num1 / this.num2;
    };
    BasicCalculator.prototype.privMethod = function () {
        console.log("Calling private method: ");
        return this.subtractNumbers();
    };
    return BasicCalculator;
}());
var basCalc = new BasicCalculator(20, 5);
console.log("Calling  the public method" + basCalc.addNumbers());
console.log("Calling the private substract method from privilege" + basCalc.privMethod());
console.log("Calling static method: " + basCalc.multiplyNumbers());
console.log("calling the division method: " + basCalc.divideNumbers());
// console.log("Calling the child one: "+s.testChild());
