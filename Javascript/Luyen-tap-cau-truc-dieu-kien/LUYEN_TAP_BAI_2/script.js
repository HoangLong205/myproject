//bai1
let celsius = 25; //dung prompt de bao nhap gia tri khac
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

//bai2
let meters = 5; //dung prompt de bao nhap gia tri khac
let feet = meters * 3.2808;
console.log(`${meters} mét = ${feet.toFixed(2)} feet`);

//bai3
let a = 4; //dung prompt de bao nhap gia tri khac
if (a > 0) {
    let area = a * a;
    console.log(`Diện tích hình vuông là ${area}`);
} else {
    console.log("Cạnh không hợp lệ");
}

//bai4
let a = 4, b = 6; //dung prompt de bao nhap gia tri khac
if (a > 0 && b > 0) {
    let area = a * b;
    console.log(`Diện tích hình chữ nhật là ${area}`);
} else {
    console.log("Cạnh không hợp lệ");
}

//bai5
let a = 3, b = 4; //dung prompt de bao nhap gia tri khac
if (a > 0 && b > 0) {
    let area = 0.5 * a * b;
    console.log(`Diện tích tam giác vuông là ${area}`);
} else {
    console.log("Cạnh không hợp lệ");
}

//bai6
let a = 2, b = -4; //dung prompt de bao nhap gia tri khac
if (a === 0) {
    if (b === 0) console.log("Phương trình vô số nghiệm");
    else console.log("Phương trình vô nghiệm");
} else {
    let x = -b / a;
    console.log(`Nghiệm x = ${x}`);
}

//bai7
let a = 1, b = -3, c = 2; //dung prompt de bao nhap gia tri khac
if (a === 0) {
    // Giải như phương trình bậc 1
    let x = -c / b;
    console.log(`Phương trình bậc 1, x = ${x}`);
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log(`Phương trình có nghiệm kép x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`x1 = ${x1}, x2 = ${x2}`);
    }
}

//bai8
let age = 25; //dung prompt de bao nhap gia tri khac
if (age > 0 && age < 120) {
    console.log("Đây là tuổi hợp lệ");
} else {
    console.log("Không phải là tuổi hợp lệ");
}

//bai9
let a = 3, b = 4, c = 5; //dung prompt de bao nhap gia tri khac
if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    console.log("Đây là ba cạnh của một tam giác");
} else {
    console.log("Không phải là ba cạnh của tam giác");
}

//bai10
let kWh = 150; //dung prompt de bao nhap gia tri khac
let cost = 0;
if (kWh <= 50) {
    cost = kWh * 1.678;
} else if (kWh <= 100) {
    cost = 50 * 1.678 + (kWh - 50) * 1.734;
} else {
    cost = 50 * 1.678 + 50 * 1.734 + (kWh - 100) * 2.014;
}
console.log(`Tiền điện là: ${cost.toFixed(2)} VNĐ`);

//bai11
let income = 10000000; // thu nhập sau giảm trừ
let tax = 0; //dung prompt de bao nhap gia tri khac
if (income <= 5000000) {
    tax = income * 0.05;
} else if (income <= 10000000) {
    tax = 250000 + (income - 5000000) * 0.1;
} else {
    tax = 250000 + 500000 * 0.1 + (income - 10000000) * 0.15;
}
console.log(`Thuế TNCN phải nộp: ${tax.toFixed(2)} VNĐ`);

//bai12
let principal = 1000000; //dung prompt de bao nhap gia tri khac
let months = 12;
let rate = 0.05;

for (let i = 1; i <= months; i++) {
    principal += principal * rate;
}
console.log(`Tổng số tiền sau ${months} tháng là: ${principal.toFixed(2)} VNĐ`);