// Get the form for new books

const addForm = document.forms['add-book'];

// Prevent page from reloading when submitting a new book

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
});
