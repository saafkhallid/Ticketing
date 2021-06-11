import React, {useState, useContext} from "react";
import axios from "axios";
import { UserContext } from '../contextApi/Context';
axios.defaults.withCredentials = true;

const Login=()=>{

    const { setInfos } = useContext(UserContext)

    const initialState = { email:'', password:''}
    const [information, setInformation]= useState(initialState)

  const handleChangeInput = e => {
    const {name, value} = e.target
    // console.log(name , " " , value)
        setInformation({...information, [name]: value})
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/Login', information, { withCredentials: true }).then(response => {
            // console.log("login",response)
            setInfos(response.data)
            console.log(response.data)
        })
        .catch(err => { console.log(err) })

        
   }
  
     return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={handelSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                     className="form-control"
                      placeholder=" email"
                      name="email"
                     onChange={handleChangeInput}  
                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                     className="form-control"
                     placeholder="password"
                     name="password"
                     onChange={handleChangeInput}
                     />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }



    export default Login