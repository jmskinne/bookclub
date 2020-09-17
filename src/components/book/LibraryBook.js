// import React, { useContext } from "react"
// import {BookClubJoinContext} from "../bookClubJoin/BookClubJoinProvider"

// //moving this to library list

// export const LibraryBook = ({libraryBook}) => {
    
    
    
//     return (
//         <section className="libraryBook">
//             <img src={libraryBook.cover} />
//             <h4 className="library__title">{libraryBook.title}</h4>
//             <div className="library__author">{libraryBook.author}</div>
//             <div className="library__pages">{libraryBook.pages}</div>
//             <button id={libraryBook.id} 
//                 onClick={e => {
//                     debugger
//                     e.preventDefault()
//                     const bookId = libraryBook.id
//                     const name = libraryBook.title
//                     JoinABookClub ({
//                         bookId,
//                         name
//                     })
                    
//             }}
//             className="joinBookClubBtn">
//                 Join a Book club
//             </button>
            

//         </section>
//     )
// }

//Button that checks to see if this bookID already has a bookclub association with it, if it does not 
//See Ternary from kennels
//then a createBook club button ? join bookClub