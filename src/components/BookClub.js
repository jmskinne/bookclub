import React from "react"
import { Route, Redirect } from "react-router-dom"
import { AppView } from "./AppView"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const BookClub = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("bookclub_user")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <AppView {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)

