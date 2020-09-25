import React, {useState, useEffect, useContext, useRef} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {MessageContext} from "../message/MessageProvider"
//import {Message} from "../message/Message"
import {UserContext} from "../Users/UserProvider"



export const BookClubDetail = (props) => {
    const {clubs, getClubs} = useContext(BookClubJoinContext)
    const {messages, getAllMessages, addMessage, deleteMessage} = useContext(MessageContext)
    const {users, getUsers} = useContext(UserContext)

    const [club, setClub] = useState({})
    const [messagesForClub, setMessagesForClub] = useState([])

    
    
    
    const currentClub = parseInt(props.match.params.bookclubId)
    const currentUser = parseInt(localStorage.getItem("bookclub_user"))
    
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

    
    
    // const messageDeleteforCurrentUser = () => {
    //     const testTest = messagesForClub.filter(m => m.userId === currentUser)
    //     console.log(testTest)
    //     return (
    //         <div>
    //         {
    //             testTest.map(mes => {
    //                 if(mes.userId === currentUser) {
                        
    //                     return <button type="submit" id={mes.id}
    //                         onClick={e => {
    //                         {   
    //                             const id = parseInt(e.target.id)
    //                             deleteMessage(id)
                            
    //                     }}}
    //                         >Delete
    //                         </button>
    //                 }
    //             })
                
    //         }
    //         </div>
    //     )
            
        
        
            
    // }
    


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
                        if(m.userId === currentUser) {
                            return <section key={m.id}>
                                <div>{t.name}: {m.messageContent}</div>
                            
                                <button type="submit" id={m.id}
                                onClick={e => {
                                {   
                                    const id = parseInt(e.target.id)
                                    deleteMessage(id)
                                
                            }}}
                            >Delete
                            </button>

                        </section>
                        } else {
                            return <section key={m.id}>
                                <div>{t.name}: {m.messageContent}</div>
                            </section>
                        }
                
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