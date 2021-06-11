
import React, { useContext} from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Login from "./components/Login";
import SignUp from "./pages/admin/SignUp";

import User from './pages/User';
import Home from './pages/Home';
import Logout from './pages/Logout';
import  Technicien from './pages/Technicien'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import ProtectedUserRoute from './components/ProtectedUserRoute'
import ProtectedTechRoute from './components/ProtectedTechRoute'
import ProtectedAuthRoute from './components/ProtectedAuthRoute'
import NotFound from './pages/404';
import { UserContext } from './contextApi/Context'
import Dashboard from './pages/admin/Dashbord';
import AllUsers from './pages/admin/Layout/AllUser';



function Routes() {

const { infos:{isAuth, role} } = useContext(UserContext)
console.log({isAuth, role})

    return (
        <>
        <Router>
            <Navbar />
        
            <div className="">
            <div className="">
            <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedAuthRoute path="/logout" component={Logout} />
                <ProtectedAuthRoute path="/sign-in" component={Login} isAuth={isAuth} role={role} />
                <ProtectedAuthRoute path="/sign-up" component={SignUp} isAuth={isAuth} role={role} />
                <ProtectedAdminRoute path="/admin" component={Dashboard} isAuth={isAuth} role={role} />
                <ProtectedUserRoute  path="/user" component={User} isAuth={isAuth} role={role}/>
                <ProtectedUserRoute  path="/AllUsers" component={AllUsers} isAuth={isAuth} role={role}/>
                <ProtectedTechRoute  path="/tech" component={Technicien} isAuth={isAuth} role={role}/>
                {/* 404 */}
                <Route exact path="/404" component={NotFound}/>
                <Redirect to='/404' />
            </Switch>
            </div>
            </div>
        
        </Router>
        </>
    )
}


export default Routes