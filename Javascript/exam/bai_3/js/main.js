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
manage.showList();