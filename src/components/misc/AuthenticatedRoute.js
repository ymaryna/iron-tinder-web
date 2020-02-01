import React, { userContext }from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

const AuthenticatedRoute = (props) => {
    const { currentUser } = userContext(AuthContext)
    if (!currentUser) {
        return <Redirect to="/login"/>
    } else {
        return <Route {...props} />
    }
}

export default AuthenticatedRoute
