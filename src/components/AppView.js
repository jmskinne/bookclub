import React from "react"

import { Route } from "react-router-dom"

import {BookApiProvider} from "./book/bookAPIProvider"
import {BookList} from "./book/BookList"
import {BookProvider} from "./book/BookProvider"

export const AppView = (props) => {
    return (
        <>
            {/* <BookProvider>
                <Route exact path="/" />
                    <BookList />
            </BookProvider> */}
            
            <BookApiProvider>
                <Route exact path ="/books">
                    <BookList />
                </Route>
            </BookApiProvider>


            
        </>
    )
}