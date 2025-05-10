class Student {
    id;
    fullName;
    gender;
    birthDate;
    classroom;
    img;
    constructor(id, fullName, gender, birthDate, classroom, img) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.classroom = classroom;
        this.birthDate = birthDate;
        this.img = img;
    }

    getID() {
        return this.id;
    }

    getFullName() {
        return this.fullName;
    }

    getGender() {
        return this.gender;
    }

    getClassroom() {
        return this.classroom;
    }

    getBirthDate() {
        return this.birthDate;
    }

    getImg() {
        return this.img;
    }

    setID(id) {
        this.id = id;
    }

    setFullName(fullName) {
        this.fullName = fullName;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setClassroom(classroom) {
        this.classroom = classroom;
    }

    setImg(img) {
        this.img= img;
    }

    edit(id, fullName, gender, birthDate, classroom, img) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.classroom = classroom;
        this.birthDate = birthDate;
        this.img = img;
    }
}
