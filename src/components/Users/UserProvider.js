import React, {useState} from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    
    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(r => r.json())
            .then(setUsers)
    }

    return (
        <UserContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
    
}