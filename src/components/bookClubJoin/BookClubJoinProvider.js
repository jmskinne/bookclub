import React, {useState} from "react"

export const BookClubJoinContext = React.createContext()

export const BookClubJoinProvider = (props) => {
    const [clubs, setClubs] = useState([])

    const getClubs = () => {
        return fetch("http://localhost:8088/bookClubs")
            .then(r=>r.json())
            .then(setClubs)
    }

    const JoinABookClub = (clubObj) => {
        return fetch("http://localhost:8088/bookClubs", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(clubObj)
        })
    }

    return (
        <BookClubJoinContext.Provider value={{
            clubs, getClubs, JoinABookClub
        }}>
            {props.children}
        </BookClubJoinContext.Provider>
    )

}