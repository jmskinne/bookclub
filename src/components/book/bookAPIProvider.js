import userEvent from "@testing-library/user-event"
import React, {useState, useEffect } from "react"

import key from "../../Settings.js"

export const BookApiContext = React.createContext()

export const BookApiProvider = (props) => {
    const [apiBooks, setApiBooks] = useState([])
    const [searchTerms, setTerms] = useState("")
    //const [userInput, setUserInput] = useState("")
    
    
    
    const getApiBooks = (searchTerms) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&langRestrict=en&printType=books&key=${key.bookKey}`)
            .then(r => r.json())
            .then(
                (data) => {
                    const newBooks = data.items.map(b => {
                        return {
                            title : b.volumeInfo.title,
                            author : b.volumeInfo.authors,
                            isbn : b.volumeInfo.industryIdentifiers,
                            cover : b.volumeInfo.imageLinks.thumbnail,
                            pages : b.volumeInfo.pageCount
                        }
                    })
                setApiBooks(newBooks)
                }
                
            
                    
                
            )
    }

    const addToLibrary = (newBook) => {
        
    }

    

    return (
        <BookApiContext.Provider value={{
            apiBooks, getApiBooks, searchTerms, setTerms
        }}>
            {props.children}
        </BookApiContext.Provider>
    )
    
}


// working hard coded link https://www.googleapis.com/books/v1/volumes?q=deathly+inauthor:rowling&langRestrict=en&printType=books&key=${key.bookKey}