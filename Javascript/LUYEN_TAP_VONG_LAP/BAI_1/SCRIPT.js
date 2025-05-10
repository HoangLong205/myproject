//BAI1
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành!");
    }
}

//BAI2
let temperature = prompt("Nhập nhiệt độ hiện tại:");

if (temperature > 100) {
    alert("Nhiệt độ quá cao, hãy giảm nhiệt độ.");
} else if (temperature < 20) {
    alert("Nhiệt độ quá thấp, hãy tăng nhiệt độ.");
} else {
    alert("Nhiệt độ bình thường.");
}

//BAI3
let a = 0;
let b = 1;
let count = 0;

while (count < 20) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}

//BAI4
let a = 0;
let b = 1;

while (true) {
    let next = a + b;
    if (next % 5 === 0) {
        console.log("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + next);
        break;
    }
    a = b;
    b = next;
}

//BAI5
let a = 0;
let b = 1;
let sum = 0;
let count = 0;

while (count < 20) {
    sum += a;
    let next = a + b;
    a = b;
    b = next;
    count++;
}

console.log("Tổng của 20 số đầu tiên trong dãy Fibonacci là: " + sum);

//BAI6
let count = 0;
let num = 0;
let sum = 0;

while (count < 30) {
    if (num % 7 === 0) {
        sum += num;
        count++;
    }
    num++;
}

console.log("Tổng của 30 số đầu tiên chia hết cho 7 là: " + sum);


//BAI7
let i = 1;
while (i <= 100) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    i++;
}