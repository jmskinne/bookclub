import React, {useState} from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getAllMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(r => r.json())
            .then(setMessages)
    }

    const getMessagesByUser = (user) => {
        return fetch(`http://localhost:8088/users/${user.id}/?_embed=messages`)
            .then(r => r.json())
    }

    const getMessageByBookClub = (club) => {
        return fetch(`http://http://localhost:8088/${club.id}/1?_embed=messages`)
    }
 
    return (
        <MessageContext.Provider value={{
            messages, getAllMessages, getMessagesByUser, getMessageByBookClub
        }}>
            {props.children}
        </MessageContext.Provider>
    )


}