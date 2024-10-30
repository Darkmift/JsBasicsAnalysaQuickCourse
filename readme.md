# Book API

This project is an Express application for managing a collection of books.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the book-api directory שמג Install the dependencies:**
   ```sh
    npm install
   ```
3. **Running the Application**
  To start the Express server, run:
   ```sh
    npm start
   ```

The server will start on the port specified in the environment variables or default to port 3000.

## Project Structure
* data/: Contains the data files.
* books.js: Sample data for books.
* index.js: Entry point of the Express application.
* package.json: Contains the project metadata and dependencies.

## API Endpoints
- GET /books: Retrieve a list of all books.
- POST /books: Add a new book.
- GET /books/:id: Retrieve a specific book by ID.
- PUT /books/:id: Update a specific book by ID.
- DELETE /books/:id: Delete a specific book by ID.