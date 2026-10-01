//string can be represent in "" also in ''
const name= " ali "
const reponumber = 50

// console.log(name + reponumber + " value ") not the modren method

//modren javascirpt method use only this
// console.log(`Hello My name is ${name} and my repo count is ${reponumber} `);

// another way to declare strings
const gamename = new String('Amar-c-com');
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(5));
// console.log(gamename.indexOf('m'));


//+++++++++++++++++++++take 15 minutes and write the all string methods 


const newstring = gamename.substring(0, 4);
// console.log(newstring);

const anotherstring = gamename.slice(-5, 4);
console.log(anotherstring);

const stringone =      "         alaya      ";
console.log(stringone);
console.log(stringone.trim());


const url = "https:/youtube.com/%20change"
console.log(url.replace('%20', '-'));

console.log(url.includes("tube"));

console.log(gamename.split('-'));