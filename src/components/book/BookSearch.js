import React, {useContext, useRef} from "react"
import {BookApiContext} from "./bookAPIProvider"


import "../book/BookSearchStyle.css"

export const BookApiSearch = () => {
    const { setTerms } = useContext(BookApiContext)
        
    //const {userInput, setUserInput = useState([])
    const searchBox = useRef()


    
    
    return (
        <>
        <div className="container-search">
        <div className="booksearchBar_title">
            <h4>Search Google Books</h4>
        </div>
        <form className="booksearchForm">
            <fieldset className="booksearchinput">
                <label htmlFor="booksearchBar"></label>
                <input ref={searchBox} type="text" required />
            </fieldset>

        <button type="submit" className="booksearchBar" onClick={event => {
            event.preventDefault()
            const userInput = searchBox.current.value
            
            setTerms(userInput) 
            
        }} > Search </button>
        </form>
        </div>

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
                <button type="submit" onClick={event => {
                    
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