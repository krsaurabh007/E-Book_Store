import React, { useEffect, useState } from "react";
import "../component/bookCard.css";
import icon from "../assets/file.png";
import axios from "axios";

function BookCard() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books/getAllBooks");
        setBookData(response.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="card-container">
      {bookData?.map((book) => (
        <div key={book._id} className="book-card">
          <div className="image-container">
            <img src={ `http://localhost:3000${book.image}`|| icon} className="book-image" alt={book.title} />
          </div>
          <div className="content-container">
            <h3 className="book-name">{book.title}</h3>
            <p className="book-price">${book.price}</p>
            <p className="book-category">{book.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCard;
