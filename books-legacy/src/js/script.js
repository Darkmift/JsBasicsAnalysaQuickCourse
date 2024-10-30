import { books } from '../data/books.js';

const displayBookTitleEl = document.getElementById('book-name');
const searchBookNameInputEl = document.getElementById('search-bar');
const searchIconEl = document.getElementById('search');
const bookListEl = document.querySelector('[data-book-list]');

// initial display of books
document.addEventListener('DOMContentLoaded', () => {
  displayBooks(books);
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
