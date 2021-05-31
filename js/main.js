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

  const container = document.querySelector('#book-display');
  myLibrary[myLibrary.length - 1] =
    container.innerHTML += `
    <div class="d-flex justify-content-around">
      <div class="card text-white bg-dark mb-3" style="width: 18rem;">
        <div class="card-header">${book.author}</div>
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.pages}</p>
        </div>
      </div>
    </div>`
  );
  console.log(myLibrary);
}

function resetForm() {
  document.querySelector('#add-book').reset();
}


