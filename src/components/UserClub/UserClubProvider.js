import React, {useState} from "react"

export const UserClubContext = React.createContext()

export const UserClubProvider = (props) => {
    const [userClubs, setUserClubs] = useState([])

    const getUserClubs = () => {
        return fetch("http://localhost:8088/userClubs")
            .then(r => r.json())
            .then(setUserClubs)
    }

    return (
        <UserClubContext.Provider value={{
            userClubs, getUserClubs
        }}>
            {props.children}
        </UserClubContext.Provider>
    )
}