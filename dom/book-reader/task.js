let books = document.querySelector(".book");
let arrFont = Array.from(document.querySelectorAll(".font-size"));

arrFont.forEach(size => {
  size.addEventListener('click', (event) => {
    event.preventDefault();
    arrFont.forEach(size => {
      size.classList.remove('font-size_active');
    });
    size.classList.add('font-size_active');
    if(size.classList.contains('font-size_small')) {
      books.classList.add('book_fs-small');
      books.classList.remove('book_fs-big');
    } else if(size.classList.contains('font-size_big')) {
      books.classList.add('book_fs-big');
      books.classList.remove('book_fs-small');
    } else {
      books.classList.remove('book_fs-small');
      books.classList.remove('book_fs-big');
    }
  });
});


