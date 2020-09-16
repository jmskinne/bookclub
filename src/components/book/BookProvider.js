import React, {useState} from "react"

export const BookContext = React.createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])
    

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

    const getUserBooks = () => {
        return fetch("http://localhost:8088/userBooks")
            .then(r=>r.json())
            .then(setUserBooks)
    }

    const saveBook = (savedBook) => {
        return fetch("http://localhost:8088/books", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(savedBook)
        })
        .then(setBooks)
    }

    const deleteFromUserLibrary = (id) => {
        return fetch(`http://localhost:8088/userBooks/${id}`, {
            method : "DELETE"
        })
        .then(getUserBooks)
        
    }  

    const getBookById = (id) => {
        return fetch(`http://localhost:8088/books/${id}?_expand=userBooks`)
            .then(r => r.json())
    }

    return (
        <BookContext.Provider value={{
            books, getBooks, addToUserLibrary, saveBook, userBooks, getUserBooks, deleteFromUserLibrary,getBookById
        }}>
            {props.children}
        </BookContext.Provider>
    )
}