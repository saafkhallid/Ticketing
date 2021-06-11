import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedAuthRoute({ isAuth, role, component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={() => (
           !isAuth ? <Component/> 
                   : (role === "admin" 
                     ? <Redirect to="/admin" />
                       : ( role === "technicien"
                        ? <Redirect to="/tech" /> 
                        : <Redirect to="/user" />)
            )
   
       )}
   />
    )
}

export default ProtectedAuthRoute
