import React, {useState, useEffect, useContext} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {MessageContext} from "../message/MessageProvider"
import {Message} from "../message/Message"


export const BookClubDetail = (props) => {
    const {clubs, getClubs} = useContext(BookClubJoinContext)
    const {messages, getAllMessages} = useContext(MessageContext)

    const [club, setClub] = useState({})
    const [messagesForClub, setMessagesForClub] = useState([])

    
    const currentClub = parseInt(props.match.params.bookclubId)
    useEffect(() => {
        getClubs()
        getAllMessages()
    }, [])

    useEffect(() => {
        const club = clubs.find(club => club.id === parseInt(props.match.params.bookclubId)) || {}
        setClub(club)
    }, [clubs])

    // useEffect(() => {
    //     const currentClub = parseInt(props.match.params.bookclubId)
    //     const messagesForClub = getMessageByBookClub(currentClub)
    //     setMessages(messagesForClub)
       
        
        
    // }, [])
    useEffect(() => {
        const messagesForClub = messages.filter(m => m.bookclubId === currentClub) || {}
        setMessagesForClub(messagesForClub)
    }, [messages])

    

    return (
        <div>
        <section>
            <div>
                {club.name}
            </div>
                <img src={club.cover} />
                
            </section>
        <article>
            <div>
            {
                messagesForClub.map(m => {
                    return <Message key={m.id} m={m} />
                    
                })
                
            }
                </div>

            </article>
        
        </div>
    )
                
                


}