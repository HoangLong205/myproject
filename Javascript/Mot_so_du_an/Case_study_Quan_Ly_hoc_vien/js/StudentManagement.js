class StudentManagement{
    constructor(arr) { //ham tao
        this.students = arr;
    }

    //hien thi danh sach sinh vien
    showList(filterList = this.students) {
        let table = ``;
        for (var i = 0; i < filterList.length; i++) {
            table += `<tr>
            <td>${filterList[i].id}</td>
            <td>${filterList[i].fullName}</td>
            <td>${filterList[i].gender}</td>
            <td>${filterList[i].birthDate}</td>
            <td>${filterList[i].classroom}</td>
            <td><img src="${filterList[i].img}" alt="student image" style="width: 100px; height: auto;"></td>
                <td>
                    <button class="deleteBtn" onclick="deleteStudentById('${filterList[i].id}')">DELETE</button>
                    <button class="editBtn" onclick="editStudentById('${filterList[i].id}')">EDIT</button>
                </td>
            </tr>`
        }

        document.getElementById("list_student").innerHTML = table;
    }

    findStudentIndex(index) {
        return this.students[index];
    }

    addStudent(student) {
        this.students.push(student);
    }

    delete(index) {
        this.students.splice(index, 1);
    }

    editStudent(student, id, fullName, gender, birthDate, classroom, img) {
        student.edit(id, fullName, gender, birthDate, classroom, img)
    }
}