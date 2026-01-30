//Reduce function in JavaScript


console.log("reduce");

let array = [1, 2, 3, 4, 5];
let finalVal = array.reduce((res, el) => {
    return res * el;


});
console.log(finalVal);


//finding the maximum value of an array using reduce function 

let arr = [1, 2, 3, 4, 3, 2, 1, 4, 6, 4, 3];

let ans = arr.reduce((max, el) => {

    if (max < el) {

        return el;
    }
    else {
        return max;
    }



});

console.log(ans);



// every function 


let arr2 = [10, 20, 30, 40, 50];

let check = arr2.every((el) => {

    return el % 10 === 0;
});

console.log(check);



let min = arr2.reduce((min, el) => {

    if (min > el) {
        return el;
    }
    else {
        return min;
    }
});

console.log(min);
