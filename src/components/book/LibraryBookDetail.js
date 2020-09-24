import React, {useContext, useEffect, useState} from "react"

import {BookContext} from "./BookProvider"

import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"
//import {LibraryBook} from "./LibraryBook"

export const LibraryBookDetail = (props) => {
    const {books, getBooks, deleteFromUserLibrary} = useContext(BookContext)
    const {userBooks, getUserBooks} = useContext(BookContext)
    const {clubs, getClubs} = useContext(BookClubJoinContext) || {}
    const {CreateABookClub} = useContext(BookClubJoinContext) || {}

    const [userBookDetail, setUserBookDetail] = useState({})
    const [bookDetail, setBookDetail] = useState({})

    useEffect(() => {
        getUserBooks()
        getBooks()
        getClubs()
    }, [])

    useEffect(() => {
        const userBookDetail = userBooks.find(ub => ub.id === parseInt(props.match.params.userbookId)) || {}
        setUserBookDetail(userBookDetail)
        
    }, [userBooks])

    useEffect(() => {
        const bookDetail = books.find(book => book.id === userBookDetail.bookId) || {}
            
        
        setBookDetail(bookDetail)
        
    }, [books])

    
    
    return (
        
            <section className="libraryBook">
                <img src={bookDetail.cover} />
                <h3 className="libraryBook_title">{bookDetail.title}</h3>
                <div className="library__author">{bookDetail.author}</div>
                <div className="library__pages">{bookDetail.pages}</div>
                <button type="submit" id={userBookDetail.id}
                    onClick={e => {
                        
                        e.preventDefault()
                        
                        const bookId = bookDetail.id
                        const name = bookDetail.title
                        const cover = bookDetail.cover
                        const clubcheck = clubs.find(c => c.bookId === bookId)
                        if(clubcheck) {
                            props.history.push("/clubs")
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
                <button type="submit" id={userBookDetail.id}
                    onClick={e => {
                        const id = parseInt(e.target.id)
                        
                    deleteFromUserLibrary(id)  
                }}
                className="deleteLibraryBook">
                    Delete from Library
                </button>
            </section>
        
)             
}
                                    
                                    
                                    
                                    
                        
                            
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                        
        


                            
                            
                            
                            
                            
                        
                
