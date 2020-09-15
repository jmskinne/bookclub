import React, {useContext, useEffect, useState} from "react"
import {BookApiContext} from "./bookAPIProvider"

export const BookApiSearch = () => {
    const {setTerms } = useContext(BookApiContext)
        
    //const {userInput, setUserInput = useState([])

    
    
    return (
        <>
        <input type="text" className="bookApiSearch" onChange={event => {
            setTerms(event.target.value) 
            
        }} /> 

            {/* Book Search:
            <input type="text" className="bookAPI__search"
            
            onChange={
                (keyEvent) => { 
                    setTerms(keyEvent.target.value)
                }
            }
            placeholder="Search for a Book" /> */}
            {/* <form>
                <label htmlFor="apiSearch">Title Search</label>
                <input type="text" name="apiSearch" id="apiSearch"  />
                <button type="submit" onSubmit={event => {
                    
                    event.preventDefault()
                    setTerms(event.target.value)
                    
                    
                    
                    
                    }}
                    
                    
                    className="bookAPI_button">
                    Search for Book 
                </button>
            </form> */}
            
        </>    
    )
}