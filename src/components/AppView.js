import React from "react"

import { Route } from "react-router-dom"

import {BookApiProvider} from "./book/bookAPIProvider"
import {BookList} from "./book/BookList"
import {BookApiSearch} from "./book/BookSearch"
//import {BookProvider} from "./book/BookProvider"

export const AppView = (props) => {
    return (
        <>
            {/* <BookProvider>
                <Route exact path="/" />
                    <BookList />
            </BookProvider> */}
            
            <BookApiProvider>
                <Route exact path ="/books" render={
                    props => {
                       return <>
                            <BookApiSearch />
                            <BookList {...props}/>
                        </>
                    }
                } />
                    
                
            </BookApiProvider>


            
        </>
    )
}