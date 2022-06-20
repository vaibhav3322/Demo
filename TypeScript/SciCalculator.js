var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SciCalculator = /** @class */ (function () {
    function SciCalculator(a) {
        this.num = a;
    }
    SciCalculator.prototype.cosOf = function () {
        return Math.round(Math.cos(this.num));
    };
    SciCalculator.prototype.tanOf = function () {
        return Math.round(Math.tan(this.num));
    };
    SciCalculator.prototype.privOperetationMethod = function () {
        console.log("We are calling the private #tanOf method from privilege: ->");
        return this.tanOf();
    };
    SciCalculator.prototype.sinOf = function () {
        return Math.round(Math.sin(this.num));
    };
    SciCalculator.prototype.logOf = function () {
        return Math.log(this.num);
    };
    SciCalculator.prototype.exOf = function () {
        return Math.exp(this.num);
    };
    return SciCalculator;
}());
var CalcChild = /** @class */ (function (_super) {
    __extends(CalcChild, _super);
    function CalcChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalcChild.prototype.sinOf = function () {
        return (Math.sin(this.num)) * 2;
    };
    return CalcChild;
}(SciCalculator));
var sciCal = new SciCalculator(90);
var childSciCal = new CalcChild(90);
console.log('cos of the given number-->' + sciCal.cosOf());
console.log('tanOf given number without using privilege:-> ');
console.log('tanOf given number using privilege:-> ' + sciCal.privOperetationMethod());
console.log('sinOf given number:-> ' + sciCal.sinOf());
console.log('calling the  method giving logOf value' + sciCal.logOf());
console.log('exOf number :->' + sciCal.exOf());
console.log("Calling the child one: " + childSciCal.sinOf());
