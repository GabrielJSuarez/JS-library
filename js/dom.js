// DOM variables

// Get the form for new books
const addForm = document.forms['add-book'];

// Prevent page from reloading when submitting a new book

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

// DOM Modification

const library = (() => {
  // Create new book objects from UI and adding it to the Library Array
  const addBookToLibrary = () => {

    const author = addForm.querySelector('#bookAuthor').value;
    const title = addForm.querySelector('#bookTitle').value;
    const pages = addForm.querySelector('#bookPages').value;
    const bookRead = addForm.querySelector('#bookRead').checked;

    const newBook = new Book(author, title, pages, bookRead);

    const errors = document.querySelector('#error');

    errors.innerHTML = '';
    if (author === '') {
      errors.innerHTML += "Author can't be blank";
      return;
    }
    if (title === '') {
      errors.innerHTML += "Title can't be blank";
      return;
    }
    if (pages === '') {
      errors.innerHTML += "Number of Pages can't be blank";
      return;
    }
    myLibrary.push(newBook);
    booksList();
  };

  // Add the book arrays to the UI
  const booksList = () => {
    const bookDisplay = document.querySelector('#book-display');
    bookDisplay.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i += 1) {
      bookDisplay.innerHTML += `
      <div class="card border-${((myLibrary[i].read) ? 'success' : 'danger')} m-3 text-center" style="width: 23rem;">
        <div class="card-header text-${((myLibrary[i].read) ? 'success' : 'danger')}">${myLibrary[i].author}</div>
        <div class="card-body text-${((myLibrary[i].read) ? 'success' : 'danger')}">
          <h3 class="card-title">${myLibrary[i].title}</h3>
          <p class="card-text">${myLibrary[i].pages}</p>
          <p class="card-text">Did you read it?: <strong class="text-capitalize">${(myLibrary[i].read) ? 'Yes!' : 'No...'}</strong></p>
          <div class="d-flex">
          <button type="button" class="btn btn-danger mx-3" onClick="Book.deleteBook(${i})">Delete Book</button>
          <button type="button" class="btn btn-info mx-3 text-light" onClick="Book.readBook(${i})">Change Read</button>
          </div>
        </div>
      </div>`
      document.querySelector('#add-book').reset();
    }
  };

  return {
    addBookToLibrary, booksList
  }
})();


