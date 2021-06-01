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

const bookFactory = (author, title, pages, read) => { return { author, title, pages, read } };

// Render pre-set books
library.booksList();

// Modify Books

const bookModification = (() => {
  // Delete Books
  const deleteBook = (id) => {
    myLibrary.splice(id, 1);
    library.booksList();
  };

  // Update book read status
  const readBook = (id) => {
    myLibrary[id].read = !myLibrary[id].read;
    library.booksList();
  };

  return {
    deleteBook, readBook
  }
})();
