// Bài 1
let arr1 = [5, 10, 12, 3, 8, 15, 20, 7, 11, 9];
let count1 = arr1.filter(n => n >= 10).length;
console.log("Bài 1 - Số lượng số >= 10:", count1);

// Bài 2
let arr2 = [4, 9, 2, 15, 6, 10, 8, 1, 13, 5];
let max2 = Math.max(...arr2);
let pos2 = arr2.indexOf(max2);
console.log("Bài 2 - Giá trị lớn nhất:", max2, ", Vị trí:", pos2);

// Bài 3
let arr3 = [3, 6, 9, 12, 15];
let max3 = Math.max(...arr3);
let avg3 = arr3.reduce((a, b) => a + b, 0) / arr3.length;
console.log("Bài 3 - Max:", max3, ", Trung bình:", avg3);

// Bài 4
let arr4 = [1, 2, 3, 4, 5];
arr4.reverse();
console.log("Bài 4 - Đảo ngược:", arr4);

// Bài 5
let str5 = "-3, 5, -7, 2, -1, 0";
let arr5 = str5.split(',').map(Number);
let count5 = arr5.filter(n => n < 0).length;
console.log("Bài 5 - Số lượng số âm:", count5);

// Bài 6
let arr6 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
let V6 = 15;
if (arr6.includes(V6)) {
    console.log("Bài 6 - V is in the array");
} else {
    console.log("Bài 6 - V is not in the array");
}

// Bài 7
let arr7 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let V7 = 7;
let index7 = arr7.indexOf(V7);
if (index7 !== -1) {
    for (let i = index7; i < arr7.length - 1; i++) {
        arr7[i] = arr7[i + 1];
    }
    arr7[arr7.length - 1] = 0;
    console.log("Bài 7 - Mảng sau khi xóa:", arr7);
} else {
    console.log("Bài 7 - V không có trong mảng");
}

// Bài 8
let arr8 = [5, 2, 9, 1, 7, 6, 3, 8, 4, 0];
arr8.sort((a, b) => b - a);
console.log("Bài 8 - Mảng giảm dần:", arr8);

// Bài 9
let a = [1,2,3,4,5,6,7,8,9,10];
let b = [11,12,13,14,15,16,17,18,19,20];
let c = b.concat(a);
console.log("Bài 9 - Mảng c:", c);
