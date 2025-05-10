function findIndex(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;

        }
    }
    return -1;
}

let arr = [12, 15, 1, 3, 6, 7, 24, 10, 24];
let index = findIndex(arr, 24);
console.log(index);