import axios from "axios";
import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (err) {
      alert("err occured getting book");
    }
  };

  const addBook = (book) => {
    let newBooks = [book, ...books];
    setBooks(newBooks);
  };

  const updateBook = (book) => {
    let newArray = books.map((b) => (b.isbn === book.isbn ? book : b));
    setBooks(newArray);
  }
  const deleteBook = (isbn) => {
    let newBooks = books.filter((b) => b.isbn !== isbn)
    setBooks(newBooks);
  }

  const renderBooks = () => {
    if (books.length === 0) {
      return <p>No books.</p>;
    }

    return books.map((book) => {
      return (
        <div style={styles.container} key={book.isbn}>
          <h1>{book.title}</h1>
          <h2> {book.author}</h2>
          <p>{book.description}</p>
          <button onClick={() => deleteBook(book.isbn)}>Delete</button>
          <BookForm updateBook={updateBook} book={book} />
        </div>
      );
    });
  };

  return (
    <div className="newbook">
      <h1>Here Dem Books</h1>
      <BookForm addBook={addBook}/>
      {renderBooks()}
    </div>
  );
};

const styles = {
  container: {
    // border: "1px solid",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "10px",
    margin: "40px",
  },
};



export default App;


// We're doing CRUD on this booklist so the count example doesn't work
// What I need is to show all the books. 
//1st - use isbn to grab data
//2nd - addBook function 
//3rd - deletebook function

