let arr = [1, 3, 4, 6, 3, 4, 9, 8, 7, 6, 5, 4, 5, 3, 5];
let num = 5;

function getElements(arr, num) {

    for (let i = 0; i <= arr.length; i++) {

        if (arr[i] < num) {
            console.log(arr[i]);
        }


    }
}

getElements(arr, num);