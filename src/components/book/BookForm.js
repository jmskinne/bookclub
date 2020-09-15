// import React, { useContext, useRef, useEffect } from "react"

// import {BookApiContext} from "./bookAPIProvider"
// import {BookContext} from "./BookProvider"

// export const SaveBookToUserLibrary = (props) => {
//     const {apiBooks, getApiBooks} = useContext(BookApiContext)
//     const {addToUserLibrary} = useContext(BookContext)

//     useEffect(() => {
//         getApiBooks()
//     }, [])

//     const constructUserBook = () => {     
    
//         const userId = parseInt(localStorage.getItem("bookclub_user"))
//         const bookId = apiBooks.current.id
//         console.log(bookId)
//             if(bookId !== "") {
//                 addToUserLibrary(
//                     userId,
//                     bookId
//                 )
//             }
        
            
//     }
// }
