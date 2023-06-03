function Book(title, author, pages, read) {
        
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {

        if (read==true) {
            info = (title & " by " & author & ", " + pages & " pages, read")
        } else {
            info = (title & " by " & author & ", " & pages & " pages, not read yet")
        }

        return info
    }
}

const bookOne = new Book("Recipe", "Gordon Ramsey", 45, false)
console.log(bookOne.info)