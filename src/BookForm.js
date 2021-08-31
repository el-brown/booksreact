import React, { useState } from "react";
import "./App.css";

const BookForm = ({addBook, updateBook, book}) => {
  const [title, setTitle] = useState(
    book ? book.title : ''
    );
  const [author, setAuthor] = useState(
    book ? book.author : ''
    );
  const [description, setDescription] = useState
  (book ? book.description : ''
  );

  const handleSubmit = (attr) => {
    attr.preventDefault();
    
    if (book) {
      updateBook({
        isbn: book.isbn,
        title: title,
        author: author,
        description: description,
      });
     } else {
      addBook({
        isbn: Math.random(),
        title: title,
        author: author,
        description: description,
    });
    };
  };

  return (
    <div>
      <h2 className="tight">{book ? "Edit" : "New"} Book</h2>
      <form onSubmit={handleSubmit}>
        <p className="tight">Title</p>
        <input 
          value={title}
          onChange={(attr) =>{
          setTitle(attr.target.value);
        }}
        />
        <p className="tight">Author</p>
        <input 
          value={author}
          onChange = {(attr) => {
          setAuthor(attr.target.value);
        }}
        />
        <p className="tight">Description</p>
        <input 
        value={description}
        onChange = {(attr) => {
          setDescription(attr.target.value);
        }}
        />

        <p>
        <button className="App-link" type="submit">{book ? "Update" : "Add"}</button>
        </p>
      </form>
    </div>
    )
};



export default BookForm;