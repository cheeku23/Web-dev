//Map in javascript

console.log("Maps");

let nums = [1, 2, 3, 4, 5, 6];

let double = nums.map((el) => {

    return el * 2;
});


let students = [

    {
        name: "Hassan",
        marks: 98,
    },
    {
        name: "Awais",
        marks: 93,
    },
    {
        name: "Muskan",
        marks: 97,
    },


];

let gpa = students.map( (el)=> {
    return el.marks/10;
});

console.log(gpa);



// Filter   // callback function ky output mn agar true ho to return krway ga warna nahi krway ga


let data= [1,2,3,4,5,6,76,7,45,534,2,3,4];

let even = data.filter( (el)=> {
    return el%2==0;
})

console.log(even);