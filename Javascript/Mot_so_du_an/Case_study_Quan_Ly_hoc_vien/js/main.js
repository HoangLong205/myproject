let student = new Student('010', "Đồng Vũ Hoàng Long", '07/01/2005', 'Nam','USSH112','img/student/Long.jpg' );
let student3 = new Student('011', "Hà Hoàng Long", '07/01/2005', 'Nam','USSH112','img/student/Long.jpg' );
let student1 = new Student('012','Đàm Kiều Trinh','05/02/2002','Nữ', 'USSK113','img/student/Hehe-Boi-meme-7.jpg');
let student2 = new Student('013','Bùi Thị Ánh','22/01/2002','Nữ','USSL132','img');
let arr =[student, student3, student1, student2];
let manage = new StudentManagement(arr);

function deleteStudentById(id) {
    let index = manage.students.findIndex(student => student.id == id);
    if (index !== -1) {
        if (confirm(`Bạn có muốn xoá thông tin của ${manage.students[index].fullName} không`)) {
            manage.delete(index);
            manage.showList();
        }
    }
}

let studentIndex = -1;

//ham sua thong tin student
function editStudentById(id) {
    let student = manage.students.find(student => student.id == id);
    let index = manage.students.findIndex(student => student.id == id);

    document.getElementById('id').value = student.id;
    document.getElementById('fullName').value = student.fullName;
    document.getElementById('gender').value = student.gender;
    document.getElementById('birthDate').value = student.birthDate;
    document.getElementById('class').value = student.classroom;
    document.getElementById('img').value = student.img;

    studentIndex = index;
}

function updateStudent() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullName').value;
    let gender = document.getElementById('gender').value;
    let birthdate = document.getElementById('birthDate').value;
    let classroom = document.getElementById('class').value;
    let img = document.getElementById('img').value;

    let student = manage.findStudentIndex(studentIndex);
    manage.editStudent(student, id, name, gender, birthdate, classroom, img)
    manage.showList();
    clear();
}

function createStudent(event) {
    event.preventDefault();

    let id = document.getElementById('id').value;
    let name = document.getElementById('fullName').value;
    let gender = document.getElementById('gender').value;
    let birthdate = document.getElementById('birthDate').value;
    let classroom = document.getElementById('class').value;
    let img = document.getElementById('img').value;

    // Kiểm tra xem ID đã tồn tại hay chưa
    let existingStudent = manage.students.find(student => student.id === id);
    if (existingStudent) {
        alert(`ID ${id} đã tồn tại. Vui lòng nhập một ID khác.`);
        return; // Dừng quá trình thêm học sinh nếu ID đã tồn tại
    }

    let student = new Student(id,name,gender,birthdate,classroom,img);
    manage.addStudent(student);
    manage.showList();
    clear();
}

function clear() {
    document.getElementById('id').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('class').value = '';
    document.getElementById('img').value = '';
}

function searchStudent() {
    let searchType = document.getElementById('searchType').value;
    let searchValue = document.getElementById('searchInput').value.toLowerCase();

    let filterStudent = manage.students.filter(student => {

        let value = '';
        switch (searchType) {
            case 'id':
                value = student.id;
                break;
            case 'name':
                value = student.fullName;
                break;
            case 'class':
                value = student.classroom;
                break;
            default:
                value = '';
        }
        return value.toLowerCase().includes(searchValue);
    });

    manage.showList(filterStudent);
}

manage.showList();



