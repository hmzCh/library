let myLibrary = [];

function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read==true) {
            info = (title + " by " + author + ", " + pages + " pages, read");
        } else {
            info = (title + " by " + author + ", " + pages + " pages, not read yet");
        }
        return info;
    }

}

function addBookToLibrary() {
    
    let title = prompt("Enter the book title");
    let author = prompt("Enter the author's name");
    let pages = prompt("Enter the number of pages");
    let read = prompt("Have you read this book? (yes/no)");

    if (read.toLowerCase() === "yes") {
        read = true;
    } else {
        read = false;
    }

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    let titleHeader = document.createElement("th");
    titleHeader.textContent = "Title";
    headerRow.appendChild(titleHeader);

    let authorHeader = document.createElement("th");
    authorHeader.textContent = "Author";
    headerRow.appendChild(authorHeader);

    let pagesHeader = document.createElement("th");
    pagesHeader.textContent = "Pages";
    headerRow.appendChild(pagesHeader);

    let readHeader = document.createElement("th");
    readHeader.textContent = "Read";
    headerRow.appendChild(readHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");

        let titleCell = document.createElement("td");
        titleCell.textContent = myLibrary[i].title;
        row.appendChild(titleCell);

        let authorCell = document.createElement("td");
        authorCell.textContent = myLibrary[i].author;
        row.appendChild(authorCell);

        let pagesCell = document.createElement("td");
        pagesCell.textContent = myLibrary[i].pages;
        row.appendChild(pagesCell);

        let readCell = document.createElement("td");
        readCell.textContent = myLibrary[i].read ? "Yes" : "No";
        row.appendChild(readCell);

        table.appendChild(row);
    }

    document.body.appendChild(table);
}

let bookOne = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
let bookTwo = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
let bookThree = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

displayBooks();
