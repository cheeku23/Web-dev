console.log("Hello World");
console.log("Welcome to Delta course");

let time= setTimeout( ()=>{
    console.log('setTimeout here');


},  2000);


let time2= setInterval( ()=>{
    console.log("setInterval here");


} , 2000);

setTimeout( ()=> {
    clearInterval(time2);
}, 10000);



// clearInterval(time2); ye setInterval ko rokny ky liye use hota hai 






//try and catch = error check krny ky liye agar error hua try mn to catch run hoga nahi to try hi run hoga


let a = 5;

try{
    console.log(a);
} catch {
    console.log("a work nahi kr raha ");
}

try{

    console.log(b);
} catch{
    console.log("b work nahi kr raha");
}