function pushValue_to_index(array, index, value) {

    if (index >= array.length) {
        throw new Error('Out of bound index');
    }

    let newArray = new Array(array.length + 1);
    for (let i = 0; i < index; i++) {
        newArray[i] = array[i];
    }
    newArray[index] = value;
    for (let i = index + 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    return newArray;
}

let arr = [1, 2, 3, 4, 5]
let newarr = pushValue_to_index(arr, 3, 15);
console.log(newarr);