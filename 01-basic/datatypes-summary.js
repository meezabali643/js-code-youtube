//primitive dattypes

//strings, Boolean, Bigint, Number, Symbol, Null, Undefined


const score= 100;
const scorevalue= 100.3;

const isloggedin= false;
const outsidetemp= null;
let useremail;
const id= Symbol('123');
const anotherid= Symbol('123');

// console.log(id === anotherid);

const bigNumber= 123344n


//Refrence/Non-primitive dattypes
//Arrays, Objects, Functions

const heros = ["ali, amana, amar, iqra"];
 let myobj= {
    name:"Kashifa",
    age: 20,
}

const myfunc =function(){
console.log("hello world")
}

console.log(typeof bigNumber)



//+++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive datatypes), Heap(Nonprimitive datatypes)

let myname= "kashifa";
anothername= "noreen";

console.log(myname);
console.log(anothername);

let userone ={
    name:"ali",
    age:10,
    email: "ali2334@gmail.com"
}
let usertwo= userone

usertwo.email = " amar@gamil.com";

console.log(userone.email);
console.log(usertwo.email);





