class BasicCalculator{
    public num1:number;
    public num2:number;
    
    constructor(a:number,b:number){
    
        this.num1 = a;
        this.num2 = b;
    }
    
    public addNumbers():number{
    
        return this.num1+this.num2;
    }
    private subtractNumbers():number{
        return this.num1-this.num2;
     }
    
     public multiplyNumbers():number{
        return this.num1*this.num2;
     }
     public divideNumbers():number{
        return this.num1/this.num2;
     }
    
     public privMethod():number{
    
        console.log("Calling private method: ");
        return this.subtractNumbers();
     }
    
    }
    let basCalc = new BasicCalculator(20,5);
    console.log("Calling  the publilc method"+basCalc.addNumbers());
    console.log("Calling the private substract method from privilege"+basCalc.privMethod());
    console.log("Calling static method: "+basCalc.multiplyNumbers());
    console.log("calling the division method: "+basCalc.divideNumbers());
    // console.log("Calling the child one: "+s.testChild());