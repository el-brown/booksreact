import React, { useState } from "react";

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
      <h1>{book ? "Edit" : "New"} Book</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input 
          value={title}
          onChange={(attr) =>{
          setTitle(attr.target.value);
        }}
        />
        <p>Author</p>
        <input 
          value={author}
          onChange = {(attr) => {
          setAuthor(attr.target.value);
        }}
        />
        <p>Description</p>
        <input 
        value={description}
        onChange = {(attr) => {
          setDescription(attr.target.value);
        }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
    )
};



export default BookForm;