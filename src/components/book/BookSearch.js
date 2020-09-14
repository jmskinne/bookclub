import React, {useContext} from "react"
import {BookApiContext} from "./bookAPIProvider"

export const BookApiSearch = (props) => {
    const {setSearch } = useContext(BookApiContext)

    return (
        <>
            Book Search:
            <input type="text" className="bookAPI__search"
            onSubmit={
                (keyEvent) => setSearch(keyEvent.target.value)
            }
            placeholder="Search for a Book" />
        </>    
    )
}