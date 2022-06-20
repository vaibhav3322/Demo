//Various modifiers like private,public,protected and read only.
class Person {

    public personId: number;

    private greetings: string;
    protected refId:number;
    readonly testConstId:number;
    constructor(a: number) {
        this.personId = a;
        this.refId = 301;
        this.testConstId = 701;
        this.greetings = "Welcome Greeting";
        console.log("Person class is instantiated");
        console.log("personId is " + this.personId);

    }
  // public method 

  public createPerson():string{
    // this.testConstId = 800;
    console.log("calling the customer here public method here");

  return " Customer is crrated with ---Id-->" + "-" +this.personId + "with" +this.greetings+" "+this.testConstId; 

}


private myTestGreetings():string{


    return "welcome with-->" +this.greetings;
  }
   // it is a privilege method which is exposing the private method
  public preMethod():string{
    //this.testconstid=900;
    console.log("call preveledged here-->");
  return this.myTestGreetings();
} 

static staticMethod():string{
    console.log("This is my Static");
    return "in static";
}


}

//implement one more class here 

class Student extends Person{


    public testChild():string{
 
 
     return "i am the child of Student class" + "" + this.refId;
    }
 
 
 
 }

let s = new Student(101);
console.log("Calling  the publilc method"+s.createPerson());
console.log("Calling the private method from privikege"+s.preMethod());
console.log("Calling static method: "+Person.staticMethod());
console.log("Calling the child one: "+s.testChild());
