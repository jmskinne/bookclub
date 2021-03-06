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

import {UserClubProvider} from "./UserClub/UserClubProvider"
import { BookClubJoinList } from "./bookClubJoin/BookClubJoinList"

import {MessageProvider} from "./message/MessageProvider"
import { LibraryBookDetail } from "./book/LibraryBookDetail"



export const AppView = (props) => {
    return (
        <>
            
            <BookProvider>
                <BookClubJoinProvider>
                <Route exact path="/" render={
                    props => {
                        return <>
                        <LibraryList {...props}/>
                        </>
                    }
                
            } />
            </BookClubJoinProvider>
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
                                return <LibraryList {...props} />
                                
                            }}/>
                            <Route path="/library/:userbookId(\d+)" render={
                                        props => <LibraryBookDetail {...props} />
                                    } />
                            
                    </BookClubJoinProvider>
                </BookApiProvider>
            </BookProvider>

            <BookClubJoinProvider>
                <BookProvider>
                    <UserProvider>
                        <UserClubProvider>
                            <MessageProvider>
                                <Route exact path="/clubs" render={(props) => {
                                    return <BookClubJoinList {...props} />

                                }}>
                                </Route>
                                        
                                    <Route path="/clubs/:bookclubId(\d+)" render={
                                        props => <BookClubDetail {...props} />
                                    } />

                                    
                                    
                                    
                                </MessageProvider>
                        </UserClubProvider>
                    </UserProvider>
                </BookProvider>
            </BookClubJoinProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("bookclub_user")
                    props.history.push("/login")
                }
            } />
                    
                


            
        </>
    )
}

// props => {
//     return <>
//         <BookClubDetail {...props} />
//     </>
// }} />