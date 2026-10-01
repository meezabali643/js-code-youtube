//dates

let mydates = new Date();
// console.log(mydates.toString());
// console.log(mydates.toDateString());
// console.log(mydates.toLocaleDateString());
// console.log(mydates.toJSON());
// console.log(mydates.toISOString());
// console.log(mydates.toLocaleString());
// console.log(typeof mydates);

// let mycreateddate= new Date(2026,1, 23);
// console.log(mycreateddate.toDateString());

// let mycreateddate= new Date(2026,1, 23, 6, 8);
let mycreateddate= new Date("2026-03-23");
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getDate())
// console.log (Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getFullYear());

newdate.toLocaleString('default', {
    weekday: "long",
    // timeZone:'' search from google
})