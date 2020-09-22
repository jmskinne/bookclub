import React, {useContext, useEffect} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {Link} from "react-router-dom"
//import {BookClubJoin} from "./BookClubJoin"

export const BookClubJoinList = (props) => {
    const {clubs, getClubs, JoinClub} = useContext(BookClubJoinContext)


    useEffect(() => {
        getClubs()
    }, [])

    return (
        //<div className="bookclubs">
            <article className="clublist">
            {
                clubs.map(club => {
                    return <section className="bookclubs" key={club.id}>
                            <h3>{club.name}</h3>
                            <img src={club.cover} />
                        <button type="submit" id={club.id}
                        
                        onClick={e => {
                            e.preventDefault()
                            const bookclubId = club.id
                            const userId = parseInt(localStorage.getItem("bookclub_user"))
                            JoinClub ({
                                bookclubId,
                                userId
                            }).then(props.history.push(`/clubs/${club.id}`))
                        }}>
                        Join Club
                        </button>
                    </section>
                        
                    
                   
                })
            }
            </article>
       
    )
}


//then(props.history.push(`/clubs/join/${club.id}`))