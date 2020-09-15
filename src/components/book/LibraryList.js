import React, {useContext, useEffect} from "react"

import {BookContext} from "./BookProvider"
import {LibraryBook} from "./LibraryBook"

export const LibraryList = () => {
    const {books, getBooks} = useContext(BookContext)

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div className="libraryBooks">
            {
                books.map(b => <LibraryBook key={b.id} libraryBook={b} />)
            }
        </div>
    )

}