import React, {useState} from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getAllMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(r => r.json())
            .then(setMessages)
    }

    const getMessagesByUsers = () => {
        return fetch(`http://localhost:8088/users/?_embed=messages`)
            .then(r => r.json())
    }

    const getMessageByBookClub = (bookclubId) => {
        return fetch(`http://localhost:8088/bookclubs/${bookclubId}?_embed=messages`)
            .then(r => r.json())
            
    }

    const addMessage = (messageObj) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getAllMessages)
    }

    const deleteMessage = (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
        .then(getAllMessages)
    }   
 
    return (
        <MessageContext.Provider value={{
            messages, getAllMessages, getMessageByBookClub, addMessage, getMessagesByUsers, deleteMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )


}