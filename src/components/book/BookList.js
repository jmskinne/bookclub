import React, {useContext, useEffect, useState} from "react"

import {BookApiContext} from "./bookAPIProvider"

import {Book} from "./Book"


export const BookList = () => {
    const {apiBooks, searchTerms, getApiBooks} = useContext(BookApiContext)

    const [filteredAPIBooks, setFiltered] = useState([])
    
    useEffect(() => {
        if(searchTerms !== "") {
            getApiBooks(searchTerms)
        }
        
    }, [searchTerms])

    useEffect(() => {
        if(searchTerms !== "") {
            const subset = apiBooks.filter(b => b.title.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(apiBooks) 
        }
    }, [searchTerms, apiBooks])
    

    
        return (
            <div className="books">
                {
                    filteredAPIBooks.map(b => {
                        return <Book key={b.id} book = {b} />})
                }
            </div>
        )
            
        
    
}