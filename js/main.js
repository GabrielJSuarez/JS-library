const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
});

function addBookToLibrary() {

  const author = addForm.querySelector('#bookAuthor').value;
  const title = addForm.querySelector('#bookTitle').value;
  const pages = addForm.querySelector('#bookPages').value;
  const bookRead = addForm.querySelector('#bookRead').checked;

  const bookContainer = document.querySelector('#book-display');

  bookContainer.innerHTML +=`
  <div class="card border-success mb-3 me-3 text-center" style="width: 18rem;">
    <div class="card-header text-primary">${author}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${pages}</p>
      <p class="card-text">${(bookRead) ? 'Book read' : 'Not read yet'}</p>
      <button type="button" class="btn btn-danger me-3" id="deleteBook">Delete Book</button>
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