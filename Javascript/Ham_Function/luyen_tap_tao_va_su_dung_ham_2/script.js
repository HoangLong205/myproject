//bai1
function squareNum(num) {
    return num * num;
}

//bai2
function premeter(a, b) {
    return 2 * (a + b);
}

function area(a, b) {
    return a * b;
}

//bai3
function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    }
    return a * factorial(a - 1);
}

//bai4
function isDigit(char) {
    return char >= '0' && char <= '9';
}

//bai5
function findMin(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}

//bai6
function isPosInteger(a) {
    if (a <= 0) return false;
    return true;
}

//bai7
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

//bai8
function reverse(arr) {
    let reArr = new Array(arr.length);
    let i = 0; let j = arr.length - 1;
    while (i < reArr.length && j >= 0) {
        reArr[i] = arr[j];
        i++;
        j--;
    }
    return reArr;
}