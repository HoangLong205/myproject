var ly = prompt('Nhap diem Ly');
var hoa = prompt('Nhap diem Hoa');
var sinh = prompt('Nhap diem Sinh');

var diemLy = parseInt(ly);
var diemHoa = parseInt(hoa);
var diemSinh = parseInt(sinh);

var avg = (diemLy + diemHoa + diemSinh) / 3;

document.write('diem trung binh la: ' + avg);