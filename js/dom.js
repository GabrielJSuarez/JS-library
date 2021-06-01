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

// Add the book arrays to the UI

function booksList() {
  const bookDisplay = document.querySelector('#book-display');
  bookDisplay.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    bookDisplay.innerHTML += `
    <div class="card border-${(myLibrary[i].read) ? 'success' : 'danger'} m-3 text-center" style="width: 23rem;">
      <div class="card-header text-${(myLibrary[i].read) ? 'success' : 'danger'} fs-5">${myLibrary[i].title}</div>
      <div class="card-body text-${(myLibrary[i].read) ? 'success' : 'danger'}">
        <p class="card-text mb-0">Written by:</p>
        <h3 class="card-title">${myLibrary[i].author}</h3>
        <p class="card-text">${myLibrary[i].pages} pages</p>
        <p class="card-text">Did you read it?: <strong class="text-capitalize">${(myLibrary[i].read) ? 'Yes!' : 'No...'}</strong></p>
        <div class="d-flex">
        <button type="button" class="btn btn-warning mx-3" onClick="deleteBook(${i})">Delete Book</button>
        <button type="button" class="btn btn-info mx-3 text-light" onClick="readBook(${i})">Change Status</button>
        </div>
      </div>
    </div>`

    document.querySelector('#add-book').reset();
  }
}
