import React, {useState} from "react"

export const BookClubJoinContext = React.createContext()

export const BookClubJoinProvider = (props) => {
    const [clubs, setClubs] = useState([])
    const [clubcheck, setCheck] = useState("")
    

    const getClubs = () => {
        return fetch("http://localhost:8088/bookclubs")
            .then(r => r.json())
            .then(setClubs)
    }

    const CreateABookClub = (clubObj) => {
        return fetch("http://localhost:8088/bookclubs", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(clubObj)
        })
    }

    const getClubsById = (bookClubId) => {
        return fetch(`http://localhost:8088/bookclubs/${bookClubId}?_expand=userbooks&_embed=books`)
            .then(r => r.json())
    }

    const getClubsByBook = (bookId) => {
        return fetch(`http://localhost:8088/books/${bookId}?_embed=bookclubs`)
            .then(r => r.json())
            .then(setClubs)
    }

    const JoinClub = (club) => {
        return fetch("http://localhost:8088/userclubs", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(club)
        })
    }

    return (
        <BookClubJoinContext.Provider value={{
            clubs, getClubs, CreateABookClub, getClubsById, JoinClub, getClubsByBook
        }}>
            {props.children}
        </BookClubJoinContext.Provider>
    )

}