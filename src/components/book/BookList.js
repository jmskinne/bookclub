import React, {useContext, useEffect, useState} from "react"

import {BookApiContext} from "./bookAPIProvider"
import {BookContext} from "./BookProvider"

//import {Book} from "./Book"



export const BookList = (props) => {
    const {apiBooks, searchTerms, getApiBooks} = useContext(BookApiContext)
    const {addToUserLibrary, saveBook} = useContext(BookContext)

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
        <article className="books">
            {
                filteredAPIBooks.map(b => {
                    return <section className="book" >
                        <div><h6 className="book__title">{b.title}</h6></div>
                        <div className="book__author">{b.author}</div>
                        <img src={b.cover} />
                        <button type="submit" id={b.id}
                            onClick={ event => {
                                const userId = parseInt(localStorage.getItem("bookclub_user"))
                                const bookId = event.target.id
                                
                                addToUserLibrary ({
                                    
                                    userId,
                                    bookId
                                })

                                saveBook ({
                                    title : b.title,
                                    author: b.author,
                                    isbn : b.isbn,
                                    cover : b.cover,
                                    pages : b.pages,
                                    booktag : b.booktag,
                                    id : b.booktag

                                }).then(props.history.push("/library"))
                                
                                
                            
                            
                        }}
                        className="savetoLibraryBtn">
                            Add to Library
                        </button>
                    </section>
                })
            }
        </article>
    )
        
    
    
      
                   
    
}




