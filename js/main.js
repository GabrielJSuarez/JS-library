let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.checkIfRead = read;
}

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

function addBookToLibrary() {

  const author = addForm.querySelector('#bookAuthor').value;
  const title = addForm.querySelector('#bookTitle').value;
  const pages = addForm.querySelector('#bookPages').value;
  const bookRead = addForm.querySelector('#bookRead').checked;

  const newBook = new Book(author, title, pages, bookRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function resetForm() {
  document.querySelector('#add-book').reset();
}
