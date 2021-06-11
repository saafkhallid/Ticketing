import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedUserRoute({ isAuth, role, component: Component, ...rest }) {
    return (
        <Route
               {...rest}
               render={() => {
                    if(isAuth === true && role === 'user') {
                        return <Component />
                    } else {
                        return (
                              <Redirect to='/sign-up' />
                        )
                    }

               }}
          />
    )
}

export default ProtectedUserRoute
