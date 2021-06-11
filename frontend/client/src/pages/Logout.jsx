/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../contextApi/Context'

function Logout() {
    const { setInfos} = useContext(UserContext)
    useEffect(() => {
        axios.get('http://localhost:3000/api/logout')
        .then((response) => setInfos(response.data))
    }, [])
    return (
        <>
            <Redirect to="/" /> 
        </>
    )
}

export default Logout
