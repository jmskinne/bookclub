import React, {useContext, useEffect} from "react"

import {BookApiContext} from "./bookAPIProvider"
//import {BookContext} from "./BookProvider"
import {Book} from "./Book"
//import "./Books.css"

export const BookList = () => {
    const {apiBooks, getApiBooks} = useContext(BookApiContext)

    //const {books, getBooks} = useContext(BookContext)
    useEffect(() => {
        //getBooks()
        getApiBooks()
        
    }, [])

    

    
        return (
            <div className="books">
                {
                    apiBooks.map(b => <Book key={b.id} book = {b} />)
                }
            </div>
        )
            
        
    
}