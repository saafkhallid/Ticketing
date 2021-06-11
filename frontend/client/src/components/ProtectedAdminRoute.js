import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedAdminRoute = ({ isAuth, role, component: Component, ...rest }) => {
     return (
          <Route
               {...rest}
               render={() => {
                    if(isAuth === true && role === 'admin') {
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

export default ProtectedAdminRoute
