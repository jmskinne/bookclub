import React from "react"


export const LibraryBook = ({libraryBook}) => (
    <section className="libraryBook">
        <img src={libraryBook.cover} />
        <h4 className="library__title">{libraryBook.title}</h4>
        <div className="library__author">{libraryBook.author}</div>
        <div className="library__pages">{libraryBook.pages}</div>


    </section>
)