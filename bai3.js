class Book {
    id;
    name;
    year;
    number;
    status;

    constructor(id, name, year, number, status) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.number = number;
        this.status = status;
    }
}

let books = [new Book("12345", "Toán", 2000, 3, "True")];

function displayBook() {
    const tableBody = document.getElementById('tbody');
    tableBody.innerHTML = '';
    let row = "";
    for (let i = 0; i < books.length; i++) {
        row += `<tr>
        <td>${books[i].id}</td>
        <td>${books[i].name}</td>
        <td>${books[i].year}</td>
        <td>${books[i].number}</td>
        <td>${books[i].status}</td>
    </tr>`
    }
    tableBody.innerHTML = row;
}

displayBook();

function hienForm() {
    document.getElementById('formAdd').style.display = 'block';
    document.getElementById('buttonAdd').style.display = 'none';
    document.getElementById('borrowBook').style.display = 'none';
    document.getElementById('addMany').style.display = 'none';
}

function addBook(e) {
    e.preventDefault();
    const idBook = document.getElementById('id').value;
    const nameBook = document.getElementById('name').value;
    const yearBook = parseInt(document.getElementById('year').value);
    const numberBook = parseInt(document.getElementById('many').value);

    if (!/^[1-5][0-9]{4}$/.test(idBook)) {
        alert("Mã sách không hợp lệ. Phải gồm 5 ký tự, bắt đầu từ 1-5.");
        return;
    }
    const statusBook = numberBook > 0 ? "True" : "False";
    const newBook = new Book(idBook, nameBook, yearBook, numberBook, statusBook);
    books.push(newBook);

    alert("Thêm sách thành công");
    console.log(books);
    displayBook();
    document.getElementById('formAdd').style.display = 'none';
    document.getElementById('addMany').style.display = 'block';
    document.getElementById('buttonAdd').style.display = 'inline-block';
    document.getElementById('borrowBook').style.display = 'block';
    // Reset lại form
    document.getElementById('addBook').reset();
}

function borrowBook(e){
    e.preventDefault();
    const bookIdToBorrow = prompt("Nhập mã số sách muốn mượn:");
    if(bookIdToBorrow){
        const book = books.find(b => b.id === bookIdToBorrow);
        if(book){
            if(book.number > 0 ){
                book.number -= 1;
                if(book.number == 0){
                    book.status = "False";
                }
                alert(`Đã mượn sách : ${book.name}`);
            }else{
                alert("Hết sách bạn muốn chọn");
            }
            displayBook();
        }else{
            alert("Mã sách không tồn tại");
        }
    }else{
        alert("Bạn phải nhập mã sách")
    }
}




