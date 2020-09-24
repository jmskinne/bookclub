import React from "react"

export const Message = ({m, user}) => (
    <section className="message-card" id={m.id}>
        <div>{user.name}: {m.messageContent}</div>
        
    </section>
)