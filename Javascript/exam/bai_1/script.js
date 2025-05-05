let n = parseInt(prompt("nhap so phan tu cua mang"));
if (n > 50 || n <= 0) {
    alert('Invalid input');
}

if (isNaN(n)) {
    alert(`${n} is not a number`)
}
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
        document.write(arr[i] + " ");
    }

let count = 0;
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }

    if (count > 0) {
        document.write(`Trung bình cộng các số lẻ ở vị trí chẵn là ${sum / count}`);
    } else {
        document.write("Không có số lẻ nào ở vị trí chẵn");
    }