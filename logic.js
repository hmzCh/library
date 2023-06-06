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
    
    myLibrary.forEach(Book => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = Book.title;
        card.appendChild(title);
      
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = Book.author;
        card.appendChild(author);
      
        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = Book.pages + ' pages';
        card.appendChild(pages);

        const read = document.createElement('button');
        read.classList.add('readButton');
        if (Book.read === true) {;
            read.textContent = 'Read';            
        } else {;
            read.textContent = 'Not Read'  ;
        };
        card.appendChild(read);

        const remove = document.createElement('button');
        remove.classList.add('removeButton')
        remove.textContent = 'Remove'
        card.appendChild(remove)
      
        cards.appendChild(card);
    });

} 

let bookOne = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
let bookTwo = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
let bookThree = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

displayBooks();

let addBookButton = document.querySelector("#addBookButton");
let addBookForm = document.querySelector("#addBookForm");
let submitButton = document.querySelector("#submitButton");
let overlay = document.querySelector('#overlay');

addBookButton.addEventListener("click", function() {
    toggleForm("visible");
});

submitButton.addEventListener("click", function() {
    toggleForm("hidden");
});

overlay.addEventListener("click", function() {
    toggleForm("hidden");
});

function toggleForm(status) {
    addBookForm.style.visibility = status;
    overlay.style.visibility = status;
}