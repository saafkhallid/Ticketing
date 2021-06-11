import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const UserContext = createContext(null)

export const UserProvider = ({children}) => {

    // const [isAuth, setIsAuth] = useState(false)
    // const [role, setRole] = useState('')
    const [infos, setInfos] = useState({isAuth : false, role: ''}) 

    useEffect(() => {
        axios.get('http://localhost:3000').then(response => {
          console.log(" context",response.data)
        //   setIsAuth(response.data.isAuth)
        //   setRole(response.data.role.role)
        setInfos(response.data)
        })
        .catch(err => { console.log(err) })
    }, [])

    return(
        <UserContext.Provider value={{infos, setInfos}}>
            {children}
        </UserContext.Provider>
    )
}