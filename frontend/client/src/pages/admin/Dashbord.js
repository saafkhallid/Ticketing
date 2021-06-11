import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllUsers from './Layout/AllUser'
import AllTicket from './Layout/AllTicket'
import AssignTicket from './Layout/AssinTicket' 


import Logout from '../Logout'

import SideBare from './SideBare'
import NavContent from './NavContent'


function Dashboard() {
    const [sideBar, setSideBar] = useState(false)

    const showSidebar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className="wrapper">
            <Router>
                <SideBare side = {sideBar}/>
                <div id="content">
                    <NavContent viewSideBar={showSidebar} />
                    <Switch>
                        <Route exact path='/users' component= {AllUsers} />
                        <Route exact  path='/tickets' component= {AllTicket} />
                        <Route exact path='/assign/:id' component= {AssignTicket} />
                        {/* <Route exact path='/addDepartment' component= {AddDepartment} />
                        <Route exact path='/allDepartment' component= {AllDepartment} /> */}
                        <Route exact path='/logout' component= {Logout} />
                    </Switch>
                </div>
            </Router>
        </div>
        
    )
}

export default Dashboard