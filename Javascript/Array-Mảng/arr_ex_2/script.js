//bai1
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < a.length; i++) {
    console.log("row " + i);
    for (let j = 0; j < a[i].length; j++) {
        console.log(" " + a[i][j]);
    }
}

//bai2
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let input = ['c', 's', 'c', '2', '6', '1'];
let reversedArray = reverseArray(input);
let result = reversedArray.join('');
console.log(result); // Kết quả: "162csc"

//bai3
let arr = ['a', '5', 'b', '9', 'x', '2', 'y', '0'];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
        count++;
    }
}

console.log("Số ký tự là số trong mảng:", count);

//bai5
let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");

if (str1 === str2) {
    console.log("Hai chuỗi giống nhau.");
} else {
    console.log("Hai chuỗi KHÔNG giống nhau.");
}

//bai4
let str = "Học lập trình tại CodeGym rất vui";
let words = str.trim().split(/\s+/); // /\s+/ là biểu thức chính quy khớp với 1 hoặc nhiều khoảng trắng.
console.log("Số từ trong chuỗi:", words.length);

//bai6
let arr = ['a', '-', 'b', 'c', '-', '-', 'd'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
        arr[i] = '_';
    }
}
console.log("Mảng sau khi thay thế:", arr);