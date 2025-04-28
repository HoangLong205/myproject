let student = new Student('011', "Tạ Thị Thuỳ", '07/02/2002', 'Nữ','USSH112','https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg' );
let student1 = new Student('012','Đàm Kiều Trinh','05/02/2002','Nữ', 'USSK113','https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png');
let student2 = new Student('023','Bùi Thị Ánh','22/01/2002','Nữ','USSL132','https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg');
let arr =[student, student1, student2];
let manage = new StudentManagement(arr);

function deleteStudent(index) {
    if (confirm(`Bạn có muốn xoá thông tin của ${manage.students[index].fullName} không`)) {
        manage.delete(index);
        manage.showList();

    }
}

let studentIndex = -1;

//ham sua thong tin student
function editStudent(index) {
    let student = manage.findStudentIndex(index);
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



