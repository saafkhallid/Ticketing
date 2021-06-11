    import React, { useState, useContext } from "react"
    import axios from "axios"
    import { UserContext } from '../../contextApi/Context'

    const SignUp = () => {
        const { setInfos } = useContext(UserContext)

        const initialState = {username :'', email:'', password:'', phone:0 ,department:'' ,role:''}
        const [information, setInformation]= useState(initialState)
        const [message, setMessage] =useState('')

      const handleChangeInput = e => {
        const {name, value} = e.target
        // console.log(name , " " , value)
        setInformation({...information, [name]: value})
        }

        const handelSubmit = (e) =>{
            e.preventDefault()
            // console.log(information)
            axios.post('http://localhost:3000/api/register', information)
            .then(response => {
                console.log(response)
                setInfos(response.data)
                setMessage(response.data.message)
            })
            .catch(err => { console.log(err) })
            
       }
      
            return (
                <div className="auth-wrapper">
                <div className="auth-inner">
                <form className='mt-5' onSubmit={handelSubmit}>
                    <h3>Sign Up as {information.role}</h3>
                    {message ? 
                        <div class="alert alert-secondary" role="alert">
                            {message}
                        </div> : null}
                    <div className="form-group">
                    <select className="custom-select" name="role" onChange={handleChangeInput} >
                        <option>select client</option>
                        <option value="admin">admin</option>
                        <option value="user">uesr</option>
                        <option value="technicien">technicien</option>
                    </select>
                    </div>

                    <div className="form-group" >
                        <label>First name</label>
                        <input type="username" 
                        className="form-control"
                        placeholder="username" 
                        name="username"
                        onChange={handleChangeInput}
                        />
                    </div>


                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                            className="form-control" 
                            placeholder="email" 
                            name="email"
                             onChange={handleChangeInput}
                           />
                    </div>

                    {information.role === 'admin' ? null :
                    <div className="form-group">
                        <label> Phone</label>
                        <input type="Number"
                        className="form-control"
                        placeholder="phone" 
                        name="phone"
                        onChange={handleChangeInput}
                        />
                    </div>
                    }

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                        className="form-control"
                         placeholder="password" 
                         name="password"
                          onChange={handleChangeInput}
                        />
                    </div>
                    {information.role === 'technicien' ?  
                    <div className="form-group">
                         <label>Department</label><br/>
                         <select className="custom-select" name="department" onChange={handleChangeInput}>
                         <option>Department</option>
                         <option value='hardware'>Hardware</option>
                         <option value='software'>Software</option>
                         </select>
                    </div>  
                    : 
                     <div className="form-group">
                     <label>Department</label><br/>
                     <select className="custom-select" name="department" onChange={handleChangeInput}>
                     <option>Department</option>
                     <option value='designer'>Technicien IT</option>
                     <option value='Web Developer'> ingénier IT</option>
                     </select>
                </div> 
                    
                    }
                   
                   
                         
                    <button type="submit" 
                    className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/">sign in?</a>
                    </p>
                </form>
                </div> 
                </div> 
            );
        }


export default SignUp
    