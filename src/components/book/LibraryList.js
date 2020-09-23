import React, {useContext, useEffect, useState} from "react"

import {BookContext} from "./BookProvider"

import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"
//import {LibraryBook} from "./LibraryBook"

export const LibraryList = (props) => {
    const {books, getBooks, deleteFromUserLibrary, getUserBooks, userBooks} = useContext(BookContext)
    const {clubs, getClubs} = useContext(BookClubJoinContext) || {}
    const {CreateABookClub} = useContext(BookClubJoinContext) || {}

    //const [clubcheck, setCheck] = useState("")

    useEffect(() => {
        getBooks()
        getUserBooks()
        getClubs()
    }, [])

    
    // useEffect(() => {
    //     const clubcheck = clubs.find(c => c.bookId === ")
    //     setCheck(clubcheck)
    //     console.log(clubcheck)
    // },[clubs])
    
    
    // const clubCheck = () => {
    //     const checked = clubs.map(c => {
    //         return books.find(book => book.id === c.bookId)
    //     })

    //     if(checked !== "") {
    //         const bookId = matched.id
    //         const name = matched.title
    //         const cover = matched.cover
    //         CreateABookClub ({
    //                 bookId,
    //                 name,
    //                 cover
    //             }).then(props.history.push("/clubs"))    

    //         } 
        

        

    // }
    
    return (
        <article className="libraryBooks">
            {
                userBooks.map(libraryBook => { 
                    if(libraryBook.userId === parseInt(localStorage.getItem("bookclub_user"))) {
                        const matched = books.find(b => b.booktag === libraryBook.bookId) ||  {}
                        return <section className="libraryBook" key={libraryBook.id}>
                            <h4 className="library__title">{matched.title}</h4>
                            <img src={matched.cover} alt="No Cover"/>
                            <div className="library__author">Author: {matched.author}</div>
                            <div className="library__pages">Pages: {matched.pages}</div>
                            <button type="submit" id={libraryBook.id}
                                onClick={e => {
                                    
                                    e.preventDefault()
                                    
                                    const bookId = matched.id
                                    const name = matched.title
                                    const cover = matched.cover
                                    const clubcheck = clubs.find(c => c.bookId === bookId)
                                    if(clubcheck) {
                                       window.alert("Club Exists")
                                   } else {
                                    
                                    CreateABookClub ({
                                        bookId,
                                        name,
                                        cover
                                    }).then(props.history.push("/clubs"))                        
                            }}}
                            className="joinBookClubBtn">
                            Create a Book Club
                            </button>
                            <button type="submit" id={libraryBook.id}
                                onClick={e => {
                                    const id = parseInt(e.target.id)
                                    
                                deleteFromUserLibrary(id)  
                                    
                                    
                                    
                                    
                            }}
                            className="deleteLibraryBook">
                                Delete from Library
                            </button>
                        </section>
                

                    } else {
                        return (
                            <section className="libraryBook">
                            
                            </section>

                        )
                    }
                })
                    
            
            }
        </article>
    )
        
        
    
    
    

    
}