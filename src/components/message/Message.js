import React from "react"

export const Message = ({m}) => (
    <section className="message-card">
        <div>{m.messageContent}</div>
    </section>
)