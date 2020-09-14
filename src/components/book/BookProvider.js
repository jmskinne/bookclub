import React, {useState} from "react"

export const BookContext = React.createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([])

    const getBooks = () => {
        return fetch("http://localhost:8088/books")
            .then(r => r.json())
            .then(setBooks)
    }

    return (
        <BookContext.Provider value={{
            books, getBooks
        }}>
            {props.children}
        </BookContext.Provider>
    )
}