import React, {useState, useEffect, useContext, useRef} from "react"

import {BookClubJoinContext} from "./BookClubJoinProvider"
import {MessageContext} from "../message/MessageProvider"
//import {Message} from "../message/Message"
import {UserContext} from "../Users/UserProvider"

import "./BookClubDetailStyle.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'

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

    // useEffect(() => {
    //     const usermessage = messages.filter(m => m.userId === )
    // })

    
    
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
        <>
        <div className="bookClubContainer">
        <div className="headerContainer" >
            
                <h5>{club.name} Message Board</h5>
            
                <img src={club.cover} />
                
            </div>
        <article className="topContainer">
            <div className="messageContainer">
            {
                
                    messagesForClub.map(m => {
                        const t = users.find(user => user.id === m.userId) || {}
                        if(m.userId === currentUser) {
                            return <section key={m.id} className="theMessageContainer" >
                                <div className="message_user">{t.username}: {m.messageContent} </div>
                                <button type="submit" value={m.id} id="chatDeleteBtn" 
                                    onClick={e => {
                                        const id = parseInt(e.target.value)
                                        deleteMessage(id)
                                    }}>
                                </button>
                            </section>
                            } else {
                                return <section key={m.id} className="secondMessageContainer" >
                                <div className="message_userTwo">{t.username}: {m.messageContent} </div>
                                </section>
                            }
                                
                                
                                
                                
                            
                        
                
                })
                
                    
                }
                
            
                </div>

            </article>
            <form className="chatForm">
                
                <fieldset>
                    <div className="chatForm-group">
                        <label htmlFor="chatBox"></label>
                        <input type="text" id="chatBox" ref={sendMessage} required className="chatForm-control" placeholder="Send Group Message" />
                    
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
        <div className="library__backBtn">
        <FontAwesomeIcon type="submit" className="backBtn" icon={faArrowAltCircleLeft} size="2x"
             onClick={e => {
                 
                 e.preventDefault()
                 props.history.push("/clubs")
             }}
             >Back
        </FontAwesomeIcon>
         <div className="backBtnText">Back</div>
         </div>
         </>
    )
                
                


}