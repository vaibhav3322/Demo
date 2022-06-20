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
//Various modifiers like private,public,protected and read only.
var Person = /** @class */ (function () {
    function Person(a) {
        this.personId = a;
        this.refId = 301;
        this.testConstId = 701;
        this.greetings = "Welcome Greeting";
        console.log("Person class is instantiated");
        console.log("personId is " + this.personId);
    }
    // public method 
    Person.prototype.createPerson = function () {
        // this.testConstId = 800;
        console.log("calling the customer here public method here");
        return " Customer is crrated with ---Id-->" + "-" + this.personId + "with" + this.greetings + " " + this.testConstId;
    };
    Person.prototype.myTestGreetings = function () {
        return "welcome with-->" + this.greetings;
    };
    // it is a privilege method which is exposing the private method
    Person.prototype.preMethod = function () {
        //this.testconstid=900;
        console.log("call preveledged here-->");
        return this.myTestGreetings();
    };
    Person.staticMethod = function () {
        console.log("This is my Static");
        return "in static";
    };
    return Person;
}());
//implement one more class here 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testChild = function () {
        return "i am the child of Student class" + "" + this.refId;
    };
    return Student;
}(Person));
var s = new Student(101);
console.log("Calling  the publilc method" + s.createPerson());
console.log("Calling the private method from privikege" + s.preMethod());
console.log("Calling static method: " + Person.staticMethod());
console.log("Calling the child one: " + s.testChild());
