
class SciCalculator {
    public num: number;

    constructor(a: number) {
        this.num = a;
    }

    public cosOf(): number {
        return Math.round(Math.cos(this.num));
    }

    private tanOf(): number {
        return Math.round(Math.tan(this.num));
    }

    privOperetationMethod(): number {
        console.log("We are calling the private #tanOf method from privilege: ->");
        return this.tanOf();
    }

    public sinOf(): number {
        return Math.round(Math.sin(this.num));
    }

    public logOf():number{
        return Math.log(this.num);

    }

    public exOf(): number {
        return Math.exp(this.num);
    }

}
class CalcChild extends SciCalculator {


    public sinOf():number {

        return (Math.sin(this.num)) * 2;
    }



}

let sciCal = new SciCalculator(90);
let childSciCal = new CalcChild(90);

console.log('cos of the given number-->' + sciCal.cosOf());
console.log('tanOf given number without using privilege:-> ');
console.log('tanOf given number using privilege:-> ' + sciCal.privOperetationMethod());
console.log('sinOf given number:-> ' + sciCal.sinOf());
console.log('calling the  method giving logOf value' + sciCal.logOf());
console.log('exOf number :->' + sciCal.exOf());
console.log("Calling the child one: " + childSciCal.sinOf());