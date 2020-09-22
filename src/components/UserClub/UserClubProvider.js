import React, {useState} from "react"

export const UserClubContext = React.createContext()

export const UserClubProvider = (props) => {
    const [userclubs, setUserClubs] = useState([])

    const getUserClubs = () => {
        return fetch("http://localhost:8088/userclubs")
            .then(r => r.json())
            .then(setUserClubs)
    }

    return (
        <UserClubContext.Provider value={{
            userclubs, getUserClubs
        }}>
            {props.children}
        </UserClubContext.Provider>
    )
}