import React, {useContext, useEffect, useState} from "react"
//import {Link} from "react-router-dom"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {BookContext} from "../book/BookProvider"
import { UserContext } from "../Users/UserProvider"
import {UserClubContext} from "../UserClub/UserClubProvider"

//import {BookClubJoin} from "./BookClubJoin"

export const BookClubJoinList = () => {
    const {clubs, getClubs, getClubsByBook} = useContext(BookClubJoinContext)
    const {userBooks, getUserBooks} = useContext(BookContext)
    const {books, getBooks} = useContext(BookContext)
    const {users, getUsers} = useContext(UserContext)
    const {userClubs, getUserClubs} = useContext(UserClubContext)

    const [filteredUserBooks, setFilteredUserBooks] = useState({})
    const [filteredUserClubs, setFilteredUserClubs] = useState({})
    const [filteredClubs, setFilteredClubs] = useState({})

    useEffect(() => {
        getClubs().then(getBooks).then(getUserBooks).then(getUserClubs).then(getUsers)
    },[])

    useEffect(() => {
        const filteredClubs = books.map(book => {
            return clubs.find(club => club.bookId === book.id)
        })
        setFilteredClubs(filteredClubs)
    }, [books, clubs])

    return (
                <div className="bookClubs">
                        {
                           
                        filteredClubs.map(club => {
                            return <article>
                                <div>{club.name}</div>
                            </article>
                        })
        
                           
                        }
                    </div>
    )




}




//     // useEffect(() => {
//     //     const filteredClubs = clubs.map(club => {
//     //         return books.find(book => book.id === club.bookId)})
//     //         setFilteredClubs(filteredClubs)
//     // }, [clubs])

//     // useEffect(() => {
//     //     const filteredUserClubs = userClubs.filter(uc => {
//     //         return clubs.find(filtClub => filtClub.id === uc.bookClubId)})
//     //     setFilteredUserClubs(filteredUserClubs)
//     // },[userClubs])

//     // useEffect(() => {
//     //     const filteredUserBooks = userBooks.map(ub => ub.userId === 1)
//     //     setFilteredUserBooks(filteredUserBooks)
//     // }, [userBooks])

//     useEffect(() => {
//         const current = localStorage.getItem("bookclub_user")
        
//         const filteredClubs = clubs.map(club => {
//             const filteredUserClubs = userClubs.filter(rel => rel.bookClubId === club.id) || {}
//                 const matched = filteredUserClubs.map(rel => {
//                     return users.find(user => parseInt(current) === rel.userId) || {}
//                 })
//         })
//         setFilteredClubs(filteredClubs)
//     },[clubs])
            
        
        
    
//     return (
//         <div className="bookClubs">
//                 {
                   
//                 filteredClubs.map(club => {
//                     return <article>
//                         <div></div>
//                     </article>
//                 })

                   
//                 }
//             </div>
                    

//             //             return <article key={`club--${club.id}`} className="card club">
//             //                 <section className="card-body">
//             //                     {club.name}
//             //                     {/* <Link className="card-link" 
//             //                     to={{
//             //                         pathname: `/clubs/${club.id}`,
//             //                         state: { test : club }
                                    

//             //                     }}>
//             //                     <h4 className="card-title">{club.name}</h4>
//             //                     </Link> */}
//             //                 </section>
//             //                 <section>
//             //                     <img src={.name} />
//             //                 </section>
//             //                 <button id={club.id}>
                                
                                
                            
//             //                     Go To Message Board
//             //                 </button>
//             //             </article>
                        
//             //         })
//             //     }
//             // </div>
        
//     )
// }

