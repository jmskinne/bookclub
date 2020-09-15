import React from "react"

import { Route } from "react-router-dom"

import {BookApiProvider} from "./book/bookAPIProvider"
import {BookList} from "./book/BookList"
import {BookApiSearch} from "./book/BookSearch"
import {BookProvider} from "./book/BookProvider"
import { LibraryList } from "./book/LibraryList"

export const AppView = (props) => {
    return (
        <>
            <h4>Library</h4>
            <BookProvider>
                <Route exact path="/" />
                    <LibraryList />
            </BookProvider>
            
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