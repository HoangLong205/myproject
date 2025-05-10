const books = [
    new Book(12345, 'Toán', 2000, 3,),
    new Book(23456, 'Văn', 2005, 4,),
    new Book(34756, 'Tiếng anh', 2010, 5,)
];

let manage = new BookManage(books)


function addNewBook() {

    let id = prompt("Nhập mã số sách:");
    let name = prompt("Nhập tên sách:");
    let year = prompt("Nhập năm xuất bản:");
    let quantity = parseInt(prompt("Nhập số quyển:"));

    if (!validateBook(id, name, year, quantity)) return;

    if (manage.books.find(b => b.id === parseInt(id))) {
        alert("Mã sách đã tồn tại.");
        return;
    }

    let book = new Book(id, name, year, quantity);
    manage.addBook(book);
    manage.showList();
}

function borrowBook() {
    let id = prompt("Nhập id sách muốn mượn: ")
    let book = books.find(bId => bId.id === parseInt(id));
    if (book) {
        if (book.borrow()) {
            alert("Đã mượn được sách");
        } else {
            alert("Sách đã hết")
        }
    }
    manage.showList();
}

function addExistBook() {
    let id = prompt("Nhập mã số sách đã có:");
    let quantity = parseInt(prompt("Thêm bao nhiêu quyển?"));

    let book = books.find(b => b.id === parseInt(id));
    if (book) {
        book.increaseQuantity(quantity);
        manage.showList();
    } else {
        alert("Không tìm thấy sách.");
    }
}
manage.showList();