
import React, {useState } from "react"

import key from "../../Settings.js"


export const BookApiContext = React.createContext()

export const BookApiProvider = (props) => {
    const [apiBooks, setApiBooks] = useState([])
    const [bookById, setBookById] = useState([])
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
                            pages : b.volumeInfo.pageCount,
                            booktag : b.id,
                            id : b.id
                            
                        }
                    }) 
                setApiBooks(newBooks)
                }
            ).catch(error => {
                
            })
    }

    const getApiBookById = (bookId) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}&key=${key.bookKey}`)
        .then(r => r.json())
        .then(
            (data) => {
                const userBookById = data.items.map(b => {
                    return {
                        title : b.volumeInfo.title,
                        author : b.volumeInfo.authors,
                        isbn : b.volumeInfo.industryIdentifiers,
                        cover : b.volumeInfo.imageLinks.thumbnail,
                        pages : b.volumeInfo.pageCount,
                        booktag : b.id,
                       // id : b.id
                        
                    }
                })
            setBookById(userBookById)
    })}


    

    

    return (
        <BookApiContext.Provider value={{
            apiBooks, getApiBooks, searchTerms, setTerms, bookById, getApiBookById
        }}>
            {props.children}
        </BookApiContext.Provider>
    )
    
}


