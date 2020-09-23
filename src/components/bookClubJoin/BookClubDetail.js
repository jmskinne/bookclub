import React, {useState, useEffect, useContext, useRef} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {MessageContext} from "../message/MessageProvider"
import {Message} from "../message/Message"


export const BookClubDetail = (props) => {
    const {clubs, getClubs} = useContext(BookClubJoinContext)
    const {messages, getAllMessages, addMessage} = useContext(MessageContext)

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
                    return <Message key={m.id} m={m} />
                    
                })
                
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