import React, {useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {BookContext} from "./BookProvider"

import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"
//import {LibraryBook} from "./LibraryBook"
import {Progress} from 'reactstrap'
//import { findByLabelText } from "@testing-library/react"

import "../book/BookStyle.css"


export const LibraryList = (props) => {
    const {books, getBooks, getUserBooks, userBooks, addPagesToLibraryBook} = useContext(BookContext) || {}
    const {clubs, getClubs} = useContext(BookClubJoinContext) || {}
    const {CreateABookClub} = useContext(BookClubJoinContext) || {}

    const [filterSelect, setSelectedFilter] = useState({})
    const [userbooks, setUserBooks] = useState([])

    useEffect(() => {
        getBooks()
        getUserBooks()
        getClubs()
    }, [])

    useEffect(() => {
        if(filterSelect === "0") {
            const filterU = userBooks.filter(ub => ub.userId === parseInt(localStorage.getItem("bookclub_user")))
            setUserBooks(filterU)
            
        } else if (filterSelect === "1") {
            const filterFavs = userBooks.filter(ub => ub.favorite === true && ub.userId === parseInt(localStorage.getItem("bookclub_user")))
            setUserBooks(filterFavs)
            
        } else if (filterSelect) {
            const initialRender = userBooks.filter(ub => ub.userId === parseInt(localStorage.getItem("bookclub_user")))
        setUserBooks(initialRender)
        }
        
    }, [userBooks, filterSelect])

    
    return (
        <>
        <div className="libraryList-container">
        <header className="logo">
            <img className="logomain" src={require('../icons/logo2.png')} alt="App Logo"/>
        </header>
            
                <div className="filter-container">
                    <select className="libraryFilters" 
                        onChange={e=> {
                            const filter = e.target.value
                            setSelectedFilter(filter)
                        }}>
                        <option value="0" id="filter__allBooks">All Books</option>
                        <option value="1"id ="filter__fav">Favorites</option>
                        
                    </select>
                    
                </div>
        
        <article className="libraryBooks">
            {
                userbooks.map(userbook => { 
                   
                        const matched = books.find(b => b.booktag === userbook.bookId) ||  {}
                        const progress = Math.round(parseInt(userbook.pagesRead) / parseInt(matched.pages) * 100)

                         
                          
                return <section className="libraryBook" key={userbook.id} >
                
                <p>{matched.title}</p> 
                <Link to={`/library/${userbook.id}`}>
                    <img src={matched.cover} alt="No Cover" className="libraryBook_cover"/>
                </Link>
                <div className="likebutton">
                <button type="submit" className="addFavoriteBtn" id={userbook.id}
                    onClick={ e => {
                        e.preventDefault()
                        const toFav = userBooks.find(ub => ub.id === userbook.id)
                        if(toFav.favorite === false) {
                            //like
                            addPagesToLibraryBook({
                                id : toFav.id,
                                pagesRead : toFav.pagesRead,
                                userId : toFav.userId,
                                bookId : toFav.bookId,
                                favorite : true,
                                minutesRead : 0
                            
                            })
                        } else {
                            //unlike
                            addPagesToLibraryBook({
                                id : toFav.id,
                                pagesRead : toFav.pagesRead,
                                userId : toFav.userId,
                                bookId : toFav.bookId,
                                favorite : false,
                                minutesRead : 0
                            
                            })

                        }
                    }}
                >
                    Favorite
                </button>
                </div>
                <div className="text-center">{progress}%</div> 
                    <Progress value={progress} />
                
            
            
            </section>
            
        } 
    )
        

}
</article>

</div>
</>
)
                                


                            
                            
                            
                

        
        
    
    
    

    
}


{/* <article className="libraryBooks">
            {
                userbooks.map(userbook => { 
                    if(userbook.userId === parseInt(localStorage.getItem("bookclub_user"))) {
                        const matched = books.find(b => b.booktag === userbook.bookId) ||  {}
                        return <section className="libraryBook" key={userbook.id}>
                            <h5 className="library__title">{matched.title}</h5> 
                            <Link to={`/library/${userbook.id}`}>
                                <img src={matched.cover} alt="No Cover"/>
                            </Link>
                        </section>
                    } else {
                        return (
                            <section className="libraryBook">
                            
                            </section>

                        )
                    }
                })
                    
            
            }
 */}

//currently working render of the library list view
// return (
//     <article className="libraryBooks">
//         {
//             userBooks.map(libraryBook => { 
//                 if(libraryBook.userId === parseInt(localStorage.getItem("bookclub_user"))) {
//                     const matched = books.find(b => b.booktag === libraryBook.bookId) ||  {}
//                     return <section className="libraryBook" key={libraryBook.id}>
//                         <h4 className="library__title">{matched.title}</h4> 
//                         <img src={matched.cover} alt="No Cover"/>

                        
                        
//                         <div className="library__author">Author: {matched.author}</div>
//                         <div className="library__pages">Pages: {matched.pages}</div>
//                         <button type="submit" id={libraryBook.id}
//                             onClick={e => {
                                
//                                 e.preventDefault()
                                
//                                 const bookId = matched.id
//                                 const name = matched.title
//                                 const cover = matched.cover
//                                 const clubcheck = clubs.find(c => c.bookId === bookId)
//                                 if(clubcheck) {
//                                    props.history.push("/clubs")
//                                } else {
                                
//                                 CreateABookClub ({
//                                     bookId,
//                                     name,
//                                     cover
//                                 }).then(props.history.push("/clubs"))                        
//                         }}}
//                         className="joinBookClubBtn">
//                         Create a Book Club
//                         </button>
//                         <button type="submit" id={libraryBook.id}
//                             onClick={e => {
//                                 const id = parseInt(e.target.id)
                                
//                             deleteFromUserLibrary(id)  
                                
                                
                                
                                
//                         }}
//                         className="deleteLibraryBook">
//                             Delete from Library
//                         </button>
//                     </section>
            

//                 } else {
//                     return (
//                         <section className="libraryBook">
                        
//                         </section>

//                     )
//                 }
//             })
                
        
//         }
//     </article>
// )