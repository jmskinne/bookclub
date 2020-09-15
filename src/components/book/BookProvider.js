import React, {useState} from "react"

export const BookContext = React.createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([])

    const getBooks = () => {
        return fetch("http://localhost:8088/books")
            .then(r => r.json())
            .then(setBooks)
    }

    const addToUserLibrary = (userBook) => {
        return fetch("http://localhost:8088/userBooks", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userBook)
        })
        
    }

    const saveBook = (savedBook) => {
        return fetch("http://localhost:8088/books", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(savedBook)
        })
    }

    return (
        <BookContext.Provider value={{
            books, getBooks, addToUserLibrary, saveBook
        }}>
            {props.children}
        </BookContext.Provider>
    )
}