import React, {useContext, useEffect} from "react"

import {BookContext} from "./BookProvider"
//import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"
//import {LibraryBook} from "./LibraryBook"

export const LibraryList = (props) => {
    const {books, getBooks, deleteFromUserLibrary, getUserBooks, userBooks} = useContext(BookContext)
    //const {JoinABookClub} = useContext(BookClubJoinContext) || {}

    //const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        getBooks()
    }, [userBooks])

    useEffect(() => {
        getUserBooks()
    },[])

    return (
        <article className="libraryBooks">
            {
                userBooks.map(libraryBook => { 
                    const matched = books.find(b => b.booktag === libraryBook.bookId) 
                    return <section className="libraryBook" key={libraryBook.id}>
                        <img src={matched.cover} />
                        <h4 className="library__title">{matched.title}</h4>
                        <div className="library__author">{matched.author}</div>
                        <div className="library__pages">{matched.pages}</div>
                        <button type="submit"
                            onClick={e => {
                                
                                e.preventDefault()
                                // const bookId = libraryBook.id
                                // const name = libraryBook.title
                                // //JoinABookClub ({
                                //     bookId,
                                //     name
                                // })                                
                        }}
                        className="joinBookClubBtn">
                        Join a Book club
                        </button>
                        <button type="submit" id={libraryBook.id}
                            onClick={e => {
                                const id = parseInt(e.target.id)
                                
                            deleteFromUserLibrary(id)  
                                
                                
                                
                                
                        }}
                        className="deleteLibraryBook">
                            Delete From Library
                        </button>
                    </section>
            

                })
                    
            
            }
        </article>
    )

    
}