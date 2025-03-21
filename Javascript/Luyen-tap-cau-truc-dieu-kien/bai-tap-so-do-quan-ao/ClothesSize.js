let weight = +prompt("Nhap can nang: ");
if (isNaN(weight) == true || weight < 0) {
    alert("Error!")
}
if (weight < 50) {
    document.write("Size cua ban la S")
} else if (weight >= 50 && weight <= 65) {
    document.write("Size cua ban la M")
} else if (weight > 65 && weight <= 80) {
    document.write("Size cua ban la L")
} else {
    document.write("Size cua ban la Xl")
}