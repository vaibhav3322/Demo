//the first code of TS
console.log("My First TS code");

//Data types in TS
let myNumber:number = 10;
console.log("call the number: "+myNumber);
console.log(typeof(myNumber));

// define string

let nameref:string="Hello my name tarining";

console.log(typeof(nameref));
console.log("call here name--is -" +nameref);

// any data type 

let test:any= "any string";
console.log(typeof(test));
console.log("call the data type"+test);

// Declare the array in TS code 


let myArr:String[]=["amit","Raymond","yan","mitul"];
console.log((typeof(myArr)));
console.log(myArr);


// define the Array of any type

let myArr1:any[]=["vinay", 1, 2.45,"test"];
console.log(typeof(myArr1));
console.log(myArr1);


// type of methods in TS 
// basic mathod 


function addValue(value1:number,value2:number):number{

    console.log('addition of the values from this Fuction');
 
     return value1 + value2;
 }

 console.log(addValue(23,43));

 
function details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
    
    
 }
 
 details(123,"amit");
 details(111,"training","training@cgi.com");


 // method with defulat param impl 

function discount(price:number,rate:number = 0.50) { 

    let discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 discount(1000); //one param
 discount(1000,0.30); // two param

// enum declaration
 enum myConstants{  // myConstants is the name of Enum here 

	pi=3.14,
	e=2.73,
	log2=0.3,
	log5=0.7
}

console.log('finding enum');
console.log(2*myConstants.pi);
