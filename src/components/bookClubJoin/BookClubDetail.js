import React, {useState, useEffect, useContext, useRef} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {MessageContext} from "../message/MessageProvider"
import {Message} from "../message/Message"
import {UserContext} from "../Users/UserProvider"
import { useParams } from "react-router-dom"

export const BookClubDetail = (props) => {
    const {clubs, getClubs} = useContext(BookClubJoinContext)
    const {messages, getAllMessages, addMessage} = useContext(MessageContext)
    const {users, getUsers} = useContext(UserContext)

    const [club, setClub] = useState({})
    const [messagesForClub, setMessagesForClub] = useState([])
    
    
    const currentClub = parseInt(props.match.params.bookclubId)
    
    useEffect(() => {
        getClubs()
        getAllMessages()
        getUsers()
    }, [])

    useEffect(() => {
        const club = clubs.find(club => club.id === parseInt(props.match.params.bookclubId)) || {}
        setClub(club)
    }, [clubs])

    
    useEffect(() => {
        const messagesForClub = messages.filter(m => m.bookclubId === currentClub) || {}
        setMessagesForClub(messagesForClub)
    }, [messages])

    useEffect(() => {

    })
    

    


    const sendMessage = useRef(null)

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
                        const t = users.find(user => user.id === m.userId) || {}
                        return <Message key={m.id} m={m} user={t} />
                
                })
                // messagesForClub.map(m => {
                //     const u = users.filter(u => u.id === m.userId)
                //         return <Message key={m.id} m={m} u={u}/>
                    
                }
                
            
                </div>

            </article>
            <form className="chatForm">
                <h2 className="club_title">{club.name} Message Board</h2>
                <fieldset>
                    <div className="chatForm-group">
                        <label htmlFor="chatBox">Message:</label>
                        <input type="text" id="chatBox" ref={sendMessage} required className="chatForm-control" placeholder="Send Message to the Group" />
                    
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={ e => {
                        e.preventDefault()
                        const userId = parseInt(localStorage.getItem("bookclub_user"))
                        addMessage({
                            userId,
                            bookclubId : currentClub,
                            messageContent : sendMessage.current.value,

                        })
                    }}
                    className="btn chatSubmit">
                        Send Message
                    </button>
            </form>
        </div>
    )
                
                


}