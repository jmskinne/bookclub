import React from "react"

//import "./Books.css"

export const Book = ({book}) => (
    <section className="book">
        <h4 className="book__title">{book.title}</h4>
        <div className="book_author">{book.author}</div>
        <div className="book_pageCount">{book.pages}</div>
        <img src={book.cover} />
    </section>
)