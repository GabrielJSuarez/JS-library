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

  book = myLibrary[myLibrary.length - 1];

  const bookContainer = document.querySelector('#book-display');

  bookContainer.innerHTML +=`

  <div class="card border-success mb-3 me-3 text-center" style="width: 18rem;">
    <div class="card-header text-primary">${book.author}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.pages}</p>
      <p class="card-text">${(book.checkIfRead) ? 'Book read' : 'Not read yet'}</p>
    </div>
  </div>`

  console.log(myLibrary);
}

function resetForm() {
  document.querySelector('#add-book').reset();
}