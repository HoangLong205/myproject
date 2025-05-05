class BookManage {
    constructor(arr) {
        this.books = arr;
    }

    showList(filterList = this.books) {
        let table = '';
        for (var i = 0; i < filterList.length; i++) {
            table += `<tr>
            <td>${filterList[i].id}</td>
            <td>${filterList[i].name}</td>
            <td>${filterList[i].year}</td>
            <td>${filterList[i].quantity}</td>
            <td>${filterList[i].status}</td>
            </tr>`
        }

        document.getElementById('bookList').innerHTML = table;
    }

    addBook(book) {
        this.books.push(book);
    }


}
