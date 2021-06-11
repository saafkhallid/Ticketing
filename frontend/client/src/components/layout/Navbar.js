import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../contextApi/Context'


const Navbar = () => {
  const { infos:{isAuth} } = useContext(UserContext)

    return (
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container   nav-link__mod"  >
          <Link className="navbar-brand" to={"/sign-in"}> System Ticket</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item   nav-link__mod">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              {!isAuth ?
                (
                  <>
                  <li className="nav-item   nav-link__mod">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item  nav-link__mod">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                  </>
                )
                :
                (
                  <li className="nav-item  nav-link__mod">
                    <Link className="nav-link" to={"/logout"}>Logout</Link>
                  </li>
                )
              }
              
            </ul>
          </div>
        </div>
      </nav>

     
      </div>
        
    )

}
    



export default Navbar;