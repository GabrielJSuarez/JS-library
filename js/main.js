let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
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

  const bookContainer = document.querySelector('#book-display');

  let book = myLibrary[myLibrary.length - 1];

  bookContainer.innerHTML +=`
  <div class="card border-success mb-3 me-3 text-center" style="width: 18rem;">
    <div class="card-header text-primary">${book.author}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.pages}</p>
      <p class="card-text">${(book.read) ? 'Book read' : 'Not read yet'}</p>
      <button type="button" class="btn btn-danger me-3" id="deleteBook">Delete Book</button>
      <button type="button" class="btn btn-info me-3" id="readBook">Read Book</button>
    </div>
  </div>`

  document.querySelector('#add-book').reset();
}

// Delete Books

const books = document.querySelector('#book-display');

books.addEventListener('click', function (e) {
    if (e.target.className.indexOf('btn-danger') != -1) {
        const card = e.target.parentElement.parentElement;
        books.removeChild(card);
    }
});
