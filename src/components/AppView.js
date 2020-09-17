import React from "react"

import { Route } from "react-router-dom"

import { BookApiProvider} from "./book/bookAPIProvider"
import {BookList} from "./book/BookList"
import {BookApiSearch} from "./book/BookSearch"
import {BookProvider} from "./book/BookProvider"
import { LibraryList } from "./book/LibraryList"
import {BookClubJoinProvider} from "./bookClubJoin/BookClubJoinProvider"

export const AppView = (props) => {
    return (
        <>
            <h4> Your Library</h4>
            <BookProvider>
                <Route exact path="/" render={
                    props => {
                        return <>
                        <LibraryList {...props}/>
                        </>
                    }
                
            } />
            </BookProvider>
            
            <BookApiProvider>
                <BookProvider>
                    <Route exact path ="/books" render={
                        props => {
                            return <>
                                    
                                    <BookApiSearch />
                                    <BookList {...props}/>
                                </>
                            }
                    } />
                </BookProvider>
            </BookApiProvider>

            <BookProvider>
                <BookApiProvider>
                    <BookClubJoinProvider>
                        <Route exact path="/library" render={
                            props => {
                                return <>
                                    <LibraryList {...props} />
                                </>
                            }
                        } />
                    </BookClubJoinProvider>
                </BookApiProvider>
            </BookProvider>
                    
                


            
        </>
    )
}