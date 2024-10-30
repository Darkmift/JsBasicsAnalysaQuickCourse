const books = [];

const displayBookTitleEl = document.getElementById('book-name');
const searchBookNameInputEl = document.getElementById('search-bar');
const searchIconEl = document.getElementById('search');
const bookListEl = document.querySelector('[data-book-list]');

// a fn that fetches the books from the server localhost:3000/books
// and sets the books array with the fetched books
function fetchBooks() {
  console.log('2. fetching books');
  // ASYNC CODE
  fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((data) => {
      //books array from server
      books.push(...data);
      displayBooks(books);
      console.log('3. books fetched', books);
    }).catch((error) => {
      console.error('Error:', error);
    }).finally(() => {
      console.log('fetchBooks() done');
    });
}

// initial display of books
document.addEventListener('DOMContentLoaded', () => {
  console.log('1.DOM is loaded');
  fetchBooks();
  console.log('4.', books);
});

/**
 * Displays a list of books.
 * Each book object should have the following structure:
 * {
 *   id: number,
 *   book_title: string,
 *   image: string
 * }
 * @param {Array} books - Array of book objects to display.
 */
function displayBooks(books) {
  bookListEl.innerHTML = '';

  books.forEach((book) => {
    const bookLiEl = document.createElement('li');
    bookLiEl.classList.add('book-item');
    bookLiEl.dataset.id = book.id;

    bookLiEl.innerHTML = /*html*/ `
                <div>
                    <h2>${book.book_title}</h2>
                    <img src="${book.image}" alt="${book.book_title}" />
                </div>`;

    // on book click show book title in displayBookTitleEl
    bookLiEl.addEventListener('click', () => {
      displayBookTitleEl.textContent = book.book_title;
    });

    bookListEl.appendChild(bookLiEl);
  });
}

/**
 * Filters books based on the search text.
 * @param {Array} books - Array of book objects to filter.
 * @param {string} searchText - Search text to filter books.
 * @returns {Array} - Filtered books.
 */
function filterBooks(books, searchText) {
  return books.filter((book) => {
    return book.book_title.toLowerCase().includes(searchText.toLowerCase());
  });
}

// on search icon click filter books
searchIconEl.addEventListener('click', () => {
  const filteredBooks = filterBooks(books, searchBookNameInputEl.value);
  displayBooks(filteredBooks);
});

// on input change of search bar filter books
// searchBookNameInputEl.addEventListener('input', (e) => {
//   const filteredBooks = filterBooks(books, e.target.value);
//   displayBooks(filteredBooks);
// });

// on input change of search bar filter books
searchBookNameInputEl.addEventListener('input', (e) =>
  displayBooks(filterBooks(books, e.target.value))
);
