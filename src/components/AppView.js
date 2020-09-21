import React from "react"

import { Route } from "react-router-dom"

import { BookApiProvider} from "./book/bookAPIProvider"
import {BookList} from "./book/BookList"
import {BookApiSearch} from "./book/BookSearch"
import {BookProvider} from "./book/BookProvider"
import { LibraryList } from "./book/LibraryList"
import { BookClubJoinProvider} from "./bookClubJoin/BookClubJoinProvider"
import {BookClubDetail} from "./bookClubJoin/BookClubDetail"
import {UserProvider} from "./Users/UserProvider"
//import {BookClubJoinList} from "./bookClubJoin/BookClubJoinList"
import {UserClubProvider} from "./UserClub/UserClubProvider"
import { BookClubJoinList } from "./bookClubJoin/BookClubJoinList"
export const AppView = (props) => {
    return (
        <>
            
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

            <BookClubJoinProvider>
                <BookProvider>
                    <UserProvider>
                        <UserClubProvider>
                            <Route exact path="/clubs" render={(props) => {
                                return <BookClubJoinList {...props} />

                            }}>
                            </Route>
                                    
                                <Route path="/clubs/join/:bookClubId(\d+)" render={
                                    props => <BookClubDetail {...props} />
                                } />
                        </UserClubProvider>
                    </UserProvider>
                </BookProvider>
            </BookClubJoinProvider>
                    
                


            
        </>
    )
}

// props => {
//     return <>
//         <BookClubDetail {...props} />
//     </>
// }} />