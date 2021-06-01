// Books Array
let myLibrary = [
  {
    author: 'George Orwell',
    title: '1984',
    pages: '2000',
    read: true
  },
  {
    author: 'George R.R Martin',
    title: 'A song of ice and fire',
    pages: '3000',
    read: false
  },
  {
    author: 'Andrzej Sapkowski',
    title: 'The witcher, the last wish',
    pages: '500',
    read: true
  },
  {
    author: 'J.R.R Tolkien',
    title: 'The Lord Of the Rings, The Return Of the King',
    pages: '1500',
    read: true
  }
];

// Book object constructor
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// Render pre-set books
booksList();

// Delete Books

function deleteBook(id) {
  myLibrary.splice(id, 1);
  booksList();
}

// Update book read status

function readBook(id) {
  myLibrary[id].read = !myLibrary[id].read;
  booksList();
}
