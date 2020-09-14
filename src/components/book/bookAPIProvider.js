import React, {useState } from "react"

import key from "../../Settings.js"

export const BookApiContext = React.createContext()

export const BookApiProvider = (props) => {
        const [apiBooks, setApiBooks] = useState([])
     
    
    const getApiBooks = () => {
        //return fetch(`https://www.googleapis.com/books/v1/volumes?q=deathly+inauthor:rowling&langRestrict=en&printType=books&key=${key.bookKey}`)
            .then(r => r.json())
            .then(
                (data) => {
                    const newBooks = data.items.map(b => {
                        return {
                            title : b.volumeInfo.title,
                            author : b.volumeInfo.authors[0],
                            isbn : b.volumeInfo.industryIdentifiers,
                            cover : b.volumeInfo.imageLinks.thumbnail,
                            pages : b.volumeInfo.pageCount
                        }
                    })
                setApiBooks(newBooks)
                })
            }

    

    return (
        <BookApiContext.Provider value={{
            apiBooks, getApiBooks
        }}>
            {props.children}
        </BookApiContext.Provider>
    )
    
}