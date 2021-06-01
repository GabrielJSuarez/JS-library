// Get the form for new books

const addForm = document.forms['add-book'];

// Prevent page from reloading when submitting a new book

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

// Create new book objects from UI and adding it to the Library Array

function addBookToLibrary() {
  const author = addForm.querySelector('#bookAuthor').value;
  const title = addForm.querySelector('#bookTitle').value;
  const pages = addForm.querySelector('#bookPages').value;
  const bookRead = addForm.querySelector('#bookRead').checked;

  const newBook = new Book(author, title, pages, bookRead);

  myLibrary.push(newBook);
  booksList();
}
