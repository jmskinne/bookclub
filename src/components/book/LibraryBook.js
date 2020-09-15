import React from "react"


export const LibraryBook = ({libraryBook}) => (
    <section className="libraryBook">
        <img src={libraryBook.cover} />
        <h4 className="library__title">{libraryBook.title}</h4>
        <div className="library__author">{libraryBook.author}</div>
        <div className="library__pages">{libraryBook.pages}</div>
        


    </section>
)

//Button that checks to see if this bookID already has a bookclub association with it, if it does not 
//See Ternary from kennels
//then a createBook club button ? join bookClub