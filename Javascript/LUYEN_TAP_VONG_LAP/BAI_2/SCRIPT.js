//bai1
let n = 10; // số lượng phần tử Fibonacci cần in
let a = 0, b = 1;
console.log("Dãy Fibonacci:");
for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

//bai2
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}

//bai3
console.log(`Giai thừa của ${number} là ${factorial}`);
let height = 5;
console.log("Góc vuông dưới trái:");
for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
}

console.log("Góc vuông trên trái:");
for (let i = height; i >= 1; i--) {
    console.log("*".repeat(i));
}

console.log("Góc vuông dưới phải:");
for (let i = 1; i <= height; i++) {
    console.log(" ".repeat(height - i) + "*".repeat(i));
}

console.log("Góc vuông trên phải:");
for (let i = height; i >= 1; i--) {
    console.log(" ".repeat(height - i) + "*".repeat(i));
}

//bai4
let rows = 4;
let cols = 7;
console.log("Hình chữ nhật:");
for (let i = 0; i < rows; i++) {
    console.log("*".repeat(cols));
}

//bai5
let principal = 1000000; // Số tiền ban đầu (1 triệu)
let months = 12; // Số tháng cho vay
let monthlyInterestRate = 0.05; // Lãi suất hàng tháng (5%)

for (let i = 1; i <= months; i++) {
    principal += principal * monthlyInterestRate;
}
console.log(`Tổng số tiền sau ${months} tháng là: ${principal.toFixed(2)} VNĐ`);