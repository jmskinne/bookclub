import React, {useContext, useEffect, useState, useRef} from "react"

import {BookContext} from "./BookProvider"

import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"
//import {LibraryBook} from "./LibraryBook"
import "../book/BookDetailStyle.css"
import {Timer} from "../bookTimer/BookTimer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const LibraryBookDetail = (props) => {
    const {books, getBooks, deleteFromUserLibrary, addPagesToLibraryBook} = useContext(BookContext) || {}
    const {userBooks, getUserBooks} = useContext(BookContext)
    const {clubs, getClubs} = useContext(BookClubJoinContext) || {}
    const {CreateABookClub} = useContext(BookClubJoinContext) || {}

    const [userBookDetail, setUserBookDetail] = useState({})
    const [bookDetail, setBookDetail] = useState({})

    const [toPageUpdate, SetPageUpdate] = useState({})

    const currentLibraryBook = parseInt(props.match.params.userbookId)
    
    

    const handlePageChange = (e) => {
        const newPageUpdate = Object.assign({}, toPageUpdate)
        newPageUpdate[e.target.name] = parseInt(e.target.value) 
        SetPageUpdate(newPageUpdate)
        
        
    }

    const getBookDetailInEdit = () => {
            
                const userbookId = parseInt(props.match.params.userbookId)
                const selectedUserBook = userBooks.find(ub => ub.id === userbookId) || {}
                SetPageUpdate(selectedUserBook)
                
        
    }

    useEffect(() => {
        getBookDetailInEdit()
    }, [userBooks])

    
    
    
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
            
        
        

    

   

    
    
    const updatedNumberOfPagesRead = () => {
        const bookId = toPageUpdate.bookId
        if(bookId === "") {
            window.alert("TEST")
        } else {
            if(currentLibraryBook) {
                addPagesToLibraryBook({
                minutesRead : toPageUpdate.minutesRead,
                pagesRead : parseInt(toPageUpdate.pagesRead),
                id : toPageUpdate.id,
                favorite: toPageUpdate.favorite,
                userId : toPageUpdate.userId,
                bookId : bookId
                    })
                    .then(() => props.history.push(`/library/${currentLibraryBook}`))
            }  
        }       
    }


    
    return (
            <>
            
            <section className="libraryBookDetail">
                <h5 className="libraryBookDetail_title">{bookDetail.title}</h5>
                <img className="libraryBookDetail_cover" src={bookDetail.cover} />
                <div className="library__author">Author: {bookDetail.author}</div>
                <div className="library_pagesRead">Pages Read: {userBookDetail.pagesRead} / Pages In Book {bookDetail.pages}</div>
                <div className="library__minutesread">Minutes Read : {userBookDetail.minutesRead}</div>
                <form className="libraryBook_pageRecord">
                    <fieldset>
                        <div className="pageForm-group">
                            <label htmlFor="pagesRead">Pages Read: </label>
                            <input type="text" id="pageRecord" name="pagesRead" required className="pageForm-control"
                                defaultValue={userBookDetail.pagesRead}
                                onChange={handlePageChange} />
                        </div>
                    </fieldset>
                    <button type="submit"
                     onClick={rec => {
                        rec.preventDefault()
                        
                        updatedNumberOfPagesRead()
                        
                            
                     }}
                     className="pageSubmitBtn">
                         Update Pages Read
                     </button>
                </form>
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
                        
                    deleteFromUserLibrary(id).then(props.history.push("/library"))  
                }}
                className="deleteLibraryBook">
                    Delete from Library
                </button>
                <div>
                <Timer {...props}/>
                </div>
           </section>
           <div className="library__backBtn">
           <FontAwesomeIcon type="submit" className="backBtn" icon={faArrowAltCircleLeft} size="2x"
                onClick={e => {
                    
                    e.preventDefault()
                    props.history.push("/library")
                }}
            >Back
            </FontAwesomeIcon>
            </div>
   </>     
)             
}
                                    
                                    
                                    
                                    
                        
                            
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                        
        


                            
                            
                            
                            
                            
                        
                
