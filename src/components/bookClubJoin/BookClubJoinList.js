import React, {useContext, useEffect, useState} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
//import {Link} from "react-router-dom"
import { UserClubContext } from "../UserClub/UserClubProvider"
//import {BookClubJoin} from "./BookClubJoin"
//import {UserContext} from "../Users/UserProvider"

import "./BookClubJoin.css"

export const BookClubJoinList = (props) => {
    const {clubs, getClubs, JoinClub} = useContext(BookClubJoinContext)
    const {userclubs, getUserClubs} = useContext(UserClubContext)
    
    const [userclub, setUserClub] = useState([])


    useEffect(() => {
        getClubs()
        getUserClubs()
        
    }, [])

    useEffect(() =>{
        const currentUser = parseInt(localStorage.getItem("bookclub_user"))
        const userclub = clubs.map(c => {
            return userclubs.filter(uc => uc.bookclubId === c.id && uc.userId === currentUser) || {}
        })
        
        
        setUserClub(userclub)
    }, [userclubs])

    

    // const clubJoinCheck = () => {
    //     let joinedclub = false
    //     userclub.forEach(value => {
    //         const testTest = userclub.filter(v => value === v)
    //         if(testTest.length > 1) {
    //             joinedclub = true
    //         }
    //     })
    //     if(joinedclub === false) {
    //         const bookclubId = club.id
    //         const userId = parseInt(localStorage.getItem("bookclub_user"))
    //         JoinClub ({
    //             bookclubId,
    //             userId
    //         }).then(props.history.push(`/clubs/${club.id}`))
    //     } else {
    //         props.history.push(`/clubs/${club.id}`)
    //     }


    // }

    return (
            //<div className="bookclubs">
            <>
            <div className="club-Container">
            <h5 className="sectionTitle">Book Clubs</h5>
                <article className="clublist">
                {
                    clubs.map(club => {
                        return <section className="bookclubs" key={club.id}>
                                <h6>{club.name}</h6>
                                <img src={club.cover} />
                                
                            <button type="submit" id={club.id} className="joinClubBtn"
                            
                            onClick={e => {
                                e.preventDefault()
                                
                                let joinedclub = false
                                userclub.forEach(value => {
                                    const testTest = userclub.filter(v => value === v)
                                    if(testTest.length > 1) {
                                        joinedclub = true
                                    }
                                })
                                if(joinedclub === false) {
                                    const bookclubId = club.id
                                    const userId = parseInt(localStorage.getItem("bookclub_user"))
                                    JoinClub ({
                                        bookclubId,
                                        userId
                                    }).then(props.history.push(`/clubs/${club.id}`))
                                } else if (joinedclub === true) {
                                    props.history.push(`/clubs/${club.id}`)
                                }
                                
                            }}>
                            Join Club
                            </button>
                        </section>
                            
                        
                       
                    })
                }
                </article>
                </div>
            </>
           
        )
}

// (uc => uc.userId === currentUser && uc.bookclubId) || {}

//then(props.history.push(`/clubs/join/${club.id}`))

//This current works returning all clubs
// return (
//     //<div className="bookclubs">
//         <article className="clublist">
//         {
//             clubs.map(club => {
//                 return <section className="bookclubs" key={club.id}>
//                         <h3>{club.name}</h3>
//                         <img src={club.cover} />
//                     <button type="submit" id={club.id}
                    
//                     onClick={e => {
//                         e.preventDefault()
//                         const bookclubId = club.id
//                         const userId = parseInt(localStorage.getItem("bookclub_user"))
//                         JoinClub ({
//                             bookclubId,
//                             userId
//                         }).then(props.history.push(`/clubs/${club.id}`))
//                     }}>
//                     Join Club
//                     </button>
//                 </section>
                    
                
               
//             })
//         }
//         </article>
   
// )


// return (
//     //<div className="bookclubs">
//         <article className="clublist">
//         {
//             userclubs.map(uc => {
//                 if(uc.userId === parseInt(localStorage.getItem("bookclub_user"))) {
//                     const matched = clubs.find(club => club.id === uc.bookclubId) || {}
//                         return <section className="bookclubs" key={matched.id}>
//                         <h3>{matched.name}</h3>
//                         <img src={matched.cover} />
//                         <button type="submit" id={matched.id}
                    
//                         onClick={e => {
//                             e.preventDefault()
//                             const bookclubId = matched.id
//                             const userId = parseInt(localStorage.getItem("bookclub_user"))
//                             JoinClub ({
//                                 bookclubId,
//                                 userId
//                             }).then(props.history.push(`/clubs/${matched.id}`))
//                         }}>
//                         Join Club
//                         </button>
//                     </section>
                    
                
               
//             } else {
//                 return (
//                     <section className="clublist">

//                     </section>
//                 )
//             }}
//             )
//         }
//         </article>
   
// )