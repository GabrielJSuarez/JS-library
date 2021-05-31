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

function booksList() {
  document.querySelector('#book-display').innerHTML = '';
  const b = document.querySelector('#book-display');

  for (let i = 0; i < myLibrary.length; i += 1) {
    b.innerHTML += `
    <div class="card border-success m-3 text-center" style="width: auto;">
      <div class="card-header text-primary">${myLibrary[i].author}</div>
      <div class="card-body text-success">
        <h5 class="card-title">${myLibrary[i].title}</h5>
        <p class="card-text">${myLibrary[i].pages}</p>
        <p class="card-text">Did you read it?: <strong class="text-capitalize">${(myLibrary[i].read)}</strong></p>
        <div class="d-flex">
        <button type="button" class="btn btn-danger mx-3" onClick="deleteBook(${i})">Delete Book</button>
        <button type="button" class="btn btn-info mx-3" onClick="readBook(${i})">Change Read</button>
        </div>
      </div>
    </div>`

    document.querySelector('#add-book').reset();
  }
}

function addBookToLibrary() {

  const author = addForm.querySelector('#bookAuthor').value;
  const title = addForm.querySelector('#bookTitle').value;
  const pages = addForm.querySelector('#bookPages').value;
  const bookRead = addForm.querySelector('#bookRead').checked;

  const newBook = new Book(author, title, pages, bookRead);

  myLibrary.push(newBook);
  booksList();
}

// Delete Books

function deleteBook(id) {
  myLibrary.splice(id, 1);
  booksList();
}

function readBook(id) {
  myLibrary[id].read = !myLibrary[id].read;
  booksList();
}
