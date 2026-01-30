let nums = [1, 2, 3, 3, 4, 6, 4];

let square = nums.map((el) => {

    return el * el;
});

console.log(square);

let sum = square.reduce((res, el) => {
    return res + el;
});

console.log(sum);

let avg = sum / nums.length;
console.log(avg);



let arr1 = [5, 10, 15, 20, 25];

let newArr = arr1.map((el) => {

    return el = el + 5;

});

console.log(arr1);

let str = ["hassan", "failed ", "sana"];

let upperCase = str.map((el) => { 
    return el.toUpperCase();
}
);

console.log(upperCase);



